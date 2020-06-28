import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as CartContext } from "../Contexts/CartContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CartList from "../Components/CartList";
import EmptyCart from "../Components/EmptyCart";

const Cart = ({ navigation }) => {
  const { state } = useContext(CartContext);
  const TotalPrice = state.reduce((acc, curr) => acc + curr.Cost, 0);
  const [showMore, SetShowMore] = useState(false);

  let showless = state.slice(0, 2);

  return (
    <View>
      {state.length === 0 ? (
        <EmptyCart Back={() => navigation.navigate("Home")} />
      ) : (
        <View>
          <View style={style.TotalPriceComp}>
            <View style={style.TotalPrice}>
              <Text style={style.TotalPriceText1}>TotalCost</Text>
              <Text style={style.TotalPriceText2}>€{TotalPrice}</Text>
            </View>
          </View>
          <Text style={style.ReviewOrderText}>Review Order</Text>

          <FlatList
            data={showMore === false ? showless : state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return (
                <CartList
                  DishName={item.Dish}
                  Description={item.Description}
                  CaculationCost={item.CaculationCost}
                  _id={item._id}
                />
              );
            }}
          />
          {state.length <= 2 ? null : (
            <TouchableOpacity onPress={() => SetShowMore(true)}>
              <Text style={{ textAlign: "right" }}>Show More</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  TotalPriceComp: {
    width: "100%",
    height: 300,
    backgroundColor: "#101D34",
  },
  TotalPrice: {
    backgroundColor: "white",
    width: 150,
    alignSelf: "center",
    marginTop: "30%",
    borderRadius: 5,
  },
  TotalPriceText1: {
    textAlign: "center",
    padding: 7,
    color: "gold",
  },
  TotalPriceText2: {
    textAlign: "center",
    padding: 3,
    fontSize: 20,
    fontWeight: "bold",
  },
  ReviewOrderText: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,
    marginTop: 30,
    marginBottom: 20,
  },
});

export default Cart;
