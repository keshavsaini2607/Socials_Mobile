import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ActivityPage,
  ConnectPage,
  DashboardPage,
  ProfilePage,
} from '../Pages/Home';

const Tabs = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tabs.Navigator initialRouteName="Dashboard">
      <Tabs.Screen name="Dashboard" component={DashboardPage} />
      <Tabs.Screen name="Connect" component={ConnectPage} />
      <Tabs.Screen name="Activity" component={ActivityPage} />
      <Tabs.Screen name="Profile" component={ProfilePage} />
    </Tabs.Navigator>
  );
};

export default HomeStack;
