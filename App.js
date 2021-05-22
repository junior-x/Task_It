import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import tempData from "./TempData";
import TaskitList from "./components/TaskitList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />

        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            TASK
            <Text style={{ fontWeight: "300", color: colors.blue }}>-IT</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TaskitList list={item} />}
          />
        </View>

        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={colors.light} />
          </TouchableOpacity>

          <Text style={styles.add}></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#291F30",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  divider: {
    backgroundColor: colors.light,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.light,
    paddingHorizontal: 64,
    paddingBottom: 69,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.red,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
