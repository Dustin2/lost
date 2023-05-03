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

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};
const SecondYear = () => {
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
        <Text style={styles.header}> DIAS POR SEMANA 2020</Text>
        <BarChart
          data={{
            labels: daysPerWeek,
            datasets: [
              {
                data: [30, 24, 33, 33, 30, 32, 35],
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
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                data: [11, 19, 22, 17, 16, 11, 22, 13, 22, 14, 30, 21],
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
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                data: [38, 68, 34, 78],
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
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
      {/* //pendiente */}
      <View style={styles.container}>
        <Text style={styles.header}>SEMANA ANUAL</Text>
        <BarChart
          data={{
            labels: annualWeek,
            datasets: [
              {
                data: [
                  3, 3, 1, 3, 1, 4, 9, 1, 5, 8, 3, 5, 4, 2, 5, 4, 5, 4, 6, 3, 1,
                  5, 2, 3, 1, 5, 2, 6, 2, 9, 3, 1, 3, 2, 5, 7, 4, 3, 6, 3, 3, 2,
                  5, 4, 9, 7, 10, 3, 4, 8, 5, 3, 2,
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
            labels: [
              "0",
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
            ],
            datasets: [
              {
                data: [
                  12, 3, 11, 6, 4, 2, 6, 13, 11, 18, 6, 14, 4, 8, 7, 4, 8, 3, 5,
                  22, 20, 10, 12, 9,
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
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                data: [74, 66, 26, 22, 28, 2],
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
                data: [74, 92, 2, 50],
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
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                data: [135, 44, 33, 6],
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
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                data: [195, 23],
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
                data: [6, 212],
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
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>MARCA</Text>
        <PieChart
          data={[
            {
              name: "N/A",
              population: 4,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
            },
            {
              name: "VW",
              population: 1,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
            },
            {
              name: "NISSAN",
              population: 1,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
              
            },
            {
              name: "N/A",
              population: 4,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
            },
            {
              name: "VW",
              population: 1,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
            },
            {
              name: "NISSAN",
              population: 1,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,

            },
            {
              name: "N/A",
              population: 4,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
            },
            {
              name: "VW",
              population: 1,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
            },
            {
              name: "NISSAN",
              population: 1,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,

            },
          ]}
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
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="population"
          backgroundColor="transparent"
          // paddingLeft="12"
          absolute //for the absolute number remove if you want percentage
        />
      </View>
      {/* <View style={styles.container}>
        <Text style={styles.header}>MARCA</Text>
        <PieChart
          data={[
            {
              name: ,
              population: 21500000,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: ,
              population: 2800000,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: ,
              population: 8538000,
              color: generateColor(),
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: ,
              population: 11920000,
              color: generateColor(),
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
            decimalPlaces: 2,
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
          // paddingLeft="12"
          // absolute //for the absolute number remove if you want percentage
        />
      </View> */}
    </View>
  );
};

export default SecondYear;
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
