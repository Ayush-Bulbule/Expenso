import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react-native'
import transactionsRepository from '@/data/transactions.repository';

const BalanceCard = () => {
    const [balance, setBalance] = React.useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const bal = await transactionsRepository.fetchBalance();
                setBalance(bal);
            } catch (error) {
                console.error('Failed to fetch transactions:', error);
            }
        }
        fetchBalance();
    }, []);

    const isPositive = balance >= 0;

    return (
        <View className='bg-white shadow-lg rounded-2xl mx-4 my-2 p-6'>
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
                <Text className='text-sm font-poppins-regular text-gray-500'>
                    {new Date().toLocaleDateString()}
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