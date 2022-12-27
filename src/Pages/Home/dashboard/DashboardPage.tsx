import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'native-base';
import auth from '@react-native-firebase/auth';
import {useAppSelector} from '../../../app/hooks';

const DashboardPage = () => {
  const {user} = useAppSelector(state => state.auth);
  console.log('home user', user);
  const logoutUser = async () => {
    await auth().signOut();
  };
  return (
    <View>
      <Text>DashboardPage</Text>
      <Button onPress={logoutUser}>Logout</Button>
    </View>
  );
};

export default DashboardPage;
