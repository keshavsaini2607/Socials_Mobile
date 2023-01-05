import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  MentorConnect,
  NormalUserProfile,
  ReferralApplication,
} from '../Pages/Home';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeStack} />
      <Stack.Screen name="MentorConnect" component={MentorConnect} />
      <Stack.Screen name="NormalUserProfile" component={NormalUserProfile} />
      <Stack.Screen
        name="ReferralApplication"
        component={ReferralApplication}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
