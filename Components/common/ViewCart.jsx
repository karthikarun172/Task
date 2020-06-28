import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewCart = ({ totalQuantity }) => {
  return (
    <View style={style.ViewCartComp}>
      <Text style={style.ViewCartText}>View Cart [{totalQuantity} ITEMS]</Text>
    </View>
  );
};
const style = StyleSheet.create({
  ViewCartComp: {
    backgroundColor: "#103234",
    padding: 15,
  },
  ViewCartText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
});

export default ViewCart;
