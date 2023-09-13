import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import Top from "../components/homeScreenComponents/Top";
import Greeting from "../components/homeScreenComponents/Greeting";
import SearchBar from "../components/homeScreenComponents/SearchBar";
import Categories from "../components/homeScreenComponents/Categories";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeScreen() {
  const [activeCategory, setactiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "http://themealdb.com/api/json/v1/1/categories.php"
      );

      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
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
        <Greeting />
        <SearchBar />
        {categories.length > 0 && (
          <Categories
            activeCategory={activeCategory}
            setactiveCategory={setactiveCategory}
            categories={categories}
          />
        )}
      </ScrollView>
    </View>
  );
}
