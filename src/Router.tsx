import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Stacks/AuthStack';
import HomeStack from './Stacks/HomeStack';
import {useAppSelector} from './app/hooks';

const Router = () => {
  const {user} = useAppSelector(state => state.auth);
  let activeStack = user ? <HomeStack /> : <AuthStack />;

  console.log({user});

  return (
    <>
      <NavigationContainer>{activeStack}</NavigationContainer>
    </>
  );
};

export default Router;
