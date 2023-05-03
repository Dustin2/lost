//Dependeces//
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from 'expo';


//navigation//
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import { Colors } from "./assets/colors";

///screens//
import { Inicio } from "./screens/Inicio";
import { CreateUserScreen } from "./screens/CreateUserScreen";
import { Map } from "./screens/Map";

import Test from "./screens/test.js";
import CustomMenu from "./components/CustomMenu";
//icons//
import Ionicons from "@expo/vector-icons/Ionicons";

const Menu = createDrawerNavigator();

export default function App() {
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
          name="Robos por año"
          component={Test}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
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
        {/* <Menu.Screen
          name="Grafica"
          component={Charts}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="map-outline" size={22} color={color} />
            ),
            headerTitle: "Mapa",
          }}
        />  */}
      </Menu.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
registerRootComponent(App)
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
