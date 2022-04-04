import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../models/beerModel";
import { beersService } from "../../service/beersService";

export interface BeersState {
    beers: {
        beers: Beer[]
    }
}

const initialState: BeersState =  {
    beers: {
        beers: []
    }
};

export const getBeersAsync = createAsyncThunk(
    "beers/getBeers",
    async () => {
        const response = await beersService.getBeers();
        return response;
    }
);

export const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        setBeers: (state, action: PayloadAction<{}>) => {
            // state.beers = action.payload;
        }
    },
    extraReducers: {
        [getBeersAsync.fulfilled.type]: (state, action) => {
            state.beers = action.payload;
        }
    }
});

export const { setBeers } = beersSlice.actions;

export const selectBeers = (state: BeersState) => state.beers.beers;

export default beersSlice.reducer;