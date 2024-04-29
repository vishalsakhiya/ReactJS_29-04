import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const HarryPotterListGetApi = createAsyncThunk(
  "harrypotterlist/GetData",
  async () => {
    try {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters`
      );
      return await response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

const HarryPotterSlice = createSlice({
  name: "Harry-potter-list",
  initialState: {
    data: [],
    filterdata: [],
    status: null,
  },
  reducers: {
    filterData: (state, action) => {
      state.data = state.filterdata.filter(
        (character) =>
          character.name.toLowerCase().includes(action.payload) ||
          character.actor.toLowerCase().includes(action.payload)
      );
    },
    updateData: (state, action) => {
      state.data = state.filterdata.filter(
        (character) => character[action.payload] === true
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HarryPotterListGetApi.pending, (state) => {
      state.status = "Pending";
    });
    builder.addCase(HarryPotterListGetApi.fulfilled, (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
      state.filterdata = action.payload;
    });
    builder.addCase(HarryPotterListGetApi.rejected, (state) => {
      state.status = "Rejected";
    });
  },
});

export const { filterData, updateData } = HarryPotterSlice.actions;
export default HarryPotterSlice.reducer;
