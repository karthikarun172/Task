import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as CartProvider } from "./Contexts/CartContext";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import Prac from "./Screens/Prac";

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
