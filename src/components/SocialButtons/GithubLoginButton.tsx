import {Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GithubLoginButton = () => {
  return (
    <Pressable>
      <AntDesign name="github" color="black" size={40} />
    </Pressable>
  );
};

export default GithubLoginButton;
