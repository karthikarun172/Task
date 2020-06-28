import ContextDataProvider from "./ContextDataProvider";
import { Alert } from "react-native";

const CartReducer = (state, action) => {
  const maxValue = 10;
  switch (action.type) {
    case "ADD_TO_CART":
      let cart = [...state, action.payloads];
      cart.map((item) => {
        if (item._id === action._id) {
          item.Quantity += 1;
        }
      });
      return cart;

    case "REMOVE_FROM_CART":
      return state.filter((m) => m._id !== action.payload);

    case "INCREMENT_CART":
      let data = [...state];
      data.map((item) => {
        if (item._id === action._id) {
          item.Quantity >= maxValue
            ? Alert.alert("LIMIT EXCEEDS") && maxValue
            : (item.Quantity += action.amount);
          item.Cost += action.price;
        }
      });
      return data;

    case "DECREMENT_CART":
      let datas = [...state];
      datas.map((item) => {
        if (item._id === action._id) {
          item.Quantity -= action.amount;
          item.Cost -= action.price;
        }
      });
      return datas;
    default:
      return state;
  }
};

const AddToCart = (dispatch) => {
  return (_id, Dish, Description, Cost, Quantity, CaculationCost) => {
    dispatch({
      type: "ADD_TO_CART",
      _id,
      payloads: {
        _id,
        Dish,
        Description,
        Cost,
        Quantity,
        CaculationCost,
      },
    });
  };
};

const IncrementCart = (dispatch) => {
  return (_id, price, amount) => {
    dispatch({ type: "INCREMENT_CART", _id, amount, price });
  };
};

const DecrementCart = (dispatch) => {
  return (_id, price, amount) => {
    dispatch({ type: "DECREMENT_CART", _id, amount, price });
  };
};

const DeleteCart = (dispatch) => {
  return (_id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: _id });
  };
};

export const { Context, Provider } = ContextDataProvider(
  CartReducer,
  { AddToCart, DeleteCart, IncrementCart, DecrementCart },
  []
);
