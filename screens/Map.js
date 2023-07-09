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
  let contador = {};
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
  //  console.log(arrayDeStrings);

  {
    arrayDeStrings.map((obj, index) => {
      newArray.push(obj.colony.NameOfLocation);
      // return <Text key={index}>{obj.colony.NameOfLocation}</Text>;
    });

    newArray.forEach((palabra) => {
      if (contador[palabra]) {
        contador[palabra]++;
      } else {
        contador[palabra] = 1;
      }
      console.log(contador);
    });
  }

  // const resultado = contarPalabrasRepetidas(newArray);
  // console.log(resultado);
  const newArray2 = [];
 
  colony.map((place) => {
    newArray2.push(place.colonyName.toLocaleUpperCase());
    // console.log(newArray2);
  });

  let results = places.filter((obj) =>
    newArray.includes(
      obj.NameOfLocation.toLocaleUpperCase()
      // newArray.includes(obj.NameOfLocation.toLocaleUpperCase())
    )
  );
  // if (results.length > 0) {
  //   console.log(results); // this will not be executed because results is an empty array
  // } else {
  //   console.log("No matches found.");
  // }
  const finalColony = [];
  finalColony.push(results);
  console.log(results);


  function encontrarValorMasRepetido(array) {
 
  
    // Recorrer el array y contar las frecuencias de cada elemento
    for (var i = 0; i < array.length; i++) {
      var elemento = array[i];
      if (frecuencias[elemento]) {
        // Si el elemento ya está en el objeto de frecuencias, incrementar su contador
        frecuencias[elemento]++;
      } else {
        // Si el elemento no está en el objeto de frecuencias, inicializar su contador en 1
        frecuencias[elemento] = 1;
      }
    }
  
    // Encontrar el valor que más se repite
    var valorMasRepetido;
    var contadorMaximo = 0;
  
    for (var elemento in frecuencias) {
      if (frecuencias[elemento] > contadorMaximo) {
        contadorMaximo = frecuencias[elemento];
        valorMasRepetido = elemento;
      }
    }
  
    return valorMasRepetido;
  }
  
  // Ejemplo de uso
  var array = [1, 2, 3, 2, 2, 4, 5, 4, 2];
  var valorMasRepetido = encontrarValorMasRepetido(array);
  console.log("El valor que más se repite es: " + valorMasRepetido);
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
      </MapView>
{/* 
      {newArray.map((obj, index) => {
        return <Text key={index}>{obj}</Text>;
      })} */}
     {/* {newArray.map((obj, index,contador) =>{
      return <Text key={index}>{contador}</Text>;
     })} */}
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
