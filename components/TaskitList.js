import React from "react";
import {StyleSheet, Text, View, } from "react-native";

export default TaskitList = ({list}) => {
    return(
        <View style={[Styles.listContainer, { backgroundColor: list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200,
    },
})