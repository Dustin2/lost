//dependencies
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

//components
import ChartsRecu from "../components/charts/ChartsRecu";
import MyPicker from "../components/picker/Picker";

const ShowChartsRecu = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <ChartsRecu />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowChartsRecu;
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
