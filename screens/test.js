import React, { useState, useEffect } from "react";
import { ScreenWidth } from "react-native-elements/dist/helpers";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
//firebase
import { database } from "../firebase/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  querySnapshot,
  doc,
} from "firebase/firestore";

//import React Native chart Kit for different kind of Chart
import { LineChart } from "react-native-chart-kit";

import { LinearGradient } from "expo-linear-gradient";

// function mostFrequentWord(arr, n) {
//   // freq to store the freq of the most occurring variable
//   let freq = 0;

//   // res to store the most occurring string in the array of
//   // strings
//   let res = "";

//   // running nested for loops to find the most occurring
//   // word in the array of strings
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = i + 1; j < n; j++) {
//       if (JSON.stringify(arr[j]) === JSON.stringify(arr[i])) {
//         count++;
//       }
//     }

//     // updating our max freq of occurred string in the
//     // array of strings
//     if (count >= freq) {
//       res = arr[i];
//       freq = count;
//     }
//   }

//   console.log("The word that occurs most is : " + res + "<br>");
//   console.log("No of times: " + freq);
// }

// given set of keys
let arr = [
  "geeks",
  "for",
  "geeks",
  "a",
  "portal",
  "to",
  "learn",
  "can",
  "be",
  "computer",
  "science",
  "zoom",
  "yup",
  "fire",
  "in",
  "be",
  "data",
  "geeks",
];
// let n = arr.length;

// mostFrequentWord(arr, n);
const location = [];
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const state = {
  mapRegion: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};
const HeadmapMarker = () => (
  <LinearGradient
    colors={["#4c669f", "#3b5998", "#192f6a"]}
    style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
  />
);
const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};
const Test = () => {
  const [acta, setActa] = useState([]);
  const [repeat, setRepeat] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, "actas");
    const q = query(collectionRef, orderBy("colony", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");

      setActa(
        //location.push( {colony: doc.data().colony.location}),
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          colony: doc.data().colony,
          typeVehicle: doc.data().typeVehicle,
          plaque: doc.data().plaque,
          color: doc.data().color,
          description: doc.data().description,
          createdDoc: doc.data().createdDoc,
        }))
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const collectionRef = collection(database, "actas");
    const q = query(collectionRef, orderBy("colony", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
      querySnapshot.docs.map((doc) => {
        const { colony } = doc.data();
        location.push({
          colony: doc.data().colony.location,
        });
      });
      setRepeat(location);
      console.log(location);
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <MyLineChart />
          </View>
          {/* {console.log(location.colony)} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Test;

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
});
