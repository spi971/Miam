import { View, StatusBar } from "react-native";
import React from "react";

import WelcomeText from "../components/WelcomeText";
import Logo from "../components/Logo";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-orange-500">
      <StatusBar style="light" />

      {/* logo image with ring */}
      <Logo />
      {/* title and punchline */}
      <WelcomeText />
    </View>
  );
}
