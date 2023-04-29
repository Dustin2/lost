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

//data
import { daysPerWeek } from "../../data/data";
import { schedule } from "../../data/schedule";
import { hoursPerDay } from "../../data/hoursPerDay";

// const MyBarChar = () => {
//   return (
//     <>
//       <BarChart
//         data={{
//           labels: ["January", "February", "March", "April", "May", "June"],
//           datasets: [
//             {
//               data: [20, 45, 28, 80, 99, 43],
//             },
//           ],
//         }}
//         width={Dimensions.get("window").width - 16}
//         height={220}
//         // yAxisLabel={"Rs"}
//         chartConfig={{
//           backgroundColor: "#1cc910",
//           backgroundGradientFrom: "#eff3ff",
//           backgroundGradientTo: "#efefef",
//           decimalPlaces: 2,
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//         }}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </>
//   );
// };
const FisrtYear = () => {
  return (
    <View>
      <View>
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
          // yAxisLabel={"Rs"}
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
        />
      </View>
      <View>
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
        />
      </View>
      <View>
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
          // yAxisLabel={"Rs"}
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
        />
      </View>
      <View>
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
          width={Dimensions.get("window").width - 16}
          height={220}
          // yAxisLabel={"Rs"}
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
        />
      </View>
      <View>
        <Text style={styles.header}>HORA DEL DIA</Text>
        <BarChart
          data={{
            labels: hoursPerDay,
            datasets: [{ data: [4, 1, 2, 7, 7, 6, 4, 5, 4, 1, 3, 2, 2, 1, 2, 3, 4, 2, 2] }],
          }}
          width={Dimensions.get("window").width - 16}
          height={220}
          // yAxisLabel={"Rs"}
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
        />
      </View>
      <View>
        <Text style={styles.header}>2019</Text>
        <BarChart
          data={{
            labels: daysPerWeek,
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
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
        />
      </View>
      <View>
        <Text style={styles.header}>2019</Text>
        <BarChart
          data={{
            labels: daysPerWeek,
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
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
        />
      </View>
      <View>
        <Text style={styles.header}>2019</Text>
        <BarChart
          data={{
            labels: daysPerWeek,
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
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
        />
      </View>
    </View>
  );
};

export default FisrtYear;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
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
});
