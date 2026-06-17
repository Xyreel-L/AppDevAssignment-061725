import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import React from 'react';

const ACTIVE_COLOR = '#5C1A3A';
const INACTIVE_COLOR = '#B04878';
const TAB_BG = '#FFFFFF';

interface TabIconProps {
  icon: string;
}

const TabIcon: React.FC<TabIconProps> = ({ icon }) => (
  <Text style={{ fontSize: 18 }}>{icon}</Text>
);

export default function TabLayout(): React.JSX.Element {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: {
          backgroundColor: TAB_BG,
          borderTopColor: '#E8AECA',
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 2,
        },
        headerStyle: {
          backgroundColor: ACTIVE_COLOR,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
          letterSpacing: 0.5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabIcon icon="🏠" />,
          headerTitle: 'Profile',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <TabIcon icon="🔍" />,
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: 'Skills',
          tabBarIcon: ({ color }) => <TabIcon icon="💡" />,
          headerTitle: 'Skills & Certifications',
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <TabIcon icon="🚀" />,
          headerTitle: 'Featured Projects',
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <TabIcon icon="✉️" />,
          headerTitle: 'Contact',
        }}
      />
    </Tabs>
  );
}