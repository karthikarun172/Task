import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as CartContext } from "../../Contexts/CartContext";

const AddButton = ({ onAddtoCart }) => {
  return (
    <View style={style.AddButton}>
      <TouchableOpacity onPress={onAddtoCart}>
        <Text style={style.AddButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  AddButton: {
    alignItems: "center",
  },
  AddButtonText: {
    width: 100,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
    color: "gold",
    fontWeight: "bold",
    // fontSize: 17,
  },
});

export default AddButton;
