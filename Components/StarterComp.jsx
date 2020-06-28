import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddButton from "./common/AddButton";
import Counter from "./common/Counter";
import { Context as CartContext } from "../Contexts/CartContext";

const Starters = ({
  _id,
  DishName,
  Description,
  Price,
  Quantity,
  CaculationCost,
}) => {
  const {
    state,
    AddToCart,
    IncrementCart,
    DecrementCart,
    DeleteCart,
  } = useContext(CartContext);

  return (
    <View style={style.StarterComp}>
      <View style={style.StarterData}>
        <Text style={style.DishText}>{DishName}</Text>
        <Text style={style.DishText}>{Description}</Text>
        <Text style={style.PriceText}>€{Price}</Text>
      </View>
      <View style={style.StarterCounter}>
        <AddButton
          onAddtoCart={() =>
            AddToCart(
              _id,
              DishName,
              Description,
              Price,
              Quantity,
              CaculationCost
            )
          }
        />
        {state.map((item) => {
          if (item._id === _id) {
            return (
              <Counter
                key={item._id}
                value={item.Quantity}
                onSub={
                  item.Quantity <= 1
                    ? () => DeleteCart(item._id)
                    : () => DecrementCart(item._id, item.CaculationCost, 1)
                }
                onAdd={() => IncrementCart(item._id, item.CaculationCost, 1)}
              />
            );
          }
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  StarterComp: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  StarterData: {
    width: 250,
    marginLeft: 30,
  },
  DishText: {
    textAlign: "left",
    color: "#3D4000",
  },
  PriceText: {
    color: "gold",
  },
});

export default Starters;
