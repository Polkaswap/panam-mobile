import React from 'react';
import { configureFonts, DefaultTheme, Provider as ProviderPeper } from 'react-native-paper';

import App from './index.js';

const fontConfig = {
  regular: {
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  light: {
    fontFamily: 'Roboto',
    fontWeight: '300',
  },
  thin: {
    fontFamily: 'Roboto',
    fontWeight: '100',
  },
}

const theme = {
  dark: true,
  roundness: 4,
  colors: {
    primary: '#ffb820',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: DefaultTheme.colors.surface,
    error: '#B00020',
    text: DefaultTheme.colors.text,
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: DefaultTheme.colors.disabled,
    placeholder: DefaultTheme.colors.placeholder,
    backdrop: DefaultTheme.colors.backdrop,
    notification: DefaultTheme.colors.notification,
  },
  animation: { scale: 1.0 },
  fonts: configureFonts(fontConfig),
};

//const { store, persistor } = configureStore();

export default function Main() {
  return (
    //<Provider /*store={store}*/>
      //<PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <ProviderPeper theme={theme}>
          <App />
        </ProviderPeper>
      //</PersistGate>
    //</Provider>
  );
}



