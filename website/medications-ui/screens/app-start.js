import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Button, View } from 'react-native';
import Login from './login';

import Signup from './signup';

export default function AppStart() {
    const navigation = useNavigation();

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            sessionStorage.removeItem('token');
        }
    });

    return (
      <View>
          <div style={containerStyle}>
              <span style={headerStyle}>Medications App</span>
              <div style={separatorStyle}></div>
              <Button title="Login" onPress={() => navigation.navigate(Login)}></Button>
              <div style={separatorStyle}></div>
              <Button title="Signup" onPress={() => navigation.navigate(Signup)}></Button>
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

const separatorStyle = {
    margin: '30px'
}

