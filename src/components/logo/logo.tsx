import { View, Text, StatusBar, Image } from 'react-native';
import { logoStyles } from './logoStyles';

export default function Logo(){
    return(
        <View style={logoStyles.view}>
            <Image style={logoStyles.logo} source={require('../../../assets/img/logo.png')}/>
        </View>
    );
}