import { View, Text, FlatList, FlatListComponent, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import Screen from '@/components/screen'
import Ionicons from '@expo/vector-icons/Ionicons'
import ExpenseCategoryItem from '@/components/expense-category-item'
import transactionsRepository from '@/data/transactions.repository'
import { BarChart } from 'react-native-chart-kit';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler'
import ExpenseBarGraph from '@/components/expense-bargraph'

const DashboardScreen = () => {
  const [categoryData, setCategoryData] = React.useState<any>([]);
  const [totalExpense, setTotalExpense] = React.useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      //fetch her
      const categoryData = await transactionsRepository.getExpnesesByCategory();
      const totalExpense = await transactionsRepository.getTotalExpense();
      const weeklyData = await transactionsRepository.getExpenseByDay();
      setTotalExpense(totalExpense[0].totalExpenses);
      console.log(categoryData);
      setCategoryData(categoryData);
    }

    fetchData()
  }, []);
  return (
    <Screen className='flex-1'>
      <ScrollView>
      <Text className='text-xl text-center font-poppins-medium py-4'>expenso</ Text>
      {/* Dev Banner */}
      <View className='bg-amber-400 p-2'>
        <Text className='text-center text-white'>This screen is under development!</Text>
      </View>
      {/* bar graph of daily spendings */}
      <ExpenseBarGraph />

      {/* Spending Group - Day, Week, Month */}
      <View className='px-2 pt-8 flex flex-row gap-2'>
        <View className='flex-1 bg-blue-50 px-2 py-6 rounded-3xl'>
          <Text className='text-xs  font-poppins-regular text-center'>Today</Text>
          <Text className='text-md text-center font-poppins-medium'>₹ {totalExpense}</Text>
        </View>
        <View className='flex-1 bg-blue-50 px-2 py-6 rounded-3xl'>
          <Text className='text-xs  font-poppins-regular text-center'>Week</Text>
          <Text className='text-md text-center font-poppins-medium'>₹ {totalExpense}</Text>
        </View>
        <View className='flex-1 bg-blue-50 px-2 py-6 rounded-3xl'>
          <Text className='text-xs  font-poppins-regular text-center'>Month</Text>
          <Text className='text-md text-center font-poppins-medium'>₹ {totalExpense}</Text>
        </View>
      </View>


      {/* List of categories */}
      <View className='p-2 mt-6 flex-1'>
        <Text className='text-xl font-poppins-medium text-gray-700 mb-2 px-2'>Summary</Text>
        <FlatList
          className="flex-1" // Add this
          data={categoryData}
          renderItem={({ item }) => (
            <ExpenseCategoryItem category={item.category} count={item.count} amount={item.amount} totalExpense={totalExpense} />
          )}
          keyExtractor={(item) => item.category}
          contentContainerStyle={{
            padding: 2 // Move padding here if needed
          }}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View className="h-2" />}
        />
      </View>
      </ScrollView>
    </Screen>
  )
}

export default DashboardScreen