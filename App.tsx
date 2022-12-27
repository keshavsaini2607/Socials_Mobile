import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Router from './src/Router';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
// import {useAppDispatch} from './src/app/hooks';
// import {setUser} from './src/app/slices/authSlice';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  // const {user} = useAppSelector((state: any) => state.auth);
  // const dispatch = useAppDispatch();

  // Handle user state changes
  function onAuthStateChanged(authUser: any) {
    // dispatch(setUser(authUser));
    console.log(authUser);
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
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
