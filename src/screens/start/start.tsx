import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { startStyles } from './startStyles';
import { mainStyles } from '../../utils/Styles/mainStyle';
import Logo from '../../components/logo/logo';
import { StartProps } from '../../utils/Types/navigationTypes';

export default function Start({navigation}: StartProps): JSX.Element{
    return (
        <View style={mainStyles.container}>
            <StatusBar barStyle="default"/>
            <Logo></Logo>
            <Text style={startStyles.welcome}>Aproveite o melhor app de lista de tarefas que você já viu</Text>
            <View style={startStyles.buttonView}>
                <TouchableOpacity style={startStyles.button} onPress={() => navigation.navigate("Login")}>
                    <Text style={startStyles.textButton}>Comece</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}