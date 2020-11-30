import React from 'react';
import { Provider as ProviderPeper } from 'react-native-paper';
import Theme from './core/Theme';
import App from './index.js';

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



