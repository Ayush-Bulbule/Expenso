import { View, Text, Alert, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '@/components/screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import AddTansactionBSheet from '@/components/add-transaction.bsheet';
import useTransactionStore from '@/store/transaction.store';
import BalanceCard from '@/components/balance.card';
import TransactionItem from '@/components/transaction-item';
import moment from 'moment';
import { Transaction } from '@/types';

const HomeScreen = () => {

  const transactions = useTransactionStore((state) => state.transactions)
  const deleteTransaction = useTransactionStore((state) => state.deleteTransaction)


  const deleteItem = (id:number) => {
    // code here
    Alert.alert('Delete Transaction', 'Are you sure you want to delete this transaction?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'Delete',
        onPress: () => deleteTransaction(id.toString())
      }
    ])
  }

  const editItem = (transaction: Transaction) => {
    Alert.alert('Edit Transaction', 'Feature coming soon!');
  }



  return (
    <Screen className='relative'>
      <GestureHandlerRootView className='flex-1'>
        {/* Header */}
        <View className='p-4'>
          <Text className='text-xl text-center font-poppins-medium '>expenso</Text>
        </View>
        {/* Expense Card */}
        <BalanceCard />
        {/* List of Expenses - Daywise */}
        <View className='px-2 pt-8 flex-1'>
          <Text className='text-xl font-poppins-medium text-gray-700 mb-2'>Today</Text>

          <FlatList
            data={transactions}
            renderItem={({ item }) => (
              <TransactionItem onEdit={editItem} onDelete={()=>deleteItem(item.id as number)} {...item} />
            )}
            contentContainerStyle={{
              flexGrow: 1,  // Allows content to grow
            }}
            ListEmptyComponent={() => (
              <View className='flex-1 justify-center items-center'>
                <Text className='text-center text-gray-500'>No transactions yet</Text>
              </View>
            )}
            keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}  // Optional: hides scroll indicator
            className='flex-1'  // Ensures the list takes up available space
          />
        </View>
        {/* Bottom Sheet */}
        <AddTansactionBSheet />
      </GestureHandlerRootView>
    </Screen>
  )
}

export default HomeScreen