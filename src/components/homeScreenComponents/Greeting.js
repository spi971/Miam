import React from "react";
import { Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Greeting() {
  return (
    <View className="mx-4 space-y-2 mb-2">
      <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
        Hello, Sandy !
      </Text>
      <View>
        <Text
          style={{ fontSize: hp(2.4) }}
          className="font-semibold text-neutral-600"
        >
          Cooking with Confidence!
        </Text>
      </View>
      <Text
        style={{ fontSize: hp(2.4) }}
        className="font-semibold text-neutral-600"
      >
        One Meal and
        <Text className="text-orange-400"> One Memory at a Time!</Text>
      </Text>
    </View>
  );
}
