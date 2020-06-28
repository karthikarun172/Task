import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Starters from "../Components/StarterComp";
import RestaurantDetail from "../Components/RestaurantDetailComp";
import ViewCart from "../Components/common/ViewCart";
import { DummyDatas } from "../utils/Datas";
import { Context as CartContext } from "../Contexts/CartContext";

const Home = ({ navigation }) => {
  const { state } = useContext(CartContext);

  const Quantity = state.reduce((acc, curr) => acc + curr.Quantity, 0);

  return (
    <ImageBackground
      source={require("../assets/homeBG.png")}
      style={{
        flex: 1,
        width: "100%",
        height: "30%",
        backgroundColor: "#F0F0F0",
      }}
    >
      <View style={style.HomeScreen}>
        <TouchableOpacity onPress={() => navigation.navigate("Prac")}>
          <RestaurantDetail
            RestaurantName="Inka Restaurant"
            Rating="5"
            WorkingTime="All days: 09:00 AM - 06:00PM"
            Phone="9854562142"
          />
        </TouchableOpacity>
        <Text style={style.StarterText}>Starter</Text>
        <FlatList
          data={DummyDatas}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <Starters
                _id={item._id}
                Quantity={item.Quantity}
                DishName={item.Dish}
                Description={item.Description}
                Price={item.Cost}
                CaculationCost={item.CaculationCost}
              />
            );
          }}
        />
        {Quantity === 0 ? null : (
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <ViewCart totalQuantity={Quantity} />
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  HomeScreen: {
    height: "100%",
  },
  StarterText: {
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
});

export default Home;
