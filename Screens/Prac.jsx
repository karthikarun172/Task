import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Prac = () => {
  const [counter, SetCounter] = useState(0);
  const maxValue = 10;
  return (
    <View>
      <Text>{counter}</Text>
      <Button
        title="+"
        onPress={counter >= 10 ? maxValue : () => SetCounter(counter + 1)}
      />
      <Button
        title="-"
        onPress={counter <= 0 ? 0 : () => SetCounter(counter - 1)}
      />
    </View>
  );
};

export default Prac;
