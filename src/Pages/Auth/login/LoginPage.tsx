import {Text, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LoginPage = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigate('Register')}>
        <Text>Go to register</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginPage;
