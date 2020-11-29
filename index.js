import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    WelcomeScreen,
    LoginScreen
} from './screens';

const Router = createStackNavigator(
    {
        WelcomeScreen,
        LoginScreen
    },
    {
        initialRouteName: 'WelcomeScreen',
        headerMode: 'none',
    }
);

const App = createAppContainer(Router);

export default App;