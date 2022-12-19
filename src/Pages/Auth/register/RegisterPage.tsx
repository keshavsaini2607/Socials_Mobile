import {Text, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const RegisterPage = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigate('Login')}>
        <Text>Go to login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default RegisterPage;
