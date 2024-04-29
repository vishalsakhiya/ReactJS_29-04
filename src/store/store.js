import { configureStore } from "@reduxjs/toolkit";
import HarryPotterSlice from "./slice/HarryPotterSlice";

export const store = configureStore({
  reducer: { HarryPotterSlice },
});
