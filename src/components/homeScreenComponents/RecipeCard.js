import { Pressable, Image, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function RecipeCard({ item, index }) {
  // isEven purpose is to check if we add padding between the column
  let isEven = index % 2 == 0;
  const heightMasonry = index % 3 == 0 ? hp(25) : hp(35);
  // alternate way to define radom height to a masonry but not working here, find why
  //const randBool = useMemo(() => (index % 3 == 0 ? hp(Math.random()) : hp(35)));

  const [mealDetails, setMealDetails] = useState();
  const navigation = useNavigation();
  getMealDetails = async (idMeal) => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setMealDetails(response.data.meals);
      navigation.navigate("Recipe", {
        details: JSON.stringify(mealDetails),
      });
      // navigation.navigate("Recipe", { mealDetails: mealDetails });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(100)
        .springify()
        .damping(120)}
    >
      <Pressable
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        onPress={() => getMealDetails(item.idMeal)}
        className="flex justify-center mb-4 space-y-1"
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={{
            width: "100%",
            height: heightMasonry,
            borderRadius: 35,
          }}
          className="bg-black/5"
        />
        <Text
          className="font-semibold ml-2 text-neutral-600"
          style={{ fontSize: hp(1.5) }}
        >
          {item.strMeal.length > 20
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
}
