import { View, Text } from "react-native";

export default function RecipeDetailScreen({ route, navigation }) {
  const { details } = route.params;
  console.log(details);
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}
