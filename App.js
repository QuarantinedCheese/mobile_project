import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';

import Login from './screens/login.js';
import Overview from './screens/overview.js';
import AddGoal from './screens/addGoal.js';
import RemoveGoal from './screens/removeGoal.js';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Login: Login,
    Home: Overview,
    Add: AddGoal,
    Remove: RemoveGoal
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
);
}