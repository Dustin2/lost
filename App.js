//Dependeces//
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";

//navigation//
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import { Colors } from "./assets/colors";

///screens//
import { Inicio } from "./screens/Inicio";
import { CreateUserScreen } from "./screens/CreateUserScreen";
import { Map } from "./screens/Map";
import ShowCharts from "./screens/ShowCharts";
import ShowChartsRecu from "./screens/ShowChartsRecu";
import CustomMenu from "./components/CustomMenu";
//icons//
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Menu = createDrawerNavigator();

const goToScreen = () => {
  navigation.navigate("Crear reporte");
};
export default function App(props) {
  return (
    <NavigationContainer>
      <Menu.Navigator
        drawerContent={(props) => <CustomMenu {...props} />}
        ///that use for change aparence to all screens
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.info,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          //change color to active and inactive
          drawerActiveBackgroundColor: "#6685A4",
          drawerActiveTintColor: "#333",
          drawerInactiveTintColor: "#fff",
        }}
      >
        <Menu.Screen
          name="Reportes recientes"
          component={Inicio}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />

        <Menu.Screen
          name="Crear reporte"
          component={CreateUserScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="add" size={22} color={color} />
            ),

            //the  above lines make it work the icons in the drawer
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: "Crear Actas",
          }}
        />

        <Menu.Screen
          name="Mapa"
          component={Map}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="map-outline" size={22} color={color} />
            ),
            headerTitle: "Mapa",
          }}
        />
        <Menu.Screen
          name="Autos robados"
          component={ShowCharts}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="car-emergency"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Menu.Screen
          name="autos recuperados"
          component={ShowChartsRecu}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="car-repair" size={22} color={color} />
            ),
          }}
        />
      </Menu.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
registerRootComponent(App);
const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: "#6aa3b4",
  },
  headerText: {
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: 1,
  },
});
