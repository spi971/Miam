import { TextInput, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function SearchBar() {
  return (
    <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
      <TextInput
        placeholder="Search for some magic..."
        placeholderTextColor={"gray"}
        style={{ fontSize: hp(1.7) }}
        className="flex-1 text-base mb-1 pl-3 tracking-wider"
      />
      <View className="bg-white rounded-full p-3">
        <MagnifyingGlassIcon size={hp(2.7)} strokeWidth={3} color="gray" />
      </View>
    </View>
  );
}
