import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Stacks/AuthStack';

const Router = () => {
  // const {user} = useAppSelector(state => state.auth);
  // let activeStack = user ? <HomeStack /> : <AuthStack />;

  // console.log({user});

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Router;
