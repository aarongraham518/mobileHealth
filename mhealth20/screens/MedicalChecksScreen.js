import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LineChart, BarChart, ProgressChart } from "react-native-chart-kit";

const MedicalChecksScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [120, 125, 130, 135, 128, 132], // Blood pressure data
        strokeWidth: 2,
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 35, 50, 70, 85, 100], // Stress levels data
      },
    ],
  };

  const progressData = {
    labels: ["Swim", "Bike", "Walk", "Run", "Kayak", "Other"],
    data: [0.6, 0.7, 0.8, 0.9, 0.5, 0.4],
    // colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"],
  };

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    // backgroundGradientTo: "#1862b7",
    // decimalPlaces: 1,
    color: (opacity = 1) => `rgba(24, 98, 183, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(24, 98, 183, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#1862b7",
    },
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Blood Pressure Monitor</Text>
          <LineChart
            data={lineData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chartStyle}
          />

          <Text style={styles.header}>Stress Levels</Text>
          <BarChart
            data={barData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            style={styles.chartStyle}
          />

          <Text style={styles.header}>Activity Progress</Text>
          <ProgressChart
            data={progressData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            style={styles.chartStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1862b7",
    // textShadowColor: "rgba(24, 98, 183, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: "#1862b7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default MedicalChecksScreen;
