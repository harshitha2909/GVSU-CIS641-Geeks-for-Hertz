import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { DataTable } from 'react-native-paper';
import Toast from 'react-native-toast-message';

export default function OldAppointments() {
    const [appointments, setAppointments] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        axios.get('http://localhost:8080/appointment')
          .then((res) => {
              setAppointments(res.data)
          }, (err) => {
              Toast.show({
                  type: 'error',
                  text1: err.response.data.message,
              })
          })
    }, [navigation]);

    return (
      <View>
          {
              appointments.length > 0 ?
                <>
                    <DataTable style={tableContainer}>
                        <DataTable.Header style={tableHeader}>
                            <DataTable.Title>Doctor</DataTable.Title>
                            <DataTable.Title>Doctor Specialization</DataTable.Title>
                            <DataTable.Title>Price</DataTable.Title>
                            <DataTable.Title>Date</DataTable.Title>
                        </DataTable.Header>
                        {
                            appointments.map((appointment, index) => {
                                return (
                                  <DataTable.Row>
                                      <DataTable.Cell>{appointment.doctor.name}</DataTable.Cell>
                                      <DataTable.Cell>{appointment.doctor.specialization}</DataTable.Cell>
                                      <DataTable.Cell>{appointment.doctor.price}</DataTable.Cell>
                                      <DataTable.Cell>{appointment.date}</DataTable.Cell>
                                  </DataTable.Row>
                                )
                            })
                        }
                    </DataTable>
                </>
                :
                <>
                    <div style={{margin: 'auto', marginTop: '50px', fontSize: '22px'}}>No appointments at the moment</div>
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
