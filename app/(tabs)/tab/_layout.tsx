import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  ChatBubbleBottomCenterTextIcon,
  HomeIcon,
  InboxIcon,
  PlusIcon,
  UserIcon,
  UsersIcon,
} from 'react-native-heroicons/outline';

const TabIcon = ({ color, focused, name, icon: Icon }) => {
  return (
    <View className='justify-center items-center'>
      <Icon color={color} fill={focused ? color : ''} />
      <Text className='text-sm' style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};
const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopWidth: 3,
            borderTopColor: '#353434',
            // height: ,
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={HomeIcon}
                name={'Home'}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='friends'
          options={{
            title: 'Friends',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={UsersIcon}
                name={'Friends'}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='post'
          options={{
            title: 'Post',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className='justify-center  items-center'>
                <View className='px-2.5 py-1 rounded-lg bg-white border-r-4 border-l-4 border-[#00f2ea] border-r-[#ff0050] '>
                  <PlusIcon color={'#000000'}  />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='inbox'
          options={{
            title: 'Inbox',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={ChatBubbleBottomCenterTextIcon}
                name={'Inbox'}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={UserIcon}
                name={'Profile'}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor='#000000' style='light' translucent />
    </>
  );
};

export default TabLayout;
