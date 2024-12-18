import CONSTANTS from "@/constants";
import { BookmarkPlus, ChevronDown } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface SelectCategoryInterface {
  category: string,
  setCategory: (category:string) => void
}
const SelectCategory = ({ category, setCategory }:SelectCategoryInterface) => {
  const categories = CONSTANTS.CATEGORIES;
  const [showOptions, setShowOptions] = useState(false);

  const selectCategory = (category:string) => {
    setCategory(category);
    setShowOptions(false);
  }
  return (
    <View className="flex-1 relative">
        <TouchableOpacity onPress={()=>setShowOptions(!showOptions)} className="flex-row justify-between gap-x-2  items-center bg-sky-50 rounded-full px-4 py-3">
        <View className="flex-row items-center gap-x-2">
                    <BookmarkPlus size={22} color={"black"} />
                    <Text className="text-lg font-poppins-medium text-gray-800 text-ellipsis max-w-28 line-clamp-1">
                        {category}
                    </Text>
                </View>
                <ChevronDown size={24} color={"black"} />
        </TouchableOpacity>

        {/* DropDown Box */}
        <View className={`${showOptions?"block":"hidden"} absolute top-14 w-full bg-white rounded-lg shadow-lg z-50`}>
          {categories.map((cat, index) => (
            <TouchableOpacity key={index} onPress={() => selectCategory(cat.name)} className="flex-row items-center gap-x-2 px-4 py-3 ">
              
              <Text style={{ fontSize: 16 }}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </View>

  )
}



export default SelectCategory;