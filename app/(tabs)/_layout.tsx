import TabBar from '@/components/tabbar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';

export default function TabLayout() {
    return (
        <SQLiteProvider databaseName="myexpenso.db" useSuspense>
            <Tabs
                screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}
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
        </SQLiteProvider>
    );
}
