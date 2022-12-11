import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import Home from './home';

export default function PatientInfo() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [phone, setPhone] = useState('');

    const navigation = useNavigation();

    function onEdit(values) {
        axios.post('http://localhost:8080/patient/update', {
            name: values.name,
            phone: values.phone,
            bloodGroup: values.bloodGroup,
            sex: gender
        }).then((res => {
            Toast.show({
                type: 'success',
                text1: 'Updated the patient info',
            })
            navigation.navigate(Home);
        }), (err) => {
            Toast.show({
                type: 'error',
                text1: err.response.data.message,
            })
        });
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
              <div style={{margin: '16px', display: 'block'}}>
                <Button onPress={() => navigation.navigate(Home)} title="Skip" />
              </div>
            ),
        });

        axios.get('http://localhost:8080/patient')
          .then((res) => {
              setName(res.data.name);
              setAddress(res.data.address);
              setGender(res.data.sex);
              setBloodGroup(res.data.bloodGroup);
              setPhone(res.data.phone);
          }, (err) => {
              Toast.show({
                  type: 'error',
                  text1: err.response.data.message,
              })
          })
    }, [navigation]);

    const patientInfoSchema = Yup.object().shape({
        name: Yup.string()
          .required('Name must be provided'),
        phone: Yup.string()
          .matches(/^\d+$/, "Must be only digits")
          .min(10, "Phone must be 10 digits")
          .max(10, "Phone must be 10 digits"),
        bloodGroup: Yup.string()
          .matches(/^(A|B|AB|O)[+-]$/, "Enter a valid blood group")
    });

    return (<Formik
      initialValues={{
          name: name,
          phone: phone || '',
          bloodGroup: bloodGroup || '',
          sex: gender || 'male',
          address: address || ''
      }}
      enableReinitialize={true}
      validateOnMount={true}
      onSubmit={values => onEdit(values)}
      validationSchema = {patientInfoSchema}
    >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Form style={containerStyle}>
              {touched.name && errors.name && <Text style={errorStyle}>{errors.name}</Text>}
              <TextInput
                name="name"
                style={inputStyle}
                placeholder="Name"
                value={values.name}
                onBlur={() => setFieldTouched('name')}
                onChangeText={handleChange('name')}
              />

              <div style={genderContainerStyle}>
                  <Text style={genderLabelStyle}>Sex</Text>
                  <RadioForm
                    radio_props={[
                        {label: 'Male  ', value: 'male' },
                        {label: 'Female  ', value: 'female' }
                    ]}
                    formHorizontal={true}
                    labelHorizontal={true}
                    initial={0}
                    onPress={handleChange('sex')}
                  />
              </div>


              {touched.bloodGroup && errors.bloodGroup && <Text style={errorStyle}>{errors.bloodGroup}</Text>}
              <TextInput
                name="bloodGroup"
                style={inputStyle}
                placeholder="Blood Group"
                value={values.bloodGroup}
                onBlur={() => setFieldTouched('bloodGroup')}
                onChangeText={handleChange('bloodGroup')}
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

              {touched.address && errors.address && <Text style={errorStyle}>{errors.address}</Text>}
              <TextInput
                name="address"
                style={inputStyle}
                placeholder="Address"
                value={values.address}
                onBlur={() => setFieldTouched('address')}
                onChangeText={handleChange('address')}
              />

              <Button type="submit" title="Update" onPress={handleSubmit} disabled={!touched || !isValid}></Button>
          </Form>)}
    </Formik>
    );
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
    margin: '100px 30px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}

const genderLabelStyle = {
    textAlign: 'left',
    width: '50px',
    lineHeight: '30px',
    display: 'block',
    margin: '10px 0px',
    marginBottom: '10px'
}

const genderContainerStyle = {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'row'
}
