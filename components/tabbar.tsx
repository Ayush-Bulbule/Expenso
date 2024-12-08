import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import IcHomeFilled from '@/assets/images/icons/ic-home-filled.svg'
import IcHomeOutline from '@/assets/images/icons/ic-home-outline.svg'
import IcAiOutline from '@/assets/images/icons/ic-ai-outline.svg'
import IcAiFilled from '@/assets/images/icons/ic-ai-filled.svg'
import IcDashboardOutline from '@/assets/images/icons/ic-dashboard-outline.svg'
import IcProfileOutline from '@/assets/images/icons/ic-profile-outline.svg'
import IcProfileFilled from '@/assets/images/icons/ic-profile-filled.svg'
import IcDashboardFilled from '@/assets/images/icons/ic-dashboard-filled.svg'
type IconKeys = 'home' | 'ai' | 'dashboard' | 'profile';

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {

    const icon = {
        "home/index": {
            filled: <IcHomeFilled width={24} height={24} />,
            outline: <IcHomeOutline width={24} height={24} />
        },
        "ai/index": {
            filled: <IcAiFilled width={24} height={24} />,
            outline: <IcAiOutline width={24} height={24} />
        },
        "dashboard/index": {
            filled: <IcDashboardFilled width={24} height={24} />,
            outline: <IcDashboardOutline width={24} height={24} />
        },
        "profile/index": {
            filled: <IcProfileFilled width={24} height={24} />,
            outline: <IcProfileOutline width={20} height={20} />
        }
    }
    return (
        <View className='flex flex-row'>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    const isFocused = state.index === index;

                    console.log("Name")
                    console.log(route)
                    const onPress = () => {
                       navigation.navigate(route.name);
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            className={`flex-1 bg-white flex items-center justify-center py-4`}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            {
                                isFocused ?
                                    icon[route.name].filled
                                    :
                                    icon[route.name].outline
                            }
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    )
}

export default TabBar