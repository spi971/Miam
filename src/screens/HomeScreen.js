import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, View } from "react-native";

import Top from "../components/homeScreenComponents/Top";
import Greeting from "../components/homeScreenComponents/Greeting";
import SearchBar from "../components/homeScreenComponents/SearchBar";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon*/}
        <Top />

        {/** greeting and punchline */}
        <Greeting />
        <SearchBar />
      </ScrollView>
    </View>
  );
}
