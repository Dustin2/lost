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
import MyPicker from "../picker/Picker";
import FisrtYear from "./FisrtYear";
const Charts = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View>
          <MyPicker />
        </View>
        <View>
          <FisrtYear />
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
