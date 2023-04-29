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

//components
import Charts from "../components/charts/Charts";
import MyPicker from "../components/picker/Picker";
const Test = () => {
  // const [acta, setActa] = useState([]);
  // const [repeat, setRepeat] = useState([]);

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
            <Charts />
          </View>
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
