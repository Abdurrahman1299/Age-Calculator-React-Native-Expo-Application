import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/ageReducer";

export default function ModalCp() {
  const year = useSelector((state) => state.ageCalculator.date.year);
  const month = useSelector((state) => state.ageCalculator.date.month);
  const day = useSelector((state) => state.ageCalculator.date.day);
  const dayName = useSelector((state) => state.ageCalculator.date.dayName);

  const dispatch = useDispatch();
  function cancelHandler() {
    dispatch(closeModal());
  }
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.contianer}>
        <View style={[styles.section, { flexDirection: "row" }]}>
          <Text style={styles.text}>You Was Born in: </Text>
          <Text style={styles.inText}>{dayName}</Text>
        </View>
        <View style={[styles.section, { alignItems: "flex-start" }]}>
          <Text style={styles.text}>Your Age is:</Text>
          <Text style={styles.inText}>
            {year} <Text style={styles.text}>Years</Text>
          </Text>
          <Text style={styles.inText}>
            {month} <Text style={styles.text}>Months</Text>
          </Text>
          <Text style={styles.inText}>
            {day} <Text style={styles.text}>Days</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Pressable onPress={cancelHandler} style={styles.button}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#ddd" }}>
              Select New Date
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#233333",
    width: "80%",
    marginVertical: 80,
    borderRadius: 50,
  },
  section: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  inText: {
    color: "#bd8338",
    fontSize: 26,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#bd8338",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: -50,
  },
});
