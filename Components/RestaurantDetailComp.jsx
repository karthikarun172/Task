import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RestaurantDetail = ({ RestaurantName, Rating, WorkingTime, Phone }) => {
  return (
    <View style={style.RestaurantDetailComp}>
      <Text style={style.RestaurantName}>{RestaurantName}</Text>
      <View style={style.RatingComp}>
        <Text style={style.RatingCompText}>{Rating} [200+]</Text>
        <Text style={style.RatingCompText}>|</Text>
        <Text style={style.RatingCompText}>{WorkingTime}</Text>
      </View>
      <Text style={style.Phone}>Reach us at: {Phone}</Text>
      <View style={style.BookTable}>
        <Text style={style.BookTableText}>BOOK A TABLE</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  RestaurantDetailComp: {
    backgroundColor: "white",
    marginTop: 120,
    height: 150,
    width: "90%",
    alignSelf: "center",
    elevation: 2,
    borderRadius: 5,
  },
  RestaurantName: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 17,
  },
  RatingComp: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  RatingCompText: {
    color: "#3D4000",
  },
  Phone: {
    textAlign: "center",
    color: "#3D4000",
  },
  BookTable: {
    marginTop: 10,
    backgroundColor: "black",
    borderRadius: 9,
    alignSelf: "center",
  },
  BookTableText: {
    color: "white",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default RestaurantDetail;
