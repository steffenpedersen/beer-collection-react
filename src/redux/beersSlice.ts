import { handleRejected, initialStateBase, StatusSliceBase, handleSuccess, handlePending, genericApiErrorMessage } from './helpers';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Beer } from "../models/beerModel";
import { RootState } from "./store";
import { beersService } from "../service/beersService";

export interface BeersState {
    beers: Beer[]
    beersRequest: StatusSliceBase
    beer: Beer
    beerRequest: StatusSliceBase
}

const initialState: BeersState = {
    beers: [],
    beersRequest: initialStateBase,
    beer: {} as Beer,
    beerRequest: initialStateBase
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
        [getBeersAsync.pending.type]: (state) => {
            handlePending(state.beersRequest);
        },
        [getBeersAsync.fulfilled.type]: (state, action) => {
            state.beers = action.payload;
            handleSuccess(state.beersRequest);
        },
        [getBeersAsync.rejected.type]: (state, action) => {
            console.error(action.error);
            handleRejected(state.beersRequest, genericApiErrorMessage);
        },
        [getBeerAsync.pending.type]: (state) => {
            handlePending(state.beerRequest);
        },
        [getBeerAsync.fulfilled.type]: (state, action) => {
            state.beer = action.payload;
            handleSuccess(state.beerRequest);
        },
        [getBeerAsync.rejected.type]: (state, action) => {
            console.error(action.error);
            handleRejected(state.beerRequest, genericApiErrorMessage);
        }
    }
});

export const { setBeers } = beersSlice.actions;

export const selectBeers = (state: RootState) => state.beers.beers;
export const selectBeersStatus = (state: RootState) => state.beers.beersRequest;
export const selectBeer = (state: RootState) => state.beers.beer;
export const selectBeerStatus = (state: RootState) => state.beers.beerRequest;

export default beersSlice.reducer;
