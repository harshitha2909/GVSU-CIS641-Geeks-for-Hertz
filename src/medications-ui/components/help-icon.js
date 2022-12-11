import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Help from '../screens/help';

export default function HelpIcon() {
    const navigation = useNavigation();
    return (
      <View>
          <Text style={{paddingRight: '20px', color: 'rgb(0, 122, 255)'}}
                onPress={() => navigation.navigate(Help)}
          > Help</Text>
      </View>
    );
}
