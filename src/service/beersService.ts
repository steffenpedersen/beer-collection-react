
export const beersService = {
    // TODO: Add types
    getBeers: () => {
        return fetch("https://api.punkapi.com/v2/beers")
            .then(response => response.json())
            .then(data => data);
    }
};