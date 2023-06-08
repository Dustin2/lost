//dependencies
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
//componets
import { Picker } from "@react-native-picker/picker";
import FirstYearRecu from "./FirstYearRecu";
import SecondYearRecu from "./SecondYearRecu";
import ThirdYearRecu from "./ThirdYearRecu";
const ChartsRecu = () => {
  const [selectedItem, setSelectedItem] = useState("2020");
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text>SELECCIONA EL AÑO </Text>
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedItem(itemValue);
          }}
          prompt="selecciona el año"
          themeVariant="dark"
        >
          {/* <Picker.Item label="2019" value="2019" /> */}
          <Picker.Item label="2020" value="2020" />
          <Picker.Item label="2021" value="2021" />
          <Picker.Item label="2022" value="2022" />
        </Picker>
        {selectedItem == "2020" && <FirstYearRecu />}
        {selectedItem == "2021" && <SecondYearRecu />}
        {selectedItem == "2022" && <ThirdYearRecu />}
      </SafeAreaView>
    </View>
  );
};

export default ChartsRecu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  graphStyle: {
    flex: 1,
    paddingRight: 25,
  },
});
