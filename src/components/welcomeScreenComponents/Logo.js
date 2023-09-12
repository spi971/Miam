import React, { useEffect } from "react";
import { View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

import welcome from "../../../assets/images/welcome.png";
import { useNavigation } from "@react-navigation/native";

export default function Logo() {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    // Welcome animation
    ring1Padding.value = 0;
    ring2Padding.value = 0;
    setTimeout(
      () => (ring1Padding.value = withSpring(ring1Padding.value + hp(5))),
      100
    );
    setTimeout(
      () => (ring2Padding.value = withSpring(ring2Padding.value + hp(5.5))),
      300
    );

    // Moving to Home page after animation
    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  return (
    <Animated.View
      className="bg-white/20 rounded-full"
      style={{ padding: ring1Padding }}
    >
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2Padding }}
      >
        <Image source={welcome} style={{ width: hp(20), height: hp(20) }} />
      </Animated.View>
    </Animated.View>
  );
}
