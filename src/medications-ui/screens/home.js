import { useNavigation } from '@react-navigation/native';
import { View, Button } from 'react-native';
import Consultation from './consultation';
import PatientInfo from './patient-info';

export default function Home() {
    const navigation = useNavigation();
    return (
      <View>
          <div style={containerStyle}>
              <span style={headerStyle}>Schedule an appointment?</span>
              <div style={separatorStyle}></div>
              <div style={buttons}>
                  <View style={[{ width: "45%" }]}>
                      <Button title="Yes" onPress={() => navigation.navigate('Consultation')}></Button>
                  </View>
                  <View style={[{ width: "45%" }]}>
                      <Button title="No" onPress={() => navigation.navigate('PatientInfo')}></Button>
                  </View>
              </div>
          </div>
      </View>
    );
}

const buttons = {
    display: 'flex',
    flexDirection: 'row',
    width: '300px',
    margin: 'auto',
    justifyContent: 'space-between'
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

const separatorStyle = {
    margin: '30px'
}
