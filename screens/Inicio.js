//Dependencies
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  ListItem,
  Avatar,
  FAB,
  Portal,
  PaperProvider,
  Button,
} from "react-native-elements";

//firebase
import { database } from "../firebase/firebase";
// import database from "../database/database";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
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

  return (
    <View styles={styles.container}>
      <ScrollView>
        <Button
          style={{ marginTop: 25, marginBottom: 25 }}
          mode="contained"
          onPress={() => props.navigation.openDrawer()}
        >
          open modal
        </Button>
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
