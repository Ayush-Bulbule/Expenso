import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import Screen from '@/components/screen'
import Feather from '@expo/vector-icons/Feather'
import transactionsRepository from '@/data/transactions.repository'

const ProfileScreen = () => {

  // Actions
  const deleteAlert = async () => {
    const confirm = Alert.alert("", "Are you sure you want to delete all transactions?", [
      {
        text: "Cancel",
        style: 'cancel',
        onPress: () => { }
      },
      {
        text: "Delete",
        style: 'destructive',
        onPress: () => deleteTransactions()
      }
    ]);
  }
  const deleteTransactions = async () => {

    try {
      await transactionsRepository.deleteAllTransactions();
      alert("All transactions deleted successfully");
    } catch (err) {
      console.error("Error deleting transactions:", err);
      alert("Error deleting transactions");
    }

  }


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

      <View className={`mt-4 mx-4`}>
        <Text className='text-md font-poppins-medium text-black-500'>Settings</Text>
        <View className=' bg-gray-50 rounded-xl mt-4 px-1'>
          <TouchableOpacity className='flex-row w-full  p-3'>
            <Feather name='edit' size={22} color='black' />
            <Text className='text-md font-poppins-medium text-black-500 ml-3'>Edit Profile</Text>
          </TouchableOpacity>
          <View className='border-b border-gray-200'></View>
          <TouchableOpacity className='flex-row w-full  p-3'>
            <Feather name='info' size={22} color='black' />
            <Text className='text-md font-poppins-medium text-black-500 ml-3'>App Info</Text>
          </TouchableOpacity>
          <View className='border-b border-gray-200'></View>
          <TouchableOpacity className='flex-row w-full p-3' onPress={deleteAlert}>
            <Feather name='trash' size={22} color='red' />
            <Text className='text-md font-poppins-medium text-black-500 ml-3'>Delete Data</Text>
          </TouchableOpacity>
          <View className='border-b border-gray-200'></View>
          <TouchableOpacity className='flex-row w-full  p-3'>
            <Feather name='lock' size={22} color='black' />
            <Text className='text-md font-poppins-medium text-black-500 ml-3'>Logout</Text>
          </TouchableOpacity>
        </View>

      </View>

    </Screen>
  )
}

export default ProfileScreen