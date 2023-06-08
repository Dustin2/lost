//dependecies
import React, { useState, useEffect } from "react";
//maps
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
//data
import { places } from "../Places/Places";
export function Map() {
  const [acta, setActa] = useState([]);
  const newArray = [];
  useEffect(() => {
    const collectionRef = collection(database, "actas");
    const q = query(collectionRef, orderBy("colony", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
  // Utilizar filter() y typeof para extraer los strings
  const arrayDeStrings = acta.filter(
    (objeto) => typeof objeto.colony.NameOfLocation === "string"
  );
  // Imprimir el resultado
  // console.log(arrayDeStrings);

  {
    arrayDeStrings.map((obj, index) => {
      newArray.push(obj.colony.NameOfLocation);
      // return <Text key={index}>{obj.colony.NameOfLocation}</Text>;
    });
  }
  function contarPalabrasRepetidas(arr) {
    let contador = {};

    arr.forEach((palabra) => {
      if (contador[palabra]) {
        contador[palabra]++;
      } else {
        contador[palabra] = 1;
      }
    });

    return contador;
  }

  const resultado = contarPalabrasRepetidas(newArray);
  // console.log(resultado);

  const [markers, setMarkers] = useState([]);
  const data = [
    "manzana",
    "pera",
    "manzana",
    "uva",
    "pera",
    "manzana",
    "naranja",
  ];
  useEffect(() => {
    // Contar las ocurrencias de cada palabra
    const wordCount = {};
    newArray.forEach((word) => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // Determinar las palabras que se repiten más y menos veces
    const maxCount = Math.max(...Object.values(wordCount));
    const minCount = Math.min(...Object.values(wordCount));

    // Crear los marcadores con los colores y coordenadas correspondientes
    const markers = data.map((word, index) => {
      let markerColor = "yellow";
      if (wordCount[word] === maxCount) {
        markerColor = "red";
      } else if (wordCount[word] === minCount) {
        markerColor = "green";
      }

      let coordinates = { latitude: 0, longitude: 0 }; // Agrega las coordenadas correctas
      // Puedes obtener las coordenadas según la palabra o utilizando algún método adicional

      return (
        <Marker key={index} coordinate={coordinates} pinColor={markerColor} />
      );
    });

    setMarkers(markers);
  }, []);

  // Array de objetos
  const objetos = [
    { id: 1, nombre: "Objeto 1" },
    { id: 2, nombre: "Objeto 2" },
    { id: 3, nombre: "Objeto 3" },
  ];

  // Palabras a buscar
  const palabras = ["Objeto 1", "Objeto 3"];

  // Función de búsqueda
  function buscarObjeto(newArray) {
    return places.find((objeto) => objeto  === newArray);
  }

  // Buscar las palabras en el array de objetos
  const objetosEncontrados = palabras.map(buscarObjeto);

  console.log(objetosEncontrados);

  return (
    <View style={styles.container}>
      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.24997,
          longitude: -103.72714,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapsConfig}
      >
        {acta.map((markers, index) => {
          return (
            <Marker
              key={index}
              coordinate={markers.colony.place}
              pinColor="#0066CC"
            >
              <Callout>
                <Text>{markers.NameOfLocation}</Text>
                <Text> {markers.colony.NameOfLocation}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView> */}

      {newArray.map((obj, index) => {
        return <Text key={index}>{obj}</Text>;
      })}
      <MapView style={{ flex: 1 }}>{markers}</MapView>
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
