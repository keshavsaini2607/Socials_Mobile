import {Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GoogleLoginButton = () => {
  return (
    <Pressable>
      <AntDesign name="google" color="black" size={40} />
    </Pressable>
  );
};

export default GoogleLoginButton;
