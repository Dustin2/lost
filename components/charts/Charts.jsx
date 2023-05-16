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
import FisrtYear from "./FisrtYear";
import SecondYear from "./SecondYear";
import ThirdYear from "./ThirdYear";
import FourthYear from "./FourthYear";


import { places } from "../../Places/Places";
// export const Serch = () => {
//   const newArray = [];
//   colony = [
//     {
//       colonyName: "centro",
//       population: 61,
//     },
//     {
//       colonyName: "lomas de circunvalacion",
//       population: 7,
//     },
//     {
//       colonyName: "jardines de vista hermosa",
//       population: 9,
//     },
//     {
//       colonyName: "fatima",
//       population: 7,
//     },
//     {
//       colonyName: "infonavit estancia",
//       population: 5,
//     },
//     {
//       colonyName: "lazaro cardenas",
//       population: 4,
//     },
//     {
//       colonyName: "niños heroes",
//       population: 3,
//     },
//     {
//       colonyName: "albarrada",
//       population: 3,
//     },
//     {
//       colonyName: "san pablo",
//       population: 3,
//     },
//     {
//       colonyName: "lomas de vista hermosa",
//       population: 3,
//     },
//     {
//       colonyName: "infonavit estancia",
//       population: 5,
//     },
//     {
//       colonyName: "villa san sebastian",
//       population: 3,
//     },
//     {
//       colonyName: " estancia",
//       population: 3,
//     },
//     {
//       colonyName: "la oriental",
//       population: 4,
//     },
//     {
//       colonyName: "el porvenir",
//       population: 8,
//     },

//     {
//       colonyName: "jardines de la corregidora",
//       population: 5,
//     },
//   ];

//   colony.map((place) => {
//     newArray.push(place.colonyName.toLocaleUpperCase());
//   });

//   let results = places.filter((obj) =>
//     newArray.includes(
//       obj.NameOfLocation.toLocaleUpperCase()
//       // newArray.includes(obj.NameOfLocation.toLocaleUpperCase())
//     )
//   );
//   // if (results.length > 0) {
//   //   console.log(results); // this will not be executed because results is an empty array
//   // } else {
//   //   console.log("No matches found.");
//   // }
//   const finalColony = [];
//   finalColony.push(results);
//   console.log(results);
// };

const Charts = (props) => {
  const [selectedItem, setSelectedItem] = useState("2019");
  return (
    <View>
      {/* {Serch()} */}
      <SafeAreaView style={styles.container}>
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
