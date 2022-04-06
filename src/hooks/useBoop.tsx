import React, { useEffect, useState } from "react";
import { SpringValue, useSpring } from "react-spring";

type BoopType = [
  {
    display: SpringValue<string>;
    backfaceVisibility: SpringValue<string>;
    transform: SpringValue<string>;
  },
  () => void
];

// * This is a custom hook with inspiration from
// * https://www.joshwcomeau.com/react/boop/

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}): BoopType {
  const [isBooped, setIsBooped] = useState(false);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });

  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  return [style, trigger];
}

export default useBoop;
