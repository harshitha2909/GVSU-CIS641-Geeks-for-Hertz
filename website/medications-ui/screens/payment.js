import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { Button, Text, TextInput } from 'react-native';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import MedicationSearch from './medication-search';

export default function Payment({ route }) {

    const { doctorId, appointmentDate } = route.params;
    const navigation = useNavigation();

    const paymentSchema = Yup.object().shape({
        cardName: Yup.string()
          .required("Name on card must be provided."),
        cardNumber: Yup.string()
          .required("Credit card number is required")
          .matches(/^(?:4\d{12}(?:\d{3})?|[25][1-7]\d{14}|6(?:011|5\d\d)\d{12}|3[47]\d{13}|3(?:0[0-5]|[68]\d)\d{11}|(?:2131|1800|35\d{3})\d{11})$/, "Credit card number is invalid"),
        cvv: Yup.string()
          .required("CVV is required")
          .matches(/\d{3}/, "CVV is should be 3 digit number"),
        expiry: Yup.string()
          .required("Expiry date is required")
          .matches(/\d{4}/, "Expiry date should in MMYY format")
    });

    function pay(values) {
        axios.post('http://localhost:8080/appointment', {
            doctorId: doctorId,
            appointmentDate: appointmentDate
        }).then((res) => {
            Toast.show({
                type: 'success',
                text1: 'Created appointment',
            })
            navigation.navigate(MedicationSearch);
        }, (err) => {
            Toast.show({
                type: 'error',
                text1: err.response.data.message,
            })
        });
    }

    return (<Formik
      initialValues={{
          email: '', password: '',
      }}
      validateOnMount={true}
      onSubmit={values => pay(values)}
      validationSchema = {paymentSchema}
    >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Form style={containerStyle}>
              {touched.cardName && errors.cardName && <Text style={errorStyle}>{errors.cardName}</Text>}
              <TextInput
                name="cardName"
                style={inputStyle}
                placeholder="Name on card"
                value={values.cardName}
                onBlur={() => setFieldTouched('cardName')}
                onChangeText={handleChange('cardName')}
              />

              {touched.cardNumber && errors.cardNumber && <Text style={errorStyle}>{errors.cardNumber}</Text>}
              <TextInput
                name="cardNumber"
                style={inputStyle}
                placeholder="Card number"
                value={values.cardNumber}
                onBlur={() => setFieldTouched('cardNumber')}
                onChangeText={handleChange('cardNumber')}
              />

              {touched.expiry && errors.expiry && <Text style={errorStyle}>{errors.expiry}</Text>}
              <TextInput
                name="expiry"
                style={inputStyle}
                placeholder="Expiry"
                value={values.expiry}
                onBlur={() => setFieldTouched('expiry')}
                onChangeText={handleChange('expiry')}
              />

              {touched.cvv && errors.cvv && <Text style={errorStyle}>{errors.cvv}</Text>}
              <TextInput
                name="cvv"
                style={inputStyle}
                placeholder="CVV"
                secureTextEntry={true}
                value={values.cvv}
                onBlur={() => setFieldTouched('cvv')}
                onChangeText={handleChange('cvv')}
              />

              <Button title="Schedule" onPress={handleSubmit} disabled={!touched || !isValid}></Button>
          </Form>
          )}
      </Formik>
    );
}

const inputStyle = {
    marginBottom: '60px',
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

const errorStyle = {
    textAlign: 'left',
    fontSize: 12,
    color: '#FF0D10',
    marginBottom: '8px'
}

