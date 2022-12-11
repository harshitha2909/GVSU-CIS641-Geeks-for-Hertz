import { View } from 'react-native';

export default function Medications({route}) {
    const { medicines } = route.params;
    return (
      <View>
          <div style={containerStyle}>
              <span>Primary medication:</span>
              <ol>
                  {
                      medicines.map((medicine, index) => {
                          return <li>{medicine}</li>
                      })
                  }
              </ol>
          </div>
      </View>
    );
}

const containerStyle = {
    margin: '100px 30px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: '20px'
}
