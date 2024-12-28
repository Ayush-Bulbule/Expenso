import { DimensionValue, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CONSTANTS from '@/constants'
import moment from 'moment'

type ExpenseCategoryItemProps = {
    category: string
    count: number
    amount: number
    totalExpense: number
}
const ExpenseCategoryItem = ({category, count, amount, totalExpense}:ExpenseCategoryItemProps) => {
    const categoryObj = CONSTANTS.CATEGORIES.find((cat) => cat.name === category)
    const percentage = (amount / totalExpense) * 100;

    return (
        <View className='bg-white rounded-2xl'> 
            <View className="flex flex-row justify-between items-center p-3">
                <View className="flex flex-row">
                    <View
                        className={`h-12 w-12 flex items-center mr-3 justify-center rounded-full`}
                        style={{ backgroundColor: categoryObj?.backgroundColor }}
                    >
                        {categoryObj?.icon}   
                    </View>
                    <View>
                        <Text className="text-lg font-poppins-medium text-gray-800">
                            {categoryObj?.name}
                        </Text>
                        <Text className="text-sm font-poppins-regular">{count} Expenses</Text>
                    </View>
                </View>
                <View className=" flex flex-col items-end  justify-center">
                    <View className='w-48 h-2 rounded-full mb-1 flex items-end mt-2'>
                        <View className={`h-full w-1/2 rounded `} style={{backgroundColor:categoryObj?.color, width:`${percentage+(percentage<1?1:0)}%` }}></View>
                    </View>
                    <Text className="text-md font-poppins-medium text-gray-800">
                        ₹{amount}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ExpenseCategoryItem
