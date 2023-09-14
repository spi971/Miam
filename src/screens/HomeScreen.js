import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Top from "../components/homeScreenComponents/Top";
import Greeting from "../components/homeScreenComponents/Greeting";
import SearchBar from "../components/homeScreenComponents/SearchBar";
import Categories from "../components/homeScreenComponents/Categories";
import Recipes from "../components/homeScreenComponents/Recipes";

export default function HomeScreen() {
  const [activeCategory, setactiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    getRecipes();
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

  const getRecipes = async (categoryName = "Beef") => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      if (response && response.data) {
        setCategory(response.data.meals);
      }
    } catch (error) {}
  };

  handleCategoryChange = (category) => {
    getRecipes(category);
    setactiveCategory(category);
    setCategory([]);
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
            handleCategoryChange={handleCategoryChange}
            categories={categories}
          />
        )}
        {categories.length == 0 || category.length == 0 ? null : (
          <Recipes category={category} />
        )}
      </ScrollView>
    </View>
  );
}
