import React from "react";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function WelcomeText() {
  return (
    <View className="flex items-center space-y-2">
      <Text
        className="font-bold text-white tracking-widest"
        style={{ fontSize: hp(7) }}
      >
        Miam
      </Text>
      <Text
        className="font-medium text-white tracking-widest"
        style={{ fontSize: hp(2) }}
      >
        Add a Little Love!
      </Text>
    </View>
  );
}
