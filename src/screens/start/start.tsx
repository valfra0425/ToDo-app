import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { StartStyles } from './startStyles';
import { mainStyles } from '../../utils/Styles/mainStyle';
import Logo from '../../components/logo/logo';
import { StartProps } from '../../utils/Types/navigationTypes';

export default function Start({navigation}: StartProps): JSX.Element{
    return (
        <View style={mainStyles.container}>
            <StatusBar barStyle="default"/>
            <Logo></Logo>
            <Text style={StartStyles.welcome}>Aproveite o melhor app de lista de tarefas que você já viu</Text>
            <View style={StartStyles.buttonView}>
                <TouchableOpacity style={StartStyles.button}>
                    <Text style={StartStyles.textButton}>Comece</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}