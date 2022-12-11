import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import Medications from './medications';

export default function MedicationSearch() {
    const [ error, setError ] = useState('');
    const navigation = useNavigation();

    function onSearch(values) {
        if (!values.symptoms && !values.diseases) {
            setError("At least one field is required");
            return;
        }

        setError(null);
        const url = values.symptoms ?
          'http://localhost:8080/search/symptom?symptoms=' + values.symptoms :
          'http://localhost:8080/search/disease?diseases=' + values.diseases;

        axios.get(url)
          .then((res) => {
              navigation.navigate('Medications', {
                  medicines: res.data
              });
          }, (err) => {
              Toast.show({
                  type: 'error',
                  text1: err.response.data.message,
              })
          })
    }

    return (
      <Formik
        initialValues={{
            symptoms: '',
            diseases: '',
        }}
        validateOnMount={true}
        onSubmit={values => onSearch(values)}
      >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <Form style={containerStyle}>
              <span style={textStyle}>Search for primary medications</span>
                {error && <Text style={errorStyle}>{error}</Text>}
              <TextInput
                style={inputStyle}
                placeholder="Enter symptoms"
                value={values.symptoms}
                onBlur={() => setFieldTouched('symptoms')}
                onChangeText={handleChange('symptoms')}
              />

              <span style={textStyle}>Or</span>

              <TextInput
                style={inputStyle}
                placeholder="Enter disease name"
                value={values.diseases}
                onBlur={() => setFieldTouched('diseases')}
                onChangeText={handleChange('diseases')}
              />

              <Button title="Search" onPress={handleSubmit}></Button>
          </Form>
          )}
      </Formik>
    );
}

const inputStyle = {
    margin: '30px',
    border: '1px solid gray',
    padding: '10px',
    borderRadius: '5px'
}

const containerStyle = {
    margin: '100px 30px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}

const textStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: '20px'
}

const errorStyle = {
    textAlign: 'left',
    fontSize: 12,
    color: '#FF0D10'
}
