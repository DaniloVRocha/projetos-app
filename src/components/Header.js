import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function Header(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TextInput
          placeholder={props.name}
          placeholderTextColor="rgba(255,255,255,1)"
          maxLength={200}
          style={styles.textInput}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
    alignItems: "center"
  },
  textWrapper: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  },
  textInput: {
    color: "rgba(39,36,36,1)",
    height: 56,
    lineHeight: 70,
    letterSpacing: 0,
    width: 280,
    fontSize: 30,
    alignSelf: "center"
  }
});

export default Header;