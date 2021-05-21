import React from "react";
import {StyleSheet, Text, View, } from "react-native";

export default TaskitList = ({list}) => {
    return(
        <View>
            <Text>{list.name}</Text>
        </View>
    );
}