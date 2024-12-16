// Add new transacaction
import React, { useState, useRef, useMemo, useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import transactionsRepo from '@/data/transactions.repository';
import { Transaction } from '@/types';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';

const AddTansactionBSheet = () => {

    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["75%"], []);
    const [bottomSheetModal, setBottomSheetModal] = useState(false);

    const [transaction, setTransaction] = useState<Transaction>({
        amount: 0,
        title: '',
        category: "Shopping",
        type: 'Expense',
        timestamp: Date.now()
    });

    const toggleBottomSheet = async () => {
        try {
            // Toggle bottom sheet
            bottomSheetRef.current?.expand();
            setBottomSheetModal(true);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    // save transaction
    const saveTransaction = async () => {
        console.log("Save Called!!")
        try {
            console.log("Transaction:", transaction);
            // Add transaction
            await transactionsRepo.addTransaction(transaction);

            bottomSheetRef.current?.close();
        } catch (err) {
            console.log("Error adding transaction:", err);
        }
    }

    // close
    const closeBottomSheet = () => {
        bottomSheetRef.current?.close();
    }

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    return (
        <>
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
                                <TextInput onChangeText={(e)=>setTransaction({...transaction, amount:parseInt(e)})} className=' text-gray-800 text-5xl font-poppins-bold h-24' placeholder='0.00' keyboardType='numeric' cursorColor={"black"} />
                            </View>
                            <View className='flex flex-row gap-2 items-center justify-center'>
                                <TextInput onChangeText={(e)=>setTransaction({...transaction, title:e})}  className='bg-gray-100 rounded-lg px-4 py-2 flex-grow-0 text-center w-36' placeholder='Add Comment' />
                            </View>
                        </View>
                    </View>

                    {/* Add Button */}
                    <View className='flex flex-row gap-2 justify-center py-4 mt-auto '>
                        <TouchableOpacity onPress={closeBottomSheet} className='flex-1 border border-black rounded-full px-8 py-3'>
                            <Text className='text-lg font-poppins-medium text-center'>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={saveTransaction} className='flex-1 bg-black rounded-full px-8 py-3'>
                            <Text className='text-lg font-poppins-medium text-white text-center'>Add</Text>
                        </TouchableOpacity>
                    </View>

                </BottomSheetView>
            </BottomSheet>
        </>
    )
}

export default AddTansactionBSheet

