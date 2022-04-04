import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../models/beerModel";
import { RootState } from "../../redux/store";
import { beersService } from "../../service/beersService";

export interface BeersState {
    beers: Beer[]
}

const initialState: BeersState = {
    beers: []
};

export const getBeersAsync = createAsyncThunk(
    "beers/getBeers",
    async (name: string = "") => {
        const response = await beersService.getBeers(name);
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
        }
    }
});

export const { setBeers } = beersSlice.actions;

export const selectBeers = (state: RootState) => state.beers.beers;

export default beersSlice.reducer;