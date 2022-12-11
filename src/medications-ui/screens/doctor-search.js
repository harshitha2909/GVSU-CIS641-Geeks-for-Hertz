import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import Appointment from './appointment';

export default function DoctorSearch() {
    const [ doctors, setDoctors ] = useState([]);
    const [ error, setError ] = useState('');

    const navigation = useNavigation();

    function onSearch(values) {
        if (!values.doctorName && !values.specialization) {
            setError("At least one field is required");
            return;
        }

        setError(null);
        const url = values.doctorName ?
          'http://localhost:8080/doctor/name?val=' + values.doctorName :
          'http://localhost:8080/doctor/specialization?val=' + values.specialization;

        axios.get(url)
          .then((res) => {
              setDoctors(res.data);
          }, (err) => {
              Toast.show({
                  type: 'error',
                  text1: err.response.data.message,
              })
          })
    }

    function scheduleAppointment(doctor) {
        navigation.navigate('Appointment', {
            doctor: doctor
        })
    }

    return (<View>
    <Formik
      initialValues={{
          doctorName: '',
          specialization: '',
      }}
      validateOnMount={true}
      onSubmit={values => onSearch(values)}
    >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Form style={containerStyle}>
              <span style={textStyle}>Choose doctor</span>
              {error && <Text style={errorStyle}>{error}</Text>}
              <TextInput
                name="doctorName"
                style={inputStyle}
                placeholder="Search by name"
                value={values.doctorName}
                onBlur={() => setFieldTouched('doctorName')}
                onChangeText={handleChange('doctorName')}
              />

              <span style={textStyle}>Or</span>

              <TextInput
                name="specialization"
                style={inputStyle}
                placeholder="Search by specialization"
                value={values.specialization}
                onBlur={() => setFieldTouched('specialization')}
                onChangeText={handleChange('specialization')}
              />

              <Button title="Search" onPress={handleSubmit}></Button>
          </Form>
        )}
    </Formik>
          {
              doctors.length > 0 ?
                <>
                    <DataTable style={tableContainer}>
                        <DataTable.Header style={tableHeader}>
                            <DataTable.Title>Name</DataTable.Title>
                            <DataTable.Title>Specialization</DataTable.Title>
                            <DataTable.Title>Price</DataTable.Title>
                            <DataTable.Title>Action</DataTable.Title>
                        </DataTable.Header>
                        {
                            doctors.map((doctor, index) => {
                                return (
                                  <DataTable.Row onPress={() => scheduleAppointment(doctor)}>
                                      <DataTable.Cell>{doctor.name}</DataTable.Cell>
                                      <DataTable.Cell>{doctor.specialization}</DataTable.Cell>
                                      <DataTable.Cell>{doctor.price}</DataTable.Cell>
                                      <DataTable.Cell>
                                          <Button title='Schedule'></Button>
                                      </DataTable.Cell>
                                  </DataTable.Row>
                                )
                            })
                        }
                    </DataTable>
                </>
                :
                <>
                </>
          }
      </View>
    );
}

const tableContainer = {
    padding: 30,
}

const tableHeader = {
    backgroundColor: '#DCDCDC',
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
