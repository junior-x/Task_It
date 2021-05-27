import { StatusBar } from "expo-status-bar";
import React from "react";
import logo from "./assets/splash.png"
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Modal,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import tempData from "./TempData";
import TaskitList from "./components/TaskitList";
import AddListModal from "./components/AddListModal";

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
    lists: tempData
  };

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  };

  renderList = list => {
    return <TaskitList list={list} updateList={this.updateList} />
  };

  addList = list => {
    this.setState({ lists: [...this.state.lists, { ...list, id: this.state.lists.length + 1, todos: [] }] })
  };

  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item;
      })
    })
  };
  
  ///<!--///Logo test <Image/> (need to run on device)-->
  render() {
    return (
      <View style={styles.container}>
        
        <StatusBar style="light" />

        <Modal 
          animationType="slide" 
          visible={this.state.addTodoVisible} 
          onRequestClose={() => this.toggleAddTodoModal()}>
              
              <AddListModal closeModal={() => this.toggleAddTodoModal()} addListModal={this.addList} />
            
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <Image source={logo} style={{ alignItems:"center", justifyContent:"center", marginBottom: 54, marginRight: 27 }} />
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps="always"
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
