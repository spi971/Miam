import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Categories({
  categories,
  activeCategory,
  setactiveCategory,
}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category.strCategory === activeCategory;
          let activeBtn = isActive ? " bg-orange-400" : " bg-black/10";
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setactiveCategory(category.strCategory)}
              className="flex items-center space-y-1"
            >
              <View className={"rounded-full p-[6px] " + activeBtn}>
                <Image
                  source={{ uri: category.strCategoryThumb }}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />
              </View>
              <Text className="text-neutral-600" style={{ fontSize: hp(1.8) }}>
                {category.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
