import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Counter = ({ onSub, value, onAdd }) => {
  return (
    <View style={style.counter}>
      <TouchableOpacity onPress={onSub}>
        <Text style={style.Text}>-</Text>
      </TouchableOpacity>
      <Text style={style.Text}>{value}</Text>
      <TouchableOpacity onPress={onAdd}>
        <Text style={style.Text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  counter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    width: 105,
    marginLeft: 30,
  },

  Text: {
    textAlign: "center",
    borderColor: "grey",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    color: "#12B75E",
    fontWeight: "bold",
  },
});

export default Counter;
