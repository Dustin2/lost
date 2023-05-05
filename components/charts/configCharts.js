export const configCharts = {
    
}
    
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



