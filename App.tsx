import React from 'react';
import Router from './src/Router';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const App = () => {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
