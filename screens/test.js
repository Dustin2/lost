import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const location = [];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const data1 = {
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

const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>ACUMULADO GENERAL</Text>
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

const MyBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Bar Chart</Text>
      <BarChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        yAxisLabel={"Rs"}
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

  // useEffect(() => {
  //   const collectionRef = collection(database, "actas");
  //   const q = query(collectionRef, orderBy("colony", "desc"));

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     console.log("querySnapshot unsusbscribe");

  //     setActa(
  //       //location.push( {colony: doc.data().colony.location}),
  //       querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         name: doc.data().name,
  //         colony: doc.data().colony,
  //         typeVehicle: doc.data().typeVehicle,
  //         plaque: doc.data().plaque,
  //         color: doc.data().color,
  //         description: doc.data().description,
  //         createdDoc: doc.data().createdDoc,
  //       }))
  //     );
  //   });
  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   const collectionRef = collection(database, "actas");
  //   const q = query(collectionRef, orderBy("colony", "desc"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     console.log("querySnapshot unsusbscribe");
  //     querySnapshot.docs.map((doc) => {
  //       const { colony } = doc.data();
  //       location.push({
  //         colony: doc.data().colony.location,
  //       });
  //     });
  //     setRepeat(location);
  //     // console.log(location);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <MyLineChart />
          </View>
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
          <MyBarChart />
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
  graphStyle: {
    flex: 1,
    paddingRight: 25,
  },
});
