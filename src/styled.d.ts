import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            white: string;
            black: string;
            yellow: string;
            ivory: string;
            grey: string;
        };
        families: {
            heading: string;
            body: string;
        };
        sizes: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        breakpoints: {
            small: string;
            medium: string;
            large: string;
        };
    }
}
