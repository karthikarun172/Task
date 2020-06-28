import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const EmptyCart = ({ Back }) => {
  return (
    <View style={style.EmptyCartCont}>
      <Text style={style.EmptyCartText}>YOUR CART IS EMPTY</Text>
      <TouchableOpacity style={style.BackCompCont} onPress={Back}>
        <Text style={style.BackComp}>Order Somthing</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  EmptyCartCont: {
    backgroundColor: "white",
    height: "100%",
  },
  EmptyCartText: {
    textAlign: "center",
    marginTop: "70%",
  },
  BackCompCont: {
    marginTop: 20,
    alignSelf: "center",
  },
  BackComp: {
    textAlign: "center",
    borderWidth: 2,
    width: 120,
    padding: 5,
    paddingLeft: 1,
    paddingRight: 1,
    borderColor: "darkred",
  },
});

export default EmptyCart;
