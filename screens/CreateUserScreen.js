import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  ToastAndroid,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

//externals dependencies
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";
import { places } from "../Places/Places";

///Firebase end
import { Colors } from "../assets/colors"; //colors change color button
import { database } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

//state initial
const initialState = {
  name: "",
  colony: "",
  place: "",
  date: "",
  typeVehicle: "",
  plaque: "",
  model: "",
  color: "",
  description: "",
  selectedDate: "",
  colorAvatar: "",
};
import { generateColor } from "../functions/generateColors";

export function CreateUserScreen(props) {
  const [user, setUsers] = useState(initialState);

  ///Modal TimePickerModal
  const [selectedDate, setSelectedDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setSelectedDate(date);
    handleChangeText("date", date);
    hideDatePicker();
  };

  ///Update Colony
  const [selectedColony, setSelectedColony] = useState("no seleccionado");
  const updatePickerColony = (colonySel, indexColony, name, value) => {
    handleChangeText("colony", colonySel);
    setSelectedColony(colonySel);
  };
  ///Update Colony
  const [selectedColony1, setSelectedColony1] = useState("no seleccionado");
  const updatePickerColony1 = (vehicleSel, indexVehicle, name, value) => {
    handleChangeText("typeVehicle", vehicleSel);
    setSelectedColony1(vehicleSel);
  };
  /// update color
  const [selectedColor, setSelectedColor] = useState();
  const updateColorPicker = (color, index, name, value) => {
    handleChangeText("color", color);
    setSelectedColor(color);
  };
  ///change value
  const handleChangeText = (name, value) => {
    setUsers({ ...user, [name]: value });
    //recibira un nombre y un valor estableciendo el nombre y valor recibido y actualizando
  };
  ///sendData to firebase
  const sendData = async () => {
    await addDoc(collection(database, "actas"), {
      name: user.name,
      colony: user.colony,
      date: user.date,
      typeVehicle: user.typeVehicle,
      plaque: user.plaque,
      // color: user.color,
      colorAvatar: generateColor(),
      description: user.description,
      createdDoc: new Date(),
    });
    setUsers(initialState);
    setSelectedDate("");
    props.navigation.navigate("Reportes recientes");
  };

  //saveNewUser
  const saveNewUser = () => {
    if (
      user.name === "" ||
      user.colony === "" ||
      user.date === "" ||
      user.typeVehicle === "" ||
      user.plaque === "" ||
      // user.color === "" ||
      user.description === ""
    ) {
      Alert.alert(
        "Error Campos invalidos",
        "Porfavor completa todos los campos"
      );
    } else {
      Alert.alert("Confirmar", "Desea guardar los cambios actuales?", [
        {
          text: "Cancelar",
          onPress: () => ToastAndroid.show("cancelado!", ToastAndroid.SHORT),
          style: "cancel",
        },
        {
          text: "Guardar",
          onPress: () => (
            sendData(),
            ToastAndroid.show("Acta registrada con exito!", ToastAndroid.SHORT)
          ),
          style: "success",
        },
      ]);
    }
  };
  return (
    <KeyboardAvoidingView enabled={true}>
      <ScrollView style={styles.container}>
        {/* name Input */}
        <View>
          <TextInput
            value={user.name}
            mode="outlined"
            label="Nombre de la persona que levanta el acta "
            left={<TextInput.Icon icon="account" />}
            activeOutlineColor={Colors.info}
            onChangeText={(value) => {
              handleChangeText("name", value);
              {
              }
            }}
          />
        </View>
        {/* date Picker */}
        <View>
          <TextInput
            editable={false}
            mode="outlined"
            style={{ marginBottom: 10 }}
            left={<TextInput.Icon icon="clock-time-eight" />}
          >
            {selectedDate
              ? moment(selectedDate).format("DD/MM/YYYY, h:mm a", "es-MX")
              : "Fecha no seleccionada"}
          </TextInput>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            value={user.date}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            onPress={(value) => {
              handleChangeText("date", value);
            }}
          />
          <Button
            // title=""
            onPress={showDatePicker}
            // color={Colors.secondary}
            buttonColor={Colors.secondary}
            // icon="camera"
            mode="contained"
          >
            Selecciona la fecha y hora del suceso
          </Button>
        </View>
        {/* colony Input */}
        <View>
          <Text style={styles.header}>Selecciona la colonia donde ocurrio</Text>
          <Picker
            selectedValue={selectedColony}
            onValueChange={(colonySel, indexColony, name, value) =>
              updatePickerColony(colonySel, indexColony, name, value)
            }
            prompt="Selecciona la colonia"
          >
            {places.map((place, i) => {
              return (
                <Picker.Item
                  key={place.place}
                  label={place.NameOfLocation}
                  value={place}
                />
              );
            })}
          </Picker>
        </View>
        {/* typeVehicle Input */}
        <View>
          <Text style={styles.header}>Selecciona el vehiculo robado</Text>
          <Picker
            value={user.typeVehicle}
            selectedValue={selectedColony1}
            onValueChange={(vehicleSel, indexVehicle, name, value) =>
              updatePickerColony1(vehicleSel, indexVehicle, name, value)
            }
            prompt="Selecciona el tipo de vehiculo"
          >
            <Picker.Item label="Automovil" value="Automovil" />
            <Picker.Item label="camioneta" value="camioneta" />
            <Picker.Item label="motocicleta" value="motocicleta" />
          </Picker>
        </View>
        {/* car model Input */}
        <View>
          <TextInput
            mode="outlined"
            left={<TextInput.Icon icon="car" />}
            label={"Modelo del vehiculo"}
            activeOutlineColor={Colors.info}
            onChangeText={(value) => {
              handleChangeText("model", value);
            }}
            value={user.model}
          />
        </View>
        {/* plaque Input */}
        <View>
          <TextInput
            label="Placas"
            mode="outlined"
            left={<TextInput.Icon icon="credit-card-edit" />}
            activeOutlineColor={Colors.info}
            onChangeText={(value) => {
              handleChangeText("plaque", value);
            }}
            value={user.plaque}
          />
        </View>
        {/* descripcion Input */}
        <View>
          <TextInput
            // style={{ marginBottom: 10 }}
            value={user.description}
            left={<TextInput.Icon icon="note-text" />}
            label="descripcion de lo sucedido"
            mode="outlined"
            multiline={true}
            numberOfLines={2}
            activeOutlineColor={Colors.info}
            onChangeText={(value) => {
              handleChangeText("description", value);
            }}
          />
        </View>
        {/* submit button */}
        <View style={styles.inputGroup}>
          <Button
            buttonColor={Colors.success}
            icon="content-save-check"
            mode="contained"
            onPress={() => {
              saveNewUser();
              console.log(user);
            }}
            style={{ marginTop: 25, marginBottom: 25 }}
          >
            Guardar
          </Button>
          <Button
             style={{ marginTop: 25, marginBottom: 25 }}
             mode="contained"
             onPress={() => props.navigation.openDrawer()}
          >
            open modal
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 14,
  },
  inputGroup: {
    flex: 1,
    padding: 1,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    fontSize: 17,
    marginBottom: 5,
    marginEnd: 5,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
