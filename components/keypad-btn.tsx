import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'

interface KeyPadBtnInterface {
    value: string,
    onPress: (value: GestureResponderEvent) => void
}

const KeyPadBtn = ({value, onPress}:KeyPadBtnInterface) => {
    return (
        <TouchableOpacity onPress={onPress} className='bg-gray-100 rounded-3xl items-center justify-center  p-2 flex-1 h-20'>
            <Text>{value}</Text>
        </TouchableOpacity>
    )
}

export default KeyPadBtn