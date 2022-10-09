import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function Header(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TextInput
          placeholder="PROJETOS"
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
    alignSelf: "stretch",
    justifyContent: "center"
  },
  textInput: {
    color: "rgba(39,36,36,1)",
    height: 36,
    lineHeight: 50,
    letterSpacing: 0,
    width: 148,
    fontSize: 30,
    alignSelf: "center"
  }
});

export default Header;