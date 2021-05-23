import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";

export default class AddListModal extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                
                <TouchableOpacity 
                style={{position: "absolute", top: 64, right: 32}} 
                onPress={this.props.closeModal} >
                    <AntDesign name="close" size={24} color={colors.dark} />
                </TouchableOpacity>

                <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                    <Text style={styles.title}>
                        Create Task List
                    </Text>
                    <TextInput style={styles.input} placeholder="Task Name?" />
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        color: colors.dark,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: colors.dark,
        alignSelf: "center",
        marginBottom: 16,
    },
});