//Dependencies
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  ListItem,
  Avatar,
  FAB,
  Portal,
  PaperProvider,
} from "react-native-elements";

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
import { Colors } from "../assets/colors";

export function Inicio(props) {
  useEffect(() => {
    const collectionRef = collection(database, "actas");
    const q = query(collectionRef, orderBy("colony", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const datos = [];
      setActa(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          colony: doc.data().colony,
          date: doc.data().date,
          typeVehicle: doc.data().typeVehicle,
          plaque: doc.data().plaque,
          color: doc.data().color,
          colorAvatar: doc.data().colorAvatar,
          description: doc.data().description,
          createdDoc: doc.data().createdDoc,
        }))
      );
    });
    return unsubscribe;
  }, []);
  const [acta, setActa] = useState([]);

  // const goToScreen = () => {
  //   props.navigation.navigate("Crear reporte");
  // };
  return (
    <View styles={styles.container}>
      <ScrollView>
        {acta.map((actas) => {
          return (
            <ListItem bottomDivider key={actas.id}>
              <ListItem.Chevron />
              <Avatar
                size={32}
                rounded
                title={actas.name[0] + actas.name[1]}
                containerStyle={{ backgroundColor: actas.colorAvatar }}
              />
              <ListItem.Content>
                <ListItem.Title>Folio:{actas.id}123abc</ListItem.Title>
                <ListItem.Subtitle>
                  Lugar: {actas.colony.location}
                </ListItem.Subtitle>
                {/* <ListItem.Subtitle>Nombre:{actas.name}</ListItem.Subtitle> */}
                <ListItem.Subtitle>
                  Tipo de vehiculo: {actas.typeVehicle}
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                  Color del vehiculo: {actas.color}
                </ListItem.Subtitle>
                <ListItem.Subtitle>placa: {actas.plaque}</ListItem.Subtitle>
                {/* <ListItem.Subtitle>{actas.description}</ListItem.Subtitle> */}
              </ListItem.Content>
            </ListItem>
          );
        })}
        {/* <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: 16,
          }}
        >
          <FAB
            style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
            icon="plus"
            onPress={() => goToScreen()}
          />
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
