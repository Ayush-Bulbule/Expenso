import { View, Text, Animated, TouchableOpacity } from 'react-native';
import React from 'react';
import { Transaction } from '@/types';
import CONSTANTS from '@/constants';
import { ArrowDown, ArrowUp, Trash2, Edit, Edit2 } from 'lucide-react-native';
import moment from 'moment';
import Swipeable from 'react-native-gesture-handler/Swipeable';

interface TransactionItemProps extends Transaction {
    onDelete?: (id: number) => void;
    onEdit?: (transaction: Transaction) => void;
}

const TransactionItem = ({ onDelete, onEdit, ...transaction }: TransactionItemProps) => {
    const swipeableRef = React.useRef<Swipeable>(null);
    const category = CONSTANTS.CATEGORIES.find((cat) => cat.name === transaction.category);
    const time = moment(transaction.timestamp).format('MMM DD, hh:mm A');

    const renderRightActions = (
        progress: Animated.AnimatedInterpolation<number>,
        dragX: Animated.AnimatedInterpolation<number>
    ) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        return (
            <View className="flex-row">
                {/* Edit Action */}
                <TouchableOpacity
                    className="w-16 h-full justify-center items-center"
                    onPress={() => {
                        swipeableRef.current?.close();
                        onEdit?.(transaction);
                    }}
                >
                    <Animated.View style={{ transform: [{ scale }] }}>
                        <View className="h-10 w-10 flex items-center justify-center rounded-full bg-amber-100">
                            <Edit2 size={16} color="#d97706" />
                        </View>
                    </Animated.View>
                </TouchableOpacity>

                {/* Delete Action */}
                <TouchableOpacity
                    className="w-16 h-full justify-center items-center"
                    onPress={() => {
                        swipeableRef.current?.close();
                        onDelete?.(transaction.id!);
                    }}
                >
                    <Animated.View style={{ transform: [{ scale }] }}>
                        <View className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100">
                            <Trash2 size={16} color="#ef4444" />
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    };

    const renderLeftActions = (
        progress: Animated.AnimatedInterpolation<number>,
        dragX: Animated.AnimatedInterpolation<number>
    ) => {
        const scale = dragX.interpolate({
            inputRange: [0, 80],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });

        return (
            <TouchableOpacity
                className="w-16 h-full justify-center items-center bg-green-500"
                onPress={() => {
                    swipeableRef.current?.close();
                    // Add your left swipe action here
                }}
            >
                <Animated.View style={{ transform: [{ scale }] }}>
                    {/* Add your left action icon here */}
                </Animated.View>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
            ref={swipeableRef}
            friction={2}
            rightThreshold={40}
            renderRightActions={renderRightActions}
            leftThreshold={0}
            overshootLeft={false}
            onSwipeableOpen={(direction) => {
                console.log(`Opened ${direction}`);
            }}
        >
            <View className="bg-white">
                <View className="flex flex-row justify-between items-center p-3 rounded-2xl">
                    <View className="flex flex-row">
                        <View
                            className="h-12 w-12 flex items-center mr-3 justify-center rounded-full"
                            style={{ backgroundColor: category?.backgroundColor }}
                        >
                            {category?.icon}
                        </View>
                        <View>
                            <Text className="text-lg font-poppins-medium text-gray-800">
                                {transaction.title}
                            </Text>
                            <Text className="text-sm font-poppins-regular">{time}</Text>
                        </View>
                    </View>
                    <View className="flex flex-row items-center">
                        <Text className="text-lg font-poppins-medium text-gray-800">
                            ₹{transaction.amount}
                        </Text>
                        <View
                            className={`h-5 w-5 flex items-center justify-center rounded-full ml-2 ${transaction.type === 'Income' ? 'bg-green-100' : 'bg-red-100'
                                }`}
                        >
                            {transaction.type === 'Income' ? (
                                <ArrowDown size={14} color="#10b981" />
                            ) : (
                                <ArrowUp size={14} color="#ef4444" />
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </Swipeable>
    );
};

export default TransactionItem;