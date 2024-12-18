import { View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '@/components/screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AddTansactionBSheet from '@/components/add-transaction.bsheet';
import useTransactionStore from '@/store/transaction.store';
import BalanceCard from '@/components/balance.card';

const HomeScreen = () => {

  const transactions = useTransactionStore((state) => state.transactions)

  return (
    <Screen className='relative'>
      <GestureHandlerRootView className='flex-1'>
        {/* Header */}
        <View className='p-4'>
          <Text className='text-xl text-center font-poppins-medium '>expenso</Text>
        </View>
            {/* Expense Card */}
            <BalanceCard/>
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