import TabBar from '@/components/tabbar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{ tabBarActiveTintColor: 'blue' }}
            tabBar={(props) => (
                <TabBar {...props} />
            )}

            >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="ai/index"
                options={{
                    title: 'AI',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="dashboard/index"
                options={{
                    title: 'Dashboard',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    title: 'Profile',
                    headerShown: false
                }}
            />

        </Tabs>
    );
}
