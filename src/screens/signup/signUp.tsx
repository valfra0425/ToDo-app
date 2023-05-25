import { View, StatusBar, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import { SignUpProps } from '../../utils/Types/navigationTypes';
import Logo from '../../components/logo/logo';
import { mainStyles } from '../../utils/Styles/mainStyle';
import { signUpStyles } from './signUpStyles';

export default function SignUp({navigation}: SignUpProps ): JSX.Element {
    return (
        <KeyboardAvoidingView style={{flexGrow: 1}}>
            <StatusBar barStyle="default"/>
            <ScrollView contentContainerStyle={signUpStyles.scrollViewContent}>
                <View style={mainStyles.container}>
                    <Logo></Logo>
                    <Text style={signUpStyles.text}>Cadastro</Text>
                    <View style={signUpStyles.formView}>
                        <View style={signUpStyles.inputView}>
                            <Text style={signUpStyles.label}>Nome</Text>
                            <TextInput style={signUpStyles.input} autoFocus={true}/>
                        </View>
                        <View style={signUpStyles.inputView}>
                            <Text style={signUpStyles.label}>Email</Text>
                            <TextInput style={signUpStyles.input} inputMode={'email'} autoCapitalize={"none"}/>
                        </View>
                        <View style={signUpStyles.inputView}>
                            <Text style={signUpStyles.label}>Senha</Text>
                            <TextInput style={signUpStyles.input} secureTextEntry={true}/>
                        </View>
                        <View style={signUpStyles.inputView}>
                            <Text style={signUpStyles.label}>Confirmar Senha</Text>
                            <TextInput style={signUpStyles.input} secureTextEntry={true}/>
                        </View>
                    </View>
                    <View style={signUpStyles.buttonView}>
                        <TouchableOpacity style={signUpStyles.button}>
                            <Text style={signUpStyles.textButton}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}