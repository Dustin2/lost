//dependecies
import React, { useState, useContext } from "react";
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
import { coordinatesRecu2020 } from "../../data/coordinatesPerYear";
const FirstYearRecu = () => {
  return (
    <View>
      <View style={{ borderRadius: 19 }}>
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
        {coordinatesRecu2020.map((marker, key) => {
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
      {/*days per week */}
      <View style={styles.container}>
        <Text style={styles.header}> DIA DE LA SEMANA 2019</Text>
        <BarChart
          data={{
            labels: daysPerWeek,
            datasets: [
              {
                data: [15, 14, 20, 12, 19, 16, 20],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
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
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      {/* month per year */}
      <View style={styles.container}>
        <Text style={styles.header}>MES POR AÑO</Text>
        <BarChart
          data={{
            labels: monthPeryear,
            datasets: [
              {
                data: [6, 7, 5, 11, 6, 5, 9, 10, 16, 13, 14, 14],
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
      {/* schedule */}
      <View style={styles.container}>
        <Text style={styles.header}>HORARIO</Text>
        <BarChart
          data={{
            labels: schedule,
            datasets: [
              {
                data: [18, 33, 35, 30],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
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
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      {/* annualWeek */}
      <View style={styles.container}>
        <Text style={styles.header}>SEMANA ANUAL</Text>
        <BarChart
          data={{
            labels: [
              "1",
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
            ],
            datasets: [
              {
                data: [
                  1, 2, 2, 1, 1, 3, 3, 2, 3, 1, 2, 1, 4, 4, 2, 2, 1, 3, 1, 1, 5,
                  2, 2, 3, 2, 2, 3,
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
            strokeWidth: 14,
            barPercentage: 0.2,
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
      {/* annualWeek */}
      <View style={styles.container}>
        <Text style={styles.header}>SEMANA ANUAL</Text>
        <BarChart
          data={{
            labels: [
              "28",
              "29",
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
                data: [6, 3, 2, 3, 5, 5, 3, 2, 4, 3, 5, 2, 2, 7, 3, 1, 1, 1],
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
            strokeWidth: 14,
            barPercentage: 0.2,
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
      {/* hoursPerDay */}
      <View style={styles.container}>
        <Text style={styles.header}>HORA DEL DIA</Text>
        <BarChart
          data={{
            labels: hoursPerDay,
            datasets: [
              {
                data: [
                  6, 2, 3, 2, 5, 2, 7, 6, 7, 6, 5, 2, 9, 3, 8, 5, 3, 6, 10, 6,
                  6, 4,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 6}
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
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForLabels: {
              fontSize: 6.5,
              lineSpacing: 0.1,
            },
            strokeWidth: 8,
            barPercentage: 0.3,
            decimalPlaces: 0,
          }}
          style={styles.chart}
        />
      </View>
      {/* sector */}
      <View style={styles.container}>
        <Text style={styles.header}>SECTOR</Text>
        <BarChart
          data={{
            labels: sector,
            datasets: [
              {
                data: [16, 23, 38, 1, 1, 6],
              },
            ],
          }}
          width={Dimensions.get("window").width - 17}
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
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      {/* zone */}
      <View style={styles.container}>
        <Text style={styles.header}>ZONA</Text>
        <BarChart
          data={{
            labels: zone,
            datasets: [
              {
                data: [16, 61, 6, 33],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
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
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>
      {/* crime */}
      <View style={styles.container}>
        <Text style={styles.header}>DELITO</Text>
        <Text style={styles.header}>RECUPERACION DE:</Text>
        <BarChart
          data={{
            labels: [
              "MOTOCICLETA ROBADA",
              "VEHICULO ROBADO",
              "ROBO EQUIPARADO ",
            ],
            datasets: [
              {
                data: [1, 97, 18],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
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
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chartsCenter}
        />
      </View>
      {/* complaints */}
      <View style={styles.container}>
        <Text style={styles.header}>DENUNCIA</Text>
        <BarChart
          data={{
            labels: complaints,
            datasets: [
              {
                data: [110, 6],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
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
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      {/* arrest */}
      <View style={styles.container}>
        <Text style={styles.header}>DETENCIONES</Text>
        <BarChart
          data={{
            labels: arrest,
            datasets: [
              {
                data: [18, 98],
              },
            ],
          }}
          width={Dimensions.get("window").width - 16}
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
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      {/* branCars */}
      <View style={styles.container}>
        <Text style={styles.header}>MARCA DE AUTO</Text>
        <BarChart
          data={{
            labels: ["TOYOYA", "NA"],
            datasets: [
              {
                data: [1, 1],
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
            barPercentage: 0.8,
            propsForLabels: {
              fontSize: 16,
              lineSpacing: 0,
              // horizontalLabelRotation: -60,
            },
            color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            borderRadius: 16,
            // paddingRight: ,
            alignContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
};

export default FirstYearRecu;
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
  chartsCenter: {
    borderRadius: 16,
    paddingRight: 0,
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
