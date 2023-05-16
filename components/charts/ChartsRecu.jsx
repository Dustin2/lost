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
const ChartsRecu = () => {
  const [selectedItem, setSelectedItem] = useState("2019");
  return (
    <View>
      <View>
        <Text>SELECCIONA EL AÑO </Text>
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedItem(itemValue);
          }}
          prompt="selecciona el año"
          themeVariant="dark"
        >
          <Picker.Item label="2019" value="2019" />
          <Picker.Item label="2020" value="2020" />
          <Picker.Item label="2021" value="2021" />
          <Picker.Item label="2022" value="2022" />
        </Picker>
      </View>
    </View>
  );
};

export default ChartsRecu;
