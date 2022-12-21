import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardPage} from '../Pages/Home';

const Tabs = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tabs.Navigator initialRouteName="Dashboard">
      <Tabs.Screen name="Dashboard" component={DashboardPage} />
    </Tabs.Navigator>
  );
};

export default HomeStack;
