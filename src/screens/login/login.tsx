import { View, StatusBar, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { LoginProps } from "../../utils/Types/navigationTypes";
import Logo from '../../components/logo/logo';
import { mainStyles } from '../../utils/Styles/mainStyle';
import { loginStyles } from './loginStyle';

export default function Login({navigation}: LoginProps ): JSX.Element{
    return (
        <KeyboardAvoidingView style={mainStyles.container}>
            <StatusBar barStyle="default"/>
            <Logo></Logo>
            <Text style={mainStyles.text}>Login</Text>
            <View style={loginStyles.formView}>
                <View style={loginStyles.inputView}>
                    <Text style={loginStyles.label}>Email</Text>
                    <TextInput style={loginStyles.input} autoFocus={true} inputMode={'email'} autoCapitalize={"none"}/>
                </View>
                <View style={loginStyles.inputView}>
                    <Text style={loginStyles.label}>Senha</Text>
                    <TextInput style={loginStyles.input} secureTextEntry={true}/>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
                <Text style={loginStyles.smallText}>Esqueci a Senha</Text>
            </TouchableOpacity>
            <View style={loginStyles.buttonView}>
                <TouchableOpacity style={loginStyles.button}>
                    <Text style={loginStyles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={loginStyles.smallText}>Ir para o cadastro</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}