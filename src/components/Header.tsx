import React from "react";
import { View, Text, StyleSheet } from "react-native";


interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? `task` : `tasks`;

  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>You have </Text>
        <Text style={styles.tasksCounterBold}>
          {tasksCounter} {tasksCounterText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 50,
    backgroundColor: "#2d116d",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  tasks: {
    alignItems: "center",
    flexDirection: "row",
  },
  tasksCounter: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Inter-Regular",
  },
  tasksCounterBold: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Inter-Bold",
  },
});