// Screen.tsx
import React, { ReactNode, useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


interface ScreenProps {
  children: ReactNode;
  className?: string;
  statusBarColor?: string;
  allowFullScreen?: boolean;
}

const Screen: React.FC<ScreenProps> = ({children, className, statusBarColor, allowFullScreen }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  return (
    <SafeAreaView className={"flex-1 "+(allowFullScreen ? 'pt-0' : 'pt-6') + " bg-white "+className }>
      <StatusBar style="dark" backgroundColor={statusBarColor} />
      {children}
    </SafeAreaView>
  );
};

export default Screen;