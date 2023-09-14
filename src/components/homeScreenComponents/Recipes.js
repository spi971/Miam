import { View, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import RecipeCard from "./RecipeCard";

export default function Recipes(category) {
  return (
    <View className="mx-4 space-y-3 pt-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600"
      >
        Recipes
      </Text>
      <View>
        <MasonryList
          data={category.category}
          keyExtractor={(item) => item.idMeal}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <RecipeCard item={item} index={index} />
          )}
          //refreshing={isLoadingNext}
          //onRefresh={() => refetch({ first: ITEM_CNT })}
          onEndReachedThreshold={0.1}
          //onEndReached={() => loadNext(ITEM_CNT)}
        />
      </View>
    </View>
  );
}
