import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text } from "react-native";
// import { mapsConfig } from "../Maps/mapsConfigs";

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



export function Map() {
  const [acta, setActa] = useState([]);
  useEffect(() => {
    const collectionRef = collection(database, "actas");
    const q = query(collectionRef, orderBy("colony", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
      setRepeat(
        querySnapshot.docs.map((doc) => ({
          colony: doc.data().colony.location,
        }))
      );
      setActa(
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

  const [repeat, setRepeat] = useState([]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.24997,
          longitude: -103.72714,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // customMapStyle={mapsConfig}
      >
        {acta.map((actas) => {
          return (
            <Marker
              key={actas.id}
              coordinate={actas.colony.place}
              pinColor="red"
            >
              <Callout>
                {/* <Text> Ultimo reporte {actas.name}</Text> */}
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
