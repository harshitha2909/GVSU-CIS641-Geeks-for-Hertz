import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, Text, TextInput } from 'react-native';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import PatientInfo from './patient-info';

export default function Signup() {
    const navigation = useNavigation();

    const signupSchema = Yup.object().shape({
        name: Yup.string()
          .required('Name must be provided'),
        email: Yup.string()
          .email("Invalid email.")
          .required("Email must be provided"),
        password: Yup.string()
          .required("Password must be provided")
          .min(6, "Password must be minimum 6 characters")
          .max(12, "Password must be maximum 12 characters"),
        passwordConfirmation: Yup.string()
          .required("Password must be provided")
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        phone: Yup.string()
          .matches(/^\d+$/, "Must be only digits")
          .min(10, "Phone must be 10 digits")
          .max(10, "Phone must be 10 digits")
    });

    function onSignUp(values) {
        axios.post('http://localhost:8080/patient/signup', {
            name: values.name,
            email: values.email,
            password: values.password,
            phone: values.phone
        }).then((res => {
            sessionStorage.setItem('token', res.data.token);
            navigation.navigate(PatientInfo);
        }), (err) => {
            Toast.show({
                type: 'error',
                text1: err.response.data.message,
            })
        });
    }

    return (<Formik
      initialValues={{
          name: '',
          email: '',
          password: '',
          phone: ''
      }}
      validateOnMount={true}
      onSubmit={values => onSignUp(values)}
      validationSchema = {signupSchema}
    >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <div style={containerStyle}>
              {touched.name && errors.name && <Text style={errorStyle}>{errors.name}</Text>}
              <TextInput
                name="name"
                style={inputStyle}
                placeholder="Name"
                value={values.name}
                onBlur={() => setFieldTouched('name')}
                onChangeText={handleChange('name')}
              />

              {touched.email && errors.email && <Text style={errorStyle}>{errors.email}</Text>}
              <TextInput
                name="email"
                style={inputStyle}
                placeholder="Email"
                value={values.email}
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
              />

              {touched.phone && errors.phone && <Text style={errorStyle}>{errors.phone}</Text>}
              <TextInput
                name="phone"
                style={inputStyle}
                placeholder="Phone"
                value={values.phone}
                onBlur={() => setFieldTouched('phone')}
                onChangeText={handleChange('phone')}
              />

              {touched.password && errors.password && <Text style={errorStyle}>{errors.password}</Text>}
              <TextInput
                name="password"
                style={inputStyle}
                type="password"
                placeholder="Password"
                secureTextEntry={true}
                value={values.password}
                onBlur={() => setFieldTouched('password')}
                onChangeText={handleChange('password')}
              />

              {touched.passwordConfirmation && errors.passwordConfirmation && <Text style={errorStyle}>{errors.passwordConfirmation}</Text>}
              <TextInput
                style={inputStyle}
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={values.confirmPassword}
                onBlur={() => setFieldTouched('passwordConfirmation')}
                onChangeText={handleChange('passwordConfirmation')}
              />

              <Button type="submit" title="Signup" onPress={handleSubmit} disabled={!touched || !isValid}></Button>
          </div>
          )}
      </Formik>
    );
}

const containerStyle = {
    margin: '100px 30px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}

const inputStyle = {
    marginBottom: '60px', marginTop: '8px', border: '1px solid gray', padding: '10px', borderRadius: '5px'
}

const errorStyle = {
    textAlign: 'left',
    fontSize: 12,
    color: '#FF0D10'
}
