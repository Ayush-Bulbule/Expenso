import { BadgeIndianRupee, ChevronDown, IndianRupee } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface SelectCategoryInterface {
    type: string,
    setType: (category: string) => void
}
const SelectCategory = ({ type, setType }: SelectCategoryInterface) => {
    const [showOptions, setShowOptions] = useState(false);
    const types = ["Expense", "Income"];

    const selectType = (t: string) => {
        setType(t);
        setShowOptions(false);
        console.log("Type Selected:", t)
    }
    return (
        <View className="flex-1 relative bg-red ">
            <TouchableOpacity onPress={() => setShowOptions(!showOptions)} className="flex-row justify-between gap-x-2  items-center bg-emerald-50 rounded-full px-4 py-3">
                <View className="flex-row items-center gap-x-2">
                    <BadgeIndianRupee size={22} color={"black"} />
                    <Text className="text-lg font-poppins-medium text-gray-800 text-ellipsis max-w-28 line-clamp-1">
                        {type}
                    </Text>
                </View>
                <ChevronDown size={24} color={"black"} />
            </TouchableOpacity>

            {/* DropDown Box */}
            <View className={`${showOptions ? "block" : "hidden"} absolute top-14 w-full bg-white rounded-lg shadow-lg z-50`}>
                {types.map((t, index) => (
                    <TouchableOpacity key={index} onPress={() => selectType(t)} className="flex-row items-center gap-x-2 px-4 py-3 ">
                        <Text style={{ fontSize: 16 }}>{t}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>

    )
}



export default SelectCategory;