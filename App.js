import React from 'react';
import { Provider as ProviderPeper } from 'react-native-paper';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Theme from './src/core/Theme';
import App from './src';

//const { store, persistor } = configureStore();

export default function Main() {
  return (
    //<Provider /*store={store}*/>
      //<PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <ProviderPeper theme={Theme}>
          <App />
        </ProviderPeper>
      //</PersistGate>
    //</Provider>
  );
}



