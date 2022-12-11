import { useNavigation } from '@react-navigation/native';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import Payment from './payment';

export default function Appointment({ route }) {
    const navigation = useNavigation();

    const { doctor } = route.params;

    function schedule(values) {
        navigation.navigate('Payment', {
            doctorId: doctor.id,
            appointmentDate: `${values.date} ${values.time}`
        })
    }

    const appointmentSchema = Yup.object().shape({
        date: Yup.string()
          .required("Date is required.")
          .matches(/\d{1,2}-\d{1,2}-\d{4}/, "Date should be in DD-MM-YYYY format"),
        time: Yup.string()
          .required("Time is required")
          .matches(/\d{1,2}:\d{1,2}:\d{2}/, "Time must be in HH:MM:SS format")
    });

    return (<Formik
      initialValues={{
          date: '',
          time: '',
      }}
      validateOnMount={true}
      onSubmit={values => schedule(values)}
      validationSchema = {appointmentSchema}
    >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Form>
          <h3 style={headerStyle}>Schedule appointment with { doctor.name[0].toUpperCase() + doctor.name.substring(1) }</h3>
          <div style={containerStyle}>
              <div style={labelStyle}>Appointment date:</div>
              {touched.date && errors.date && <Text style={errorStyle}>{errors.date}</Text>}
              <TextInput
                name="date"
                style={inputStyle}
                placeholder="DD-MM-YYYY"
                value={values.date}
                onBlur={() => setFieldTouched('date')}
                onChangeText={handleChange('date')}
              />

              <div style={labelStyle}>Appointment time:</div>
              {touched.time && errors.time && <Text style={errorStyle}>{errors.time}</Text>}
              <TextInput
                name="time"
                style={inputStyle}
                placeholder="HH:MM:SS"
                value={values.time}
                onBlur={() => setFieldTouched('time')}
                onChangeText={handleChange('time')}
              />

              <Button title="Schedule" disabled={!touched || !isValid} onPress={handleSubmit}></Button>
          </div>
          </Form>
          )}
    </Formik>
    );
}

const headerStyle = {
    padding: '20px'
}

const errorStyle = {
    textAlign: 'left',
    fontSize: 12,
    color: '#FF0D10',
    marginBottom: '8px'
}

const labelStyle = {
    textAlign: 'left',
    fontWeight: 'bolder',
    marginBottom: '8px'
}

const inputStyle = {
    marginBottom: '60px',
    border: '1px solid gray',
    padding: '10px',
    borderRadius: '5px'
}

const containerStyle = {
    margin: '30px 30px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}
