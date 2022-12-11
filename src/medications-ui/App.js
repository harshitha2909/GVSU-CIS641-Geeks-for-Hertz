import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { Button, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import HelpIcon from './components/help-icon';
import AppStart from './screens/app-start';
import Appointment from './screens/appointment';
import Consultation from './screens/consultation';
import DoctorSearch from './screens/doctor-search';
import Help from './screens/help';
import Home from './screens/home';
import Login from './screens/login';
import MedicationSearch from './screens/medication-search';
import Medications from './screens/medications';
import OldAppointments from './screens/old-appointments';
import PatientInfo from './screens/patient-info';
import Payment from './screens/payment';
import Signup from './screens/signup';

const Stack = createStackNavigator();

axios.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization =  'Bearer ' + token;
    }
    return config;
});

export default function App() {

    return (
      <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="App Start">
              <Stack.Screen name="Help" component={Help}/>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Signup" component={Signup}/>
              <Stack.Screen name="App Start" component={AppStart}  options={{ headerShown: false }}/>
              <Stack.Screen name="PatientInfo" component={PatientInfo} options={{ title: 'Patient Info' }} />
              <Stack.Screen name="Consultation" component={Consultation} />
              <Stack.Screen name="DoctorSearch" component={DoctorSearch} options={{ title: 'Doctor Search' }}/>
              <Stack.Screen name="Appointment" component={Appointment} />
              <Stack.Screen name="MedicationSearch" component={MedicationSearch} options={{ title: 'Medication Search' }}/>
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="OldAppointments" component={OldAppointments} options={{ title: 'Old Appointments' }}/>
              <Stack.Screen name="Medications" component={Medications} options={{
                  headerRight: () =>
                    (<TouchableOpacity>
                        <HelpIcon/>
                    </TouchableOpacity>)
              }}/>
          </Stack.Navigator>
      </NavigationContainer>
      <Toast />
      </>
    );
}
