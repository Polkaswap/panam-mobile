import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

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