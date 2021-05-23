import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import tempData from "./TempData";
import TaskitList from "./components/TaskitList";
import AddListModal from "./components/AddListModal";

export default class App extends React.Component {
  state = {
    addTodoVisible: false
  };

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  };

  renderList = list => {
    return <TaskitList list={list} />
  };

  render() {
    return (
      <View style={styles.container}>
        
        <StatusBar style="light" />

        <Modal 
          animationType="slide" 
          visible={this.state.addTodoVisible} 
          onRequestClose={() => this.toggleAddTodoModal()}>
              
              <AddListModal closeModal={() => this.toggleAddTodoModal()} />
            
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
            <Text style={styles.title}>
              TASK
              <Text style={{ fontWeight: "300", color: colors.purple }}>-IT</Text>
            </Text>
          <View style={styles.divider} />
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
          />
        </View>

        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
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
    marginBottom: 69,
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.light,
    paddingHorizontal: 90,
    paddingBottom: 69,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 12,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.red,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 9,
  },
});
