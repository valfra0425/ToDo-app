import { View, StatusBar, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { ForgotProps } from "../../utils/Types/navigationTypes";
import Logo from '../../components/logo/logo';
import { mainStyles } from '../../utils/Styles/mainStyle';
import { forgotStyles } from './forgotPasswordStyle';

export default function ForgotPassword({navigation}: ForgotProps ): JSX.Element{
    return (
        <KeyboardAvoidingView style={mainStyles.container}>
            <StatusBar barStyle="default"/>
            <Logo></Logo>
            <View style={forgotStyles.formView}>
                <View style={forgotStyles.inputView}>
                    <Text style={forgotStyles.label}>Informe seu endereço de Email:</Text>
                    <TextInput style={forgotStyles.input} autoFocus={true} inputMode={'email'} autoCapitalize={"none"}/>
                </View>
                <View style={forgotStyles.inputView}>
                    <Text style={forgotStyles.label}>Informe sua nova Senha:</Text>
                    <TextInput style={forgotStyles.input} secureTextEntry={true}/>
                </View>
                <View style={forgotStyles.inputView}>
                    <Text style={forgotStyles.label}>Repita a sua nova senha:</Text>
                    <TextInput style={forgotStyles.input} secureTextEntry={true}/>
                </View>
            </View>
            <View style={forgotStyles.buttonView}>
                <TouchableOpacity style={forgotStyles.button} onPress={() => navigation.goBack()}>
                    <Text style={forgotStyles.textButton}>Trocar senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}