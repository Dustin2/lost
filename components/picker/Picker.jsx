//dependencies
import React, { useState } from "react";

//react native
import { View, Text, StyleSheet } from "react-native";

//componets
import { Picker } from "@react-native-picker/picker";

//data
import { stolenCars } from "../../data/data";

const MyPicker = ({props}) => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <View>
      <Text>SELECCIONA EL AÑO </Text>
      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedItem(itemValue);
        }}
        prompt="selecciona el año"
      >
        {stolenCars.map((cars,item) => {
          return (
            <Picker.Item
              key={cars.year}
              label={cars.year}
              value={cars.year}
              // value={{ place: place.place, location: place.NameOfLocation }}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default MyPicker;

const style = StyleSheet.create({});
