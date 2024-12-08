import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Screen from '@/components/screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const HomeScreen = () => {
  return (
    <Screen className='relative'>
      {/* Header */}
      <View className='p-4'>
        <Text className='text-xl text-center font-poppins-medium '>expenso</Text>
      </View>
      {/* Expense Card */}
      <View className=' bg-blue-50 px-8 py-10 rounded-3xl m-4 '>
        <Text className='text-3xl text-center font-poppins-medium'>₹ 20313.00</Text>
        <Text className='text-lg  font-poppins-regular text-center'>Balance</Text>
      </View>
      {/* List of Expenses  - Daywise */}
      <View className='px-2 pt-8'> 
        <Text className='text-xl font-poppins-medium text-gray-700 mb-2'>Today</Text>
        {/* List Item */}
        <View className='flex flex-row justify-between items-center p-3 rounded-2xl '>
          <View className='flex flex-row'>
            <View className='h-12 w-12 flex items-center mr-3 justify-center bg-rose-100 rounded-full'>
              <Ionicons name="fast-food-outline" size={24} color={"red"} />
            </View>
            <View  className=''>
            <Text className='text-lg font-poppins-medium text-gray-800'>Ashirwad Thali</Text>
            <Text className='text-sm font-poppins-regular'>Lunch</Text>
            </View>
          </View>
          <View>
            <Text className='text-md font-poppins-medium'>₹ 500.00</Text>
          </View>
        </View>
      </View>

      {/* Add Expense Button */}
      <TouchableOpacity className='h-16 w-16 bg-black rounded-2xl shadow-md absolute bottom-10 right-6 flex flex-row items-center justify-center'>
        <Feather name="plus" size={24} color={"white"} />
      </TouchableOpacity>

      {/* Tabbar */}
    </Screen>
  )
}

export default HomeScreen