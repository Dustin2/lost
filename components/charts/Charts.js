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
} from "react-native";
//componets
import { Picker } from "@react-native-picker/picker";
import FisrtYear from "./FisrtYear";
import SecondYear from "./SecondYear";
import ThirdYear from "./ThirdYear";
import FourthYear from "./FourthYear";
const Charts = (props) => {
  const [selectedItem, setSelectedItem] = useState("opcion1");
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>SELECCIONA EL AÑO </Text>
          <Picker
            selectedValue={selectedItem}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedItem(itemValue);
            }}
            prompt="selecciona el año"
          >
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2020" value="2020" />
            <Picker.Item label="2021" value="2021" />
            <Picker.Item label="2022" value="2022" />
          </Picker>
          {console.log(selectedItem)}
        </View>
        <View>
          {selectedItem == "2019" && <FisrtYear />}
          {selectedItem == "2020" && <SecondYear />}
          {selectedItem == "2021" && <ThirdYear />}
          {selectedItem == "2022" && <FourthYear />}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Charts;

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
