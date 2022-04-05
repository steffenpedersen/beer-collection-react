import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Beer } from "../../models/beerModel";
import { RootState } from "../../redux/store";
import { beersService } from "../../service/beersService";

export interface BeersState {
    beers: Beer[]
    beer: Beer
}

const initialState: BeersState = {
    beers: [],
    beer: {} as Beer
};

export const getBeersAsync = createAsyncThunk(
    "beers/getBeers",
    async (name: string = "") => {
        const response = await beersService.getBeers(name);
        return response;
    }
);

export const getBeerAsync = createAsyncThunk(
    "beers/getBeer",
    async (id: string) => {
        const response = await beersService.getBeer(id);
        console.log(response)
        return response;
    }
);

export const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        setBeers: (state, { payload }) => {
            state.beers = [...state.beers, ...payload];
        }
    },
    extraReducers: {
        [getBeersAsync.fulfilled.type]: (state, action) => {
            state.beers = action.payload;
        },
        [getBeersAsync.rejected.type]: (state, action) => {
            console.error(action.error);
        },
        [getBeerAsync.fulfilled.type]: (state, action) => {
            state.beer = action.payload;
        },
        [getBeerAsync.rejected.type]: (state, action) => {
            console.error(action.error);
        }
    }
});

export const { setBeers } = beersSlice.actions;

export const selectBeers = (state: RootState) => state.beers.beers;

export const selectBeer = (state: RootState) => state.beers.beer;

export default beersSlice.reducer;