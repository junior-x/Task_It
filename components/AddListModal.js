import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";
import tempData from "../TempData";
import logo from "../assets/splash.png"

export default class AddListModal extends React.Component {
    backgroundColors = [ "#FF3C5F", "#FAFAFA", "#608FEB", "#FFED46", "#C51FFF", "#AFFE60" ];
    state = {
        name: "",
        color: this.backgroundColors[0]
    };

    createTodo = () => {
        const { name, color} = this.state;
        const list = { name, color };

        this.props.addList(list);

        this.setState({ name: "" });
        this.props.closeModal();
    };

    renderColors() {
        return this.backgroundColors.map(color => {
            return(
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, {backgroundColor: color}]}
                    onPress={() => this.setState({ color })}
                />
            );
        })
    };

    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">

                <View>
                    <Image source={logo} style={{ alignItems:"center", justifyContent:"center", marginBottom: 54, marginRight: 27  }} />
                </View>
                
                <TouchableOpacity 
                style={{position: "absolute", top: 64, right: 32}} 
                onPress={this.props.closeModal} >
                    <AntDesign name="close" size={24} color={colors.dark} />
                </TouchableOpacity>

                <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                    
                    <Text style={styles.title}>
                        Create Task List
                    </Text>
                    
                    <TextInput 
                        style={styles.input} 
                        placeholder="Task Name?" 
                        placeholderTextColor={colors.gray}
                        onChangeText={text => this.setState({ name: text })} 
                    />

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 12}}>
                        {this.renderColors()}
                    </View>

                    <TouchableOpacity 
                        style={[styles.create, {backgroundColor: this.state.color }]} 
                        onPress={this.createTodo}
                    >

                        <Text style={{color: colors.white, fontWeight: "600"}}>Create!</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        color: colors.light,
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
    input: {
        color: colors.light,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.light,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18,
    }, 
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4,
    },
});