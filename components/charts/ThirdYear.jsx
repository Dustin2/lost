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
import { monthPeryear } from "../../data/monthPeryear";
import { annualWeek } from "../../data/annualWeek";
import { coordinates2021 } from "../../data/coordinatesPerYear";

//functions

const ThirdYear = () => {
  return (
    <View>
      <View style={styles.container}>
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
          {coordinates2021.map((marker, key) => {
            return (
              <Marker
                key={marker.NameOfLocation}
                coordinate={marker.place}
                pinColor="#0066CC"
              >
                <Callout>
                  <Text>{marker.NameOfLocation}</Text>
                  <Text>robos totales: {marker.population}</Text>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}> DIAS POR SEMANA 2021</Text>
        <BarChart
          data={{
            labels: daysPerWeek,
            datasets: [
              {
                data: [49, 59, 42, 59, 42, 48, 49],
              },
            ],
          }}
          width={Dimensions.get("window").width - 10}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          paddingRight={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            barPercentage: 0.9,
            propsForLabels: {
              fontSize: 10,
              lineSpacing: 0.1,
            },
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chartWeek}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>MES POR AÑO</Text>
        <BarChart
          data={{
            labels: monthPeryear,
            datasets: [
              {
                data: [12, 14, 13, 18, 10, 14, 6, 13, 48, 103, 52, 45],
              },
            ],
          }}
          width={Dimensions.get("window").width - 10}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          paddingRight={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            barPercentage: 0.5,
            propsForLabels: {
              fontSize: 6.5,
              lineSpacing: 0.1,
            },
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chartWeek}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>HORARIO</Text>
        <BarChart
          data={{
            labels: schedule,
            datasets: [
              {
                data: [50, 111, 90, 97],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            // barPercentage: 0.5,
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            borderRadius: 16,
            paddingRight: 3,
            alignContent: "center",
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>SEMANA ANUAL</Text>
        <BarChart
          data={{
            labels: [
              "2",

              "3",

              "4",

              "5",

              "6",

              "7",

              "8",

              "9",

              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "30",
              "31",
              "32",
              "33",
              "34",
              "35",
              "36",
              "37",

              "38",
              "39",

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

              "53",
            ],
            datasets: [
              {
                data: [
                  1, 2, 4, 5, 2, 5, 2, 5, 3, 2, 2, 3, 5, 6, 3, 6, 1, 2, 3, 1, 4,
                  4, 2, 3, 4, 1, 1, 3, 2, 3, 4, 2, 3, 7, 10, 7, 17, 8, 26, 22,
                  20, 31, 12, 13, 11, 12, 14, 13, 7, 11, 8,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 10}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          paddingRight={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            barPercentage: 0.2,
            propsForLabels: {
              fontSize: 6,
              lineSpacing: 0,
              horizontalLabelRotation: -60,
            },
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                data: [
                  13, 11, 5, 6, 12, 3, 12, 34, 27, 20, 10, 8, 13, 20, 15, 16,
                  14, 12, 7, 23, 16, 25, 14, 12,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 10}
          height={300}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            barPercentage: 0.4,
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForLabels: {
              fontSize: 6.8,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>SECTOR</Text>
        <BarChart
          data={{
            labels: sector,
            datasets: [
              {
                data: [99, 83, 62, 55, 47, 2],
              },
            ],
          }}
          width={Dimensions.get("window").width - 17}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                data: [99, 145, 2, 102],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{
            borderRadius: 16,
            paddingRight: 3,
            alignContent: "center",
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>DELITO</Text>
        <Text style={styles.header}>ROBO DE:</Text>
        <BarChart
          data={{
            labels: [" AUTOMOVIL", "CAMIONETA", " MOTOCICLETA", "VEHICULO"],
            datasets: [
              {
                data: [187, 64, 97, 0],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              // paddingRight: 2,
            },
          }}
          style={{
            borderRadius: 16,
            paddingRight: 12,
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>DENUNCIA</Text>

        <BarChart
          data={{
            labels: complaints,
            datasets: [
              {
                data: [339, 9],
              },
            ],
          }}
          width={Dimensions.get("window").width - 14}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                data: [0, 348],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
              "GMC",
              "SATURN",
              "CARABELA",
              "SUZUKI",
              "MERCURY",
              "ISLO",
              "CAMIONETA",
              "TSURU",
              "VOYAGER",
              "GUAYIN",
              "POLUX",
              "ALESSIA",
              "BUICK",
              "MOTOCICLETA",
              "INTERNATIONAL",
              "TANK",
              "PULSAR",
              "MB",
              "CHRYSLER",
              "N/A",
            ],
            datasets: [
              {
                data: [
                  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 10}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          paddingRight={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            barPercentage: 0.2,
            propsForLabels: {
              fontSize: 4,
              lineSpacing: 0,
              horizontalLabelRotation: -60,
            },
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
              "KEEWAY",
              "MAZDA",
              "VENTO",
              "YAMAHA",
              "VELOCI",
              "BDS",
              "FORD",
              "BAJAJ",
              "SIN INFORMACION",
              "JEEP",
              "DODGE",
              "TAXI",
              "DATSUN",
              "TOYOTA",
              "VW",
              "CHEVROLET",
              "HONDA",
              "ITALIKA",
              "NISSAN",
            ],
            datasets: [
              {
                data: [
                  2, 3, 3, 4, 4, 5, 7, 7, 7, 8, 8, 10, 13, 16, 21, 29, 33, 36,
                  108,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 10}
          height={220}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withHorizontalLabels={false}
          showBarTops={false}
          paddingRight={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            barPercentage: 0.2,
            propsForLabels: {
              fontSize: 4,
              lineSpacing: 0,
              horizontalLabelRotation: -60,
            },
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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

export default ThirdYear;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
    borderRadius: 12,
  },
  chart: {
    borderRadius: 16,
    paddingRight: -3,
    alignContent: "center",
    alignItems: "center",
  },
  chartWeek: {
    borderRadius: 16,
    paddingRight: -3,
    alignContent: "center",
    alignItems: "center",
  },
});
