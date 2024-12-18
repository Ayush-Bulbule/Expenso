// We can use this later in the project to create a numeric keypad for the user to input the amount they want to pay.
import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Calendar, Check, Delete } from 'lucide-react-native'

const NumericKeyPad = () => {
    const data = [
        [{ id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },],
        [{ id: 5, value: 4 },
        { id: 6, value: 5 },
        { id: 7, value: 6 },],
        [{ id: 9, value: 7 },
        { id: 10, value: 8 },
        { id: 11, value: 9 },],
        [{ id: 13, value: '₹' },
        { id: 14, value: 0 },
        { id: 15, value: '.' },
        ]
    ]

    return (
        <View className='flex-row'>
            <View className='flex flex-wrap gap-2 flex-1 mr-2'>
                {data.map((keys, i) => (
                    <View key={i} className='flex flex-row gap-2'>
                        {keys.map((key, ind) => (
                            <TouchableOpacity key={ind} className='bg-gray-100 rounded-3xl items-center justify-center  p-2 flex-1 h-20'>
                                <Text className='text-3xl font-poppins-medium'>{key.value}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
            <View className='flex gap-2'>
                <TouchableOpacity className='bg-red-100 rounded-3xl items-center justify-center  p-2 h-20 w-20'>
                   <Delete size={24} color={'black'}/>
                </TouchableOpacity>
                <TouchableOpacity className='bg-emerald-100 rounded-3xl items-center justify-center  p-2 h-20 w-20'>
                    <Calendar size={24} color={'black'}/>
                </TouchableOpacity>
                <TouchableOpacity className='bg-black rounded-3xl items-center justify-center  p-2 h-44 w-20'>
                    <Check size={24} color={'white'}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default NumericKeyPad

