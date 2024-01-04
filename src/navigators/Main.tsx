import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import profile from '@/screens/Example/profile';
import Weather from '@/screens/Example/Weather';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Weather" component={Weather} />
      <Tab.Screen name="profile" component={profile} />
      <Tab.Screen name="Home" component={Example} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
