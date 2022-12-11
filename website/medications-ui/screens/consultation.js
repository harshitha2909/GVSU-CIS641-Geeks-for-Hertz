import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
import DoctorSearch from './doctor-search';
import OldAppointments from './old-appointments';

export default function Consultation() {
    const navigation = useNavigation();
    return (
      <View>
          <div style={containerStyle}>
              <span style={headerStyle}>Consultation?</span>
              <div style={separatorStyle}></div>
              <div style={buttons}>
                  <View style={[{ width: "45%" }]}>
                      <Button title="New" onPress={() => navigation.navigate(DoctorSearch)}></Button>
                  </View>
                  <View style={[{ width: "45%" }]}>
                      <Button title="Old" onPress={() => navigation.navigate(OldAppointments)}></Button>
                  </View>
              </div>
          </div>
      </View>
    );
}

const containerStyle = {
    margin: '100px 30px',
}

const headerStyle = {
    textAlign: 'center',
    display: 'block',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bolder',
    color: 'rgb(33, 150, 243)'
}

const buttons = {
    display: 'flex',
    flexDirection: 'row',
    width: '300px',
    margin: 'auto',
    justifyContent: 'space-between'
}


const separatorStyle = {
    margin: '30px'
}
