import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RestoPage from './src/screens/RestoPage';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search : SearchScreen,
  RestoPage : RestoPage

},{
  initialRouteName : 'Search',
  defaultNavigationOptions : {  
    title : 'Restaurant Search'
  }
}
);
export default createAppContainer(navigator);
