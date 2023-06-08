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
import { coordinatesRecu2021 } from "../../data/coordinatesPerYear";
const SecondYearRecu = () => {
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
        {coordinatesRecu2021.map((marker, key) => {
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
                data: [27, 31, 40, 36, 38, 28, 38],
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
                data: [7, 7, 7, 18, 7, 13, 5, 8, 30, 82, 30, 24],
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
                data: [14, 31, 18, 16],
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
            ],
            datasets: [
              {
                data: [
                  3, 1, 1, 1, 1, 3, 4, 2, 4, 1, 3, 4, 4, 5, 2, 1, 4, 2, 2, 4, 3,
                  1, 4, 1, 3, 1, 1, 1, 4, 2, 7, 3, 10, 10, 16, 30, 10, 23, 11,
                  8, 8, 3, 2, 6, 9, 5, 4,
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
                data: [
                  1, 3, 1, 1, 1, 4, 2, 7, 3, 10, 10, 16, 30, 10, 23, 11, 8,
                  8, 3, 2, 6, 9, 5, 4,
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
      {/* hoursPerDay */}
      <View style={styles.container}>
        <Text style={styles.header}>HORA DEL DIA</Text>
        <BarChart
          data={{
            labels: hoursPerDay,
            datasets: [
              {
                data: [
                  9, 10, 7, 9, 11, 3, 6, 12, 12, 13, 12, 19, 10, 3, 9, 13, 12,
                  8, 6, 12, 12, 13, 9, 8,
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
                data: [48, 31, 67, 46, 38, 8],
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
                data: [48, 98, 8, 84],
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
                data: [1, 203, 34],
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
                data: [236, 2],
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
                data: [33, 205],
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
            labels: [
              " NISSAN",
              "CHEVROLET",
              "HONDA",
              "VW",
              "ITALIKA",
              "FORD",
              "TAXI",
              "DATSUN",
              "JEEP",
              "NA",
              "CHRYSLER",
              "DODGE",
              "SIN INFO",
              "TOYOTA",
              "VELOCI",
              "KEEWAY",
              " INTERNATIONAL",
              "GMC",
              "PULSAR",
              "MAZDA",
              "MB",
            ],
            datasets: [
              {
                data: [
                  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3,
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
      {/* branCars */}
      <View style={styles.container}>
        <Text style={styles.header}>MARCA DE AUTO</Text>
        <BarChart
          data={{
            labels: [
              "MOTOCICLETA",
              "GUAYIN",
              "MITSUBISHI",
              "SATURN",
              "VENTO",
              "IZUSU",
              "BAJAJ",
              "VOLVO",
              "MERCURY",
              "FREIGHTLINER",
              "HYUNDAI",
              "YAMAHA",
              "KENWORTH",
              "KURAZA",
            ],
            datasets: [
              {
                data: [3, 3, 4, 5, 6, 6, 7, 9, 9, 14, 18, 19, 24, 80],
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

export default SecondYearRecu;
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
