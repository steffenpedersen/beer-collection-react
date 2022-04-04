import { Beer } from "../models/beerModel";

export const beersService = {
    // Get beers and return them as an array of Beer objects with filtered data
    getBeers: async (name: string): Promise<Beer[]> => {
        let url = "https://api.punkapi.com/v2/beers";

        if (name) {
            url += `?beer_name=${name}`;
        }

        const response = await fetch(url);
        const beers = await response.json();

        return beers.map((beer: Beer) => ({
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            first_brewed: beer.first_brewed,
            description: beer.description,
            image_url: beer.image_url,
        }));
    }
};