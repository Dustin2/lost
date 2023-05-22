import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { mapsConfig } from "../maps/mapsConfig";
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
    console.log(acta);
    return unsubscribe;
  }, []);
  function ordenarObjetosPorRepeticiones(matriz) {
    // Crear un objeto vacío para almacenar la cuenta de cada objeto
    let objetoRecuento = {};

    // Recorrer la matriz y agregar 1 al valor de cada objeto en el objeto de recuento
    matriz.forEach((objeto) => {
      objetoRecuento[objeto] = (objetoRecuento[objeto] || 0) + 1;
    });

    // Convertir el objeto de recuento en una matriz de tuplas [clave, valor] para poder ordenarla por el valor
    let tuplas = Object.entries(objetoRecuento);

    // Ordenar la matriz de tuplas en orden descendente por el valor
    tuplas.sort((a, b) => b[1] - a[1]);

    // Crear una nueva matriz para almacenar los objetos ordenados por repeticiones
    let objetosOrdenados = [];

    // Recorrer la matriz de tuplas ordenadas y agregar los objetos al resultado
    tuplas.forEach((tupla) => {
      let objeto = tupla[0];
      let repeticiones = tupla[1];

      // Agregar el objeto repeticiones veces a la matriz de objetos ordenados
      for (let i = 0; i < repeticiones; i++) {
        objetosOrdenados.push(objeto);
      }
    });

    return objetosOrdenados;
  }

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
        customMapStyle={mapsConfig}
      >
        {acta.map((markers) => {
          return (
            <Marker
              key={markers.colony.NameOfLocation}
              coordinate={markers.colony.place}
              pinColor="#0066CC"
            >
              <Callout>
                <Text>{markers.NameOfLocation}</Text>
                <Text> {markers.colony.NameOfLocation}</Text>
                {/* <Text>robos totales: {markers.population}</Text> */}
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
