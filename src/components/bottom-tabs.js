import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Appointment from '../screens/appointment';
import Home from '../screens/home';
import Profile from '../screens/profile';
import HelpIcon from './help-icon';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
      <Tab.Navigator screenOptions={() => ({
          tabBarIcon: () => {},
          headerRight: () =>
              (<TouchableOpacity>
                  <HelpIcon/>
              </TouchableOpacity>),
          tabBarLabelPosition: 'beside-icon'
      })}>
          <Tab.Screen name="Home" component={Home}  />
          <Tab.Screen name="Doctors Appointment" component={Appointment} />
          <Tab.Screen name="Payments" component={Appointment} />
          <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
}
