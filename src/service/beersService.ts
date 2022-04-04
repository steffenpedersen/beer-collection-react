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
    },

    // Get beer by id and return it as a Beer object with filtered data
    getBeer: async (id: string): Promise<Beer> => {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
        const beer = await response.json();

        return {
            id: beer[0].id,
            name: beer[0].name,
            tagline: beer[0].tagline,
            first_brewed: beer[0].first_brewed,
            description: beer[0].description,
            image_url: beer[0].image_url,
        };
    }
};
