import { View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '@/components/screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Transaction } from '@/types';
import transactionsRepository from '@/data/transactions.repository';
import AddTansactionBSheet from '@/components/add-transaction.bsheet';

const HomeScreen = () => {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Fetch Transactions 
  const fetchTransactions = async () => {
    try {
      const transactions = await transactionsRepository.getAllTransactions();
      setTransactions(transactions);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  }
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <Screen className='relative'>
      <GestureHandlerRootView className='flex-1'>
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
          {transactions.map((transaction, index) => (
            <View key={transaction.id?.toString()} className='flex flex-row justify-between items-center p-3 rounded-2xl '>
              <View className='flex flex-row'>
                <View className='h-12 w-12 flex items-center mr-3 justify-center bg-rose-100 rounded-full'>
                  <Ionicons name="fast-food-outline" size={24} color={"red"} />
                </View>
                <View className=''>
                  <Text className='text-lg font-poppins-medium text-gray-800'>{transaction.title}</Text>
                  <Text className='text-sm font-poppins-regular'>{transaction.category}</Text>
                </View>
              </View>
              <View>
                <Text className='text-md font-poppins-medium'>₹ {transaction.amount}</Text>
              </View>
            </View>
          ))}
        </View>
        {/* Bottom Sheet */}
        <AddTansactionBSheet />
      </GestureHandlerRootView>
    </Screen>
  )
}

export default HomeScreen