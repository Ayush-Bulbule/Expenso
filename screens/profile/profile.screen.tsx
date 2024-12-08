import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Screen from '@/components/screen'

const ProfileScreen = () => {
  return (
    <Screen className="relative ">
      {/* Header */}
      <Text className="text-xl text-center font-poppins-medium py-4">expenso</Text>

      {/* Profile Picture */}
      <View className="h-48 w-48 bg-blue-200 rounded-full mx-auto my-4 overflow-hidden">
        {/* Replace with Image */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="h-full w-full"
          resizeMode="cover"
        />
      </View>

      {/* Profile Details */}
      <View className="px-6 py-4 rounded-lg mx-4">
        <Text className="text-xl font-poppins-semibold text-gray-800 text-center">
          John Doe
        </Text>
        <Text className="text-sm font-poppins-regular text-gray-600 text-center">
          Software Developer
        </Text>
      </View>

      {/* Contact Info */}
      <View className="px-6 py-4 mt-4 bg-white rounded-lg mx-4">
        {/* Contact */}
        <View className="flex-row items-center mb-4">
          <Text className="text-lg font-poppins-semibold flex-1">Contact</Text>
          <Text className="text-sm font-poppins-regular text-gray-600 flex-2">
            +91 9876543210
          </Text>
        </View>

        {/* Email */}
        <View className="flex-row items-center">
          <Text className="text-lg font-poppins-semibold flex-1">Email</Text>
          <Text className="text-sm font-poppins-regular text-gray-600 flex-2">
            johndoe@gmail.com
          </Text>
        </View>
      </View>

      {/* Actions */}
      
    </Screen>
  )
}

export default ProfileScreen