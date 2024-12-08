import { View, Text, FlatList, FlatListComponent, ScrollView } from 'react-native'
import React from 'react'
import Screen from '@/components/screen'
import Ionicons from '@expo/vector-icons/Ionicons'

const DashboardScreen = () => {
  return (
    <Screen className='relative'>
      <Text className='text-xl text-center font-poppins-medium py-4'>expenso</ Text>
      {/* bar graph of daily spendings */}
      <View className='bg-blue-50 px-8 py-10 rounded-3xl m-4 h-64'>
        {/* Add Bar graph here */}
      </View>

      {/* Spending Group - Day, Week, Month */}
      <View className='px-2 pt-8 flex flex-row gap-2'>
        <View className='flex-1 bg-blue-50 px-4 py-6 rounded-3xl'>
          <Text className='text-xs  font-poppins-regular text-center'>Today</Text>
          <Text className='text-sm text-center font-poppins-medium'>₹ 20313.00</Text>
        </View>
        <View className='flex-1 bg-blue-50 px-4 py-6 rounded-3xl'>
          <Text className='text-xs  font-poppins-regular text-center'>Week</Text>
          <Text className='text-sm text-center font-poppins-medium'>₹ 20313.00</Text>
        </View>
        <View className='flex-1 bg-blue-50 px-4 py-6 rounded-3xl'>
          <Text className='text-xs  font-poppins-regular text-center'>Month</Text>
          <Text className='text-sm text-center font-poppins-medium'>₹ 20313.00</Text>
        </View>
      </View>


      {/* List of categories */}
      <View className='p-2 mt-6 mb-20'>
        <Text className='text-xl font-poppins-medium text-gray-700 mb-2 px-2'>Today</Text>
        {/* List Item */}

      <FlatList 
        data={[
          {key: 'Grocery', value: '₹ 2000.00'},
          {key: 'Transport', value: '₹ 500.00'},
          {key: 'Food', value: '₹ 500.00'},
          {key: 'Entertainment', value: '₹ 500.00'},
          {key: 'Others', value: '₹ 500.00'},
          {key: 'tp', value: '₹ 500.00'},
          {key: 'tk', value: '₹ 500.00'},
          {key: 'ts', value: '₹ 500.00'},
          {key: 's', value: '₹ 500.00'},
          {key: 'sf', value: '₹ 500.00'},
        ]}
        scrollEnabled={true}
        
        renderItem={({item}) => 
          <View className='flex flex-row justify-between items-center p-3 rounded-2xl'>
            <View className='flex flex-row'>
              <View className='h-12 w-12 flex items-center mr-3 justify-center bg-rose-100 rounded-full'>
                <Ionicons name="fast-food-outline" size={24} color={"red"} />
              </View>
              <View>
                <Text className='text-lg font-poppins-medium text-gray-800'>{item.key}</Text>
                <Text className='text-sm font-poppins-regular'>Lunch</Text>
              </View>
            </View>
            <View>
              <Text className='text-md font-poppins-medium'>{item.value}</Text>
            </View>
          </View>
        }
      />
      </View>

      
    </Screen>
  )
}

export default DashboardScreen