import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ActivityPage,
  ConnectPage,
  DashboardPage,
  ProfilePage,
} from '../Pages/Home';

const Tabs = createBottomTabNavigator();
import IonIcons from 'react-native-vector-icons/Ionicons';

let screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#ccc',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabBarItemStyle: {
    margin: 5,
    borderRadius: 10,
  },
  tabBarLabelStyle: {display: 'none'},
};

const HomeStack = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Connect') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === 'Activity') {
            iconName = 'pause-outline';
          }

          // You can return any component that you like here!
          return <IonIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#3D8361',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#F6FBF4',
          height: 100,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarItemStyle: {
          margin: 5,
          borderRadius: 10,
        },
        // tabBarLabelStyle: {display: 'none'},
      })}>
      <Tabs.Screen name="Dashboard" component={DashboardPage} />
      <Tabs.Screen name="Connect" component={ConnectPage} />
      <Tabs.Screen name="Activity" component={ActivityPage} />
      <Tabs.Screen name="Profile" component={ProfilePage} />
    </Tabs.Navigator>
  );
};

export default HomeStack;
