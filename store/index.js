import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "./ageReducer";

const store = configureStore({
  reducer: {
    ageCalculator: ageReducer,
  },
});

export default store;
