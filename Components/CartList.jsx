import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as CartContext } from "../Contexts/CartContext";
import Counter from "./common/Counter";

const CartList = ({ _id, DishName, Description, CaculationCost }) => {
  const { state, DeleteCart, IncrementCart, DecrementCart } = useContext(
    CartContext
  );
  return (
    <View style={style.StarterComp}>
      <View style={style.StarterData}>
        <Text style={style.DishText}>{DishName}</Text>
        <Text style={style.DishText}>{Description}</Text>
        <Text style={style.PriceText}>€{CaculationCost}</Text>
      </View>

      <View style={style.StarterCounter}>
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
    justifyContent: "space-around",
  },
  StarterData: {
    width: 250,
    marginLeft: 20,
  },
  DishText: {
    textAlign: "left",
    color: "#3D4000",
  },
  PriceText: {
    color: "gold",
  },
});

export default CartList;
