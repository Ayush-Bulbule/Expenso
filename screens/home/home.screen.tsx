import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import Screen from '@/components/screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HomeScreen = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["75%"], []);

  const [bottomSheetModal, setBottomSheetModal] = useState(false);
  const [bottomCancelSheetModal, setBottomCancelSheetModal] = useState(false);

  const toggleBottomSheet = () => {
    //toggle
    bottomSheetRef.current?.expand();
    setBottomSheetModal(true);
  };
  const bottomCancelSheetRef = useRef(null);


  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);



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
          <View className='flex flex-row justify-between items-center p-3 rounded-2xl '>
            <View className='flex flex-row'>
              <View className='h-12 w-12 flex items-center mr-3 justify-center bg-rose-100 rounded-full'>
                <Ionicons name="fast-food-outline" size={24} color={"red"} />
              </View>
              <View className=''>
                <Text className='text-lg font-poppins-medium text-gray-800'>Ashirwad Thali</Text>
                <Text className='text-sm font-poppins-regular'>Lunch</Text>
              </View>
            </View>
            <View>
              <Text className='text-md font-poppins-medium'>₹ 500.00</Text>
            </View>
          </View>
        </View>

        {/* Add Expense Button */}
        <TouchableOpacity onPress={toggleBottomSheet} className='h-16 w-16 bg-black rounded-2xl shadow-md absolute bottom-6 right-6 flex flex-row items-center justify-center'>
          <Feather name="plus" size={24} color={"white"} />
        </TouchableOpacity>


        {/* Bottom Sheet */}
        <BottomSheet
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          onClose={() => setBottomSheetModal(false)}
          backdropComponent={({ style }) =>
            bottomSheetModal && (
              <View style={[style, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]} />
            )
          }

        >



          <BottomSheetView className='bg-white p-4 flex-1'>
            <View className='flex items-center  py-2'>
              <View className="flex flex-row items-center justify-between gap-2">
                <TouchableOpacity className="flex-1 flex-row justify-between items-center bg-emerald-50 rounded-full px-4 py-3">
                  <FontAwesome5 name="money-bill-alt" size={20} color="#047857" />
                  <Text className="text-md font-poppins-medium text-emerald-800 ml-3">Cash</Text>
                  <Feather name="chevron-down" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 flex-row justify-between items-center bg-amber-50 rounded-full px-4 py-3">
                  <Feather name="shopping-bag" size={20} color="#92400e" />
                  <Text className="text-md font-poppins-medium text-amber-800 ml-3">Shopping</Text>
                  <Feather name="chevron-down" size={20} color="black" />
                </TouchableOpacity>
              </View>

              <View className='flex justify-center pt-4'>
                <Text className='text-md text-center font-poppins-medium text-gray-800 mt-4'>Expense</Text>
                <View className=' flex flex-row justify-center  items-center mt-6'>
                  <Text className='text-xl   text-center font-poppins-medium text-gray-800'>₹</Text>
                  <TextInput className=' text-gray-800 text-5xl font-poppins-bold h-24' placeholder='0.00' keyboardType='numeric' cursorColor={"black"} />
                </View>
                <View className='flex flex-row gap-2 items-center justify-center'>
                  <TextInput className='bg-gray-100 rounded-lg px-4 py-2 flex-grow-0 text-center w-36' placeholder='Add Comment' />
                </View>
              </View>
            </View>

            {/* Add Button */}
            <View className='flex flex-row gap-2 justify-center py-4 mt-auto '>
              <TouchableOpacity className='flex-1 border border-black rounded-full px-8 py-3'>
                <Text className='text-lg font-poppins-medium text-center'>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity className='flex-1 bg-black rounded-full px-8 py-3'>
                <Text className='text-lg font-poppins-medium text-white text-center'>Add</Text>
              </TouchableOpacity>
            </View>

          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </Screen>
  )
}

export default HomeScreen