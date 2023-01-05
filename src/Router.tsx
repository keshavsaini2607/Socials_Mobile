import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Stacks/AuthStack';
import HomeStack from './Stacks/HomeStack';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {setUser} from './app/slices/authSlice';
import auth from '@react-native-firebase/auth';
import MainStack from './Stacks/MainStack';

const Router = () => {
  const {user} = useAppSelector(state => state.auth);
  let activeStack = user?.payload ? <MainStack /> : <AuthStack />;
  const [initializing, setInitializing] = useState(true);
  // const {user} = useAppSelector((state: any) => state.auth);
  const dispatch = useAppDispatch();

  // Handle user state changes
  function onAuthStateChanged(authUser: any) {
    dispatch(setUser(authUser));
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    let subscriber: any;
    (async () => {
      subscriber = await auth().onAuthStateChanged(onAuthStateChanged);
    })();
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
      <NavigationContainer>{activeStack}</NavigationContainer>
    </>
  );
};

export default Router;
