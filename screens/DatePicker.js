import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import { updateDate, updateDayName } from "../store/ageReducer";
import ModalCp from "./ModalCp";

export default function DatePicker() {
  const dispatch = useDispatch();
  const birthYear = useSelector((state) => state.ageCalculator.date.year);

  function onChange(event, selectedDate) {
    const currentDate = selectedDate;
    dispatch(updateDate(currentDate / (1000 * 3600 * 24 * 365.25)));
    dispatch(updateDayName(currentDate.getDay()));
  }

  if (birthYear !== "") {
    return <ModalCp />;
  }
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={new Date(2010, 0, 1)}
      mode="date"
      onChange={onChange}
      display="spinner"
      maximumDate={new Date()}
      minimumDate={new Date(1960, 1, 1)}
      textColor="red"
    />
  );
}
