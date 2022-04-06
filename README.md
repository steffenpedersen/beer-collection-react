# Beer Collection 🍻

- [Beer Collection 🍻](#beer-collection-)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
  - [Folder Structure](#folder-structure)
  - [Redux](#redux)
    - [How It Works](#how-it-works)
    - [Error handling](#error-handling)
  - [Further Development](#further-development)
    - [Tests](#tests)
    - [Pagination](#pagination)
    - [Loading Animation](#loading-animation)
    - [The Detailed Page](#the-detailed-page)
    - [The search bar](#the-search-bar)

This project was built with [Create React App](https://github.com/facebook/create-react-app), using the Redux and Redux Toolkit. I have also added React Router, React Spring and Styled Components. The project is using client side rendering, which theoretically might not be the best idea, because it will give the client more JavaScript to handle. Because it is such a small app, I think it is completely alright. I wrote a short post about this [here](https://www.steffenp.dk/posts/12fd4760-89d2-4a9a-9f6b-547d0dbed1ba).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder Structure

Here is a list with a description of the content of the folders. I have modified the structure from Create React App to enhance separation of concerns.

- **public**: static content
- **src**: main content
  - **components**: components with `.tsx` and `test.tsx`
  - **css**: theme, global css and helpers
  - **hooks**: custom hooks
  - **models**: global types
  - **pages**: the main pages
  - **redux**: initialization of the state
  - **service**: fetch the data

## Redux

I chose to use the state management and pattern library Redux Toolkit for a centralized store for all components. This project is not that big - but it's nice with a single source of truth for data/state.

### How It Works

![https://miro.medium.com/max/919/1*EdiFUfbTNmk_IxFDNqokqg.png](https://miro.medium.com/max/919/1*EdiFUfbTNmk_IxFDNqokqg.png)

If we use an example of the list of beers in the `beersSlice` 🍕, then we have the view `App.tsx`, where we `dispatch` the `getBeersAsync`, which use an `createAsyncThunk` to fetch the data with the service `beersService.getBeers`, where it is being listened with the `extraReducers` that automatically generates `actions`, that will update the `state` with `beers`. We are then in `BeersList.tsx` using `selectBeers` to select the beers and `map` over the array to make the list.

In the `AddBeer.tsx` I `dispatch` the reducer `setBeers` with an object, which then updates the `state`.

In the `Search.tsx` I `dispatch` the `getBeersAsync` with an argument.

### Error handling

I handle errors through `extraReducers`, that automatically checks the process. I then set the `beersRequest` state or `beerRequest` state with different helpers of the `StatusSliceBase`. In the components, I `selectBeersStatus` and check for the status and show an error message or loading message.

## Further Development

I have written down a few thoughts on possible further development.

### Tests

The project is already set up to handle tests. It would be great to make tests and especially integration tests or end to end tests. This should be done to check that we're getting a 200 response from the API. We could do this with the Jest test framework. Kent Beck (author of Test Driven Development) once wrote *"I get paid for code that works, not for tests"*. This is, of course, a bold statement with a fine line.

### Pagination

I started creating pagination for the list of beers, but I need more information from the API. They have the endpoint `https://api.punkapi.com/v2/beers?page=2&per_page=80`, but I would also like to know the total number of beers.

### Loading Animation

I would like to add a smoother loading animation, because it takes some time to get the data from the API.

### The Detailed Page

I would also like to add more content to the `BeerDetailPage.tsx`.

### The search bar

The search could be done with `onInput` instead of `onSubmit`.
