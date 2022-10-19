import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Button(props) {
    return (
        <TouchableOpacity style={[styles.container, props.style]}
            onPressIn={() =>{
                if(props.nav == 'Edit'){
                    props.navigation.navigate(`${props.nav}`, { id: `${props.idprojeto}` })
                }else{
                    props.navigation.navigate(`${props.nav}`, { id: 0 })
                }
                
            }}>
            <Icon name={props.icon} style={styles.icon}></Icon>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3F51B5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 28,
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 2,
        minWidth: 40,
        minHeight: 40
    },
    icon: {
        color: "#fff",
        fontSize: 24,
        alignSelf: "center"
    }
});

