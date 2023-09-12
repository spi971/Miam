import React from "react";
import { Image, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { BellIcon } from "react-native-heroicons/outline";

import avatar from "../../../assets/images/avatar.png";

export default function Top() {
  return (
    <View className="mx-4 flex-row justify-between items-center mb-2">
      <Image source={avatar} style={{ height: hp(5.5), width: hp(5) }} />
      <BellIcon size={hp(4)} color="gray" />
    </View>
  );
}
