import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginPage, RegisterPage} from '../Pages/Auth';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
