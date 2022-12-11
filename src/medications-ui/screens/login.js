import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import PatientInfo from './patient-info';

export default function Login() {
    const navigation = useNavigation();

    function onLogin(values) {
        axios.post('http://localhost:8080/patient/signin', {
            email: values.email, password: values.password
        }).then((res => {
            sessionStorage.setItem('token', res.data.token);
            navigation.navigate(PatientInfo);
        }), (err) => {
            Toast.show({
                type: 'error', text1: err.response.data.message,
            })
        });
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email.")
          .required("Email must be provided."),
        password: Yup.string()
          .required("Password must be provided.")
          .min(4)
          .max(10, "Password must be minimum 6 and maximum 12 characters.")
    });

    return (<Formik
      initialValues={{
          email: '', password: '',
      }}
      validateOnMount={true}
      onSubmit={values => onLogin(values)}
      validationSchema = {loginSchema}
    >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Form style={containerStyle}>
              {touched.email && errors.email && <Text style={errorStyle}>{errors.email}</Text>}
              <TextInput
                style={inputStyle}
                name="email"
                placeholder="Email"
                value={values.email}
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
              />

              {touched.password && errors.password && <Text style={errorStyle}>{errors.password}</Text>}
              <TextInput
                style={inputStyle}
                name="password"
                type="password"
                placeholder="Password"
                secureTextEntry={true}
                value={values.password}
                onBlur={() => setFieldTouched('password')}
                onChangeText={handleChange('password')}
              />

              <Button title="Login" onPress={handleSubmit} disabled={!touched || !isValid}></Button>
          </Form>)}
    </Formik>)
}

const inputStyle = {
    marginBottom: '60px', marginTop: '8px', border: '1px solid gray', padding: '10px', borderRadius: '5px'
}

const errorStyle = {
    textAlign: 'left',
    fontSize: 12,
    color: '#FF0D10'
}

const containerStyle = {
    margin: '100px 30px', display: 'flex', flexDirection: 'column', textAlign: 'center'
}
