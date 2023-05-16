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
