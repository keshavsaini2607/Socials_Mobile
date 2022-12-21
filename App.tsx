import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Router from './src/Router';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(authUser: any) {
    setUser(authUser);
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
    <NativeBaseProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
