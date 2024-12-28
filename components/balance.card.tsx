import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react-native'
import transactionsRepository from '@/data/transactions.repository';
import useTransactionStore from '@/store/transaction.store';
import moment from 'moment';

const BalanceCard = () => {
    const [balance, setBalance] =useState(0);
    const transactions = useTransactionStore((state) => state.transactions);
    
    const isPositive = balance >= 0;

    useEffect(() => {
        const fetchBalance = async () => {
            const balance = await transactionsRepository.fetchBalance();
            setBalance(balance);
        }
        fetchBalance();
        console.log('Balance:', balance);
    }, [transactions]);

    return (
        <View className='bg-white shadow-lg rounded-2xl mx-4 my-2 p-6 py-4'>
            <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center'>
                    {isPositive ? (
                        <TrendingUp color="#10B981" size={24} />
                    ) : (
                        <TrendingDown color="#EF4444" size={24} />
                    )}
                    <Text className='ml-2 text-lg font-poppins-medium text-gray-600'>
                        Total Balance
                    </Text>
                </View>
                <Text className='text-sm font-poppins-regular text-gray-500 my-2'>
                    {moment().format('MMM DD, YYYY')}
                </Text>
            </View>
            
            <View className='mt-4'>
                <Text 
                    className={`text-4xl font-poppins-bold ${
                        isPositive 
                            ? 'text-green-600' 
                            : 'text-red-500'
                    }`}
                >
                    ₹ {Math.abs(balance).toLocaleString('en-IN', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                    })}
                </Text>
                <View className='flex-row mt-2'>
                    <Text className={`text-sm font-poppins-medium ${
                        isPositive 
                            ? 'text-green-500' 
                            : 'text-red-400'
                    }`}>
                        {isPositive ? 'Positive' : 'Negative'} Balance
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default BalanceCard