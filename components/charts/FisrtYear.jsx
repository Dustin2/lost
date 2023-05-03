//dependecies
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
//maps
import MapView, { Marker, Callout } from "react-native-maps";
import { mapsConfig } from "../../maps/mapsConfig";

//data
import { daysPerWeek } from "../../data/data";
import { schedule } from "../../data/schedule";
import { hoursPerDay } from "../../data/hoursPerDay";
import { sector } from "../../data/sector";
import { zone } from "../../data/zone";
import { complaints } from "../../data/complaints";
import { arrest } from "../../data/arrest";

const FisrtYear = () => {
  return (
    <View >
      <View >
        <Text style={styles.header}>ACUMULADO GENERAL</Text>
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
          <Marker
            coordinate={{ latitude: 19.240884, longitude: -103.728327 }}
            pinColor="red"
          >
            <Callout>
              <Text>Centro</Text>
              <Text>robos totales : 18</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}> DIAS POR SEMANA 2019</Text>
        <BarChart
          data={{
            labels: daysPerWeek,
            datasets: [
              {
                data: [6, 6, 14, 7, 13, 5, 7],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>MES POR AÑO</Text>
        <BarChart
          data={{
            labels: ["Octubre", "Noviembre", "Diciembre"],
            datasets: [
              {
                data: [22, 18, 18],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          // yAxisLabel={"Rs"}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",

            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>HORARIO</Text>
        <BarChart
          data={{
            labels: schedule,
            datasets: [
              {
                data: [5, 31, 9, 13],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>SEMANA ANUAL</Text>
        <BarChart
          data={{
            labels: [
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
              "47",
              "48",
              "49",
              "50",
              "51",
              "52",
            ],
            datasets: [
              {
                data: [1, 7, 3, 5, 6, 3, 7, 7, 1, 3, 7, 4, 4],
              },
            ],
          }}
          width={Dimensions.get("window").width - 10}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            strokeWidth: 14,
            barPercentage: 0.4,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>HORA DEL DIA</Text>
        <BarChart
          data={{
            labels: hoursPerDay,
            datasets: [
              {
                data: [4, 1, 2, 7, 7, 6, 4, 5, 4, 1, 3, 2, 2, 1, 2, 3, 4, 2, 2],
              },
            ],
          }}
          width={Dimensions.get("window").width - 6}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            strokeWidth: 8,
            barPercentage: 0.4,
            decimalPlaces: 0,
          }}
          style={styles.chart}
        />
      </View>
      {/* <View>

        <Text style={styles.header}>2019</Text>
        <BarChart
          data={{
            labels: [
              "CENTRO",
              "INFONAVIT LA ESTANCIA",
              "LA ESTANCIA",
              "FATIMA",
              "POPULAR",
              "BUROCRATAS",
              "NUEVO MILENIO",
              "EL PORVENIR",
              "RESIDENCIAL ESMERALDA",
              "MORALETE",
              "LOMAS VISTA HERMOSA",
              "LAZARO CARDENAS",
              "LAZARO CARDENAS",
              "FOVISSTE",
              "ORIENTAL",
              "FRANCISCO I MADERO",
              " LA GUADALUPE",
              " EL DIEZMO",
              " LOMAS DE CIRCUNVALACION",
              "REVOLUCION ",
              "COLINAS DE SANTA BARBARA ",
              "VILLAS DEL BOSQUE ",
              "CUAHUTEMOC ",
              " JOSEFA ORTIZ DE DOMINGUEZ",
              " SANTA AMALIA",
              " CAMINO REAL",
              "VILLAS SAN JOSE ",
              " INSURGENTES",
              " BOSQUES DEL SUR",
              " JARDINES DE LA CORREGIDORA",
            ],
            datasets: [
              {
                data: [
                  8, 4, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          // yAxisLabel={"Rs"}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",

            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Text style={styles.header}>Pie Chart</Text>
        <PieChart
          data={[
            {
              name: "Seoul",
              population: 21500000,
              color: "rgba(131, 167, 234, 1)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "Toronto",
              population: 2800000,
              color: "#F00",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "New York",
              population: 8538000,
              color: "#ffffff",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "Moscow",
              population: 11920000,
              color: "rgb(0, 0, 255)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
          ]}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",

            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute //for the absolute number remove if you want percentage
        />
      </View> */}
      <View style={styles.container}>
        <Text style={styles.header}>SECTOR</Text>
        <BarChart
          data={{
            labels: sector,
            datasets: [
              {
                data: [19, 6, 14, 11, 6, 2],
              },
            ],
          }}
          width={Dimensions.get("window").width - 17}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>ZONA</Text>
        <BarChart
          data={{
            labels: zone,
            datasets: [
              {
                data: [19, 20, 2, 17],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>DELITO</Text>
        <BarChart
          data={{
            labels:["ROBO DE VEHICULO"] ,
            datasets: [
              {
                data: [58],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>DENUNCIA</Text>
        <BarChart
          data={{
            labels: complaints,
            datasets: [
              {
                data: [43,15],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>DETENCIONES</Text>
        <BarChart
          data={{
            labels: arrest,
            datasets: [
              {
                data: [2, 56],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
    </View>
  );
};

export default FisrtYear;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "white",
    // justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
    // padding: 2,
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
  map: {
    width: 400,
    height: 350,
  },
  chart: {
    borderRadius: 16,
  },
});
