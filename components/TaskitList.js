import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import colors from "../Colors";
import TaskitModal from "./TaskitModal";

export default class TaskitList extends React.Component {

    state = {
        showListVisible: false
    };

    toggleListModal() {
        this.setState({showListVisible: !this.state.showListVisible})
    };
    
    render() {

        const list = this.props.list

        const completedCount = list.todos.filter(todo => todo.completed).length;
        const remainingCount = list.todos.length - completedCount;
        
        return(
            <View>
                <Modal 
                    animationType="slide" 
                    visible={this.state.showListVisible} 
                    onRequestClose={() => this.toggleListModal()}
                >
                    <TaskitModal 
                        list={list} 
                        closeModal={() => this.toggleListModal()}
                        updateList={this.props.updateList}
                    />

                </Modal>

                <TouchableOpacity 
                        style={[styles.listContainer, { backgroundColor: list.color}]} 
                        onPress={() => this.toggleListModal()}
                    >
                    
                    <Text style={styles.listTitle} numberOfLines={1}>
                        {list.name}
                    </Text>
                    
                    <View>
                        <View style={{ alignItems: "center", backgroundColor: colors.dark, borderRadius: 90, height: 60, }}>
                            <Text style={styles.count}>{remainingCount}</Text>
                            <Text style={styles.subtitle}>Remaining</Text>
                        </View>
        
                        <View style={{ alignItems: "center", backgroundColor: colors.dark, borderRadius: 90, height: 60, }}>
                            <Text style={styles.count}>{completedCount}</Text>
                            <Text style={styles.subtitle}>Completed</Text>
                        </View>
                    </View>
        
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 45,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.dark,
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: colors.light,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: colors.dark,
    },
})