import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBeers } from "../beers/beersSlice";

function AddBeer() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const createUrlFromFile = (file: File) => {
    return URL.createObjectURL(file);
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(
      setBeers([
        {
          id: 1,
          name: name,
          tagline: "Tagline 1",
          description: "Description 1",
          image_url: createUrlFromFile(image!),
        },
      ])
    );
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="file"
        onChange={(event) =>
          setImage((event.target as HTMLInputElement).files![0])
        }
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBeer;
