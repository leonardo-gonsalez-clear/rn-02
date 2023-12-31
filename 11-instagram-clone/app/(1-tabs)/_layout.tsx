import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import Header from '../../components/Header/Header';
import { Octicons } from '@expo/vector-icons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          header: () => <Header />,

        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) =>
              <Octicons name='home' size={size} color={color} />

          }}
        />
        <Tabs.Screen
          name='Add'
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) =>
              <Octicons name='device-camera' size={size} color={color} />

          }}
        />
        <Tabs.Screen
          name='Profile'
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) =>
              <Octicons name='person' size={size} color={color} />

          }}
        />
      </Tabs>
    </>
  );
}
