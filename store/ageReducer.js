import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: {
    year: "",
    month: "",
    day: "",
    dayName: "",
  },
};

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const nowDate = new Date();

const ageSlice = createSlice({
  name: "ageCalculator",
  initialState,
  reducers: {
    updateDate: (state, action) => {
      state.date.year = Math.floor(
        nowDate / (1000 * 3600 * 24 * 365.25) - action.payload
      ).toString();

      state.date.month = Math.floor(
        (nowDate / (1000 * 3600 * 24 * 365.25) -
          action.payload -
          state.date.year) *
          12
      ).toString();

      state.date.day = Math.floor(
        ((nowDate / (1000 * 3600 * 24 * 365.25) -
          action.payload -
          state.date.year) *
          12 -
          state.date.month) *
          30
      ).toString();
    },

    updateDayName: (state, action) => {
      state.date.dayName = DAYS[action.payload];
    },
    closeModal: (state) => {
      state.date.year = "";
    },
  },
});

export const { updateDate, closeModal, updateDayName } = ageSlice.actions;

export default ageSlice.reducer;
