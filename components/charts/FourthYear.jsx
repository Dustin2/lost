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
import { coordinates2022 } from "../../data/coordinatesPerYear";
const FourthYear = () => {
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
          {coordinates2022.map((marker, key) => {
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
        <Text style={styles.header}> DIAS POR SEMANA 2022</Text>
        <BarChart
          data={{
            labels: daysPerWeek,
            datasets: [
              {
                data: [33, 24, 28, 26, 21, 23, 36],
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
                data: [40, 20, 12, 22, 18, 22, 14, 17, 18, 8, 0, 0],
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
                data: [12, 72, 42, 65],
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
                  16, 9, 3, 8, 8, 9, 4, 1, 5, 1, 3, 5, 2, 8, 2, 10, 2, 5, 6, 3,
                  5, 6, 4, 8, 1, 4, 4, 3, 2, 3, 7, 5, 3, 1, 4, 6, 3, 6, 6,
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
                  3, 2, 2, 1, 2, 2, 10, 18, 13, 12, 10, 9, 11, 7, 6, 4, 10, 4,
                  7, 12, 19, 10, 7, 10,
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
                data: [67, 40, 36, 17, 30, 1],
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
                data: [67, 76, 1, 47],
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
        <Text style={styles.header}> ROBO DE:</Text>
        <BarChart
          data={{
            labels: [" AUTOMOVIL", "CAMIONETA", " MOTOCICLETA", "VEHICULO"],
            datasets: [
              {
                data: [100, 32, 59, 0],
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
                data: [181, 10],
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
                data: [0, 191],
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
        <Text style={styles.header}>MARCA DE AUTO</Text>
        <BarChart
          data={{
            labels: [
              "KIA",
              "MOTOCICLETA",
              "GM",
              "MITSUBISHI",
              "ISUZU",
              "MB",
              "RENAULT",
              "DOGGE",
              "HYUNDAY",
              "MERCURY",
              "YUKON",
              "BMW",
              "KURAZAI",
              "CHRYSLER",
              "BDS",
              "SUZUKI",
            ],
            datasets: [
              {
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3],
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
        <Text style={styles.header}>MARCA DE AUTO</Text>
        <BarChart
          data={{
            labels: [
              "SN",
              "GMC",
              "VELOCI",
              "VENTO",
              "FORD",
              "DODGE",
              "BAJAJ",
              "YAMAHA",
              "MAZDA",
              "TOYOTA",
              "TAXI",
              "VW",
              "ITALIKA",
              "HONDA",
              "CHEVROLET",
              "NISSAN",
            ],
            datasets: [
              {
                data: [3, 3, 4, 4, 4, 5, 5, 5, 5, 9, 14, 15, 20, 21, 49],
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

export default FourthYear;
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
