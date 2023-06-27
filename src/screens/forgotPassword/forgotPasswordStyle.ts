import { StyleSheet } from 'react-native';
import { colorStyles } from '../../utils/colors/colorStyles';

export const forgotStyles = StyleSheet.create({
    formView: {
        width: '80%',
    },
    inputView: {
        marginVertical: 5,
    },
    label: {
        color: colorStyles.black.color,
        alignSelf: 'flex-start',
        fontSize: 20
    },
    input: {
        backgroundColor: colorStyles.white.color,
        height: 45,
        width: '100%',
        padding: 10,
        borderRadius: 17,
        borderColor: colorStyles.black.color,
        borderWidth: 2,
        fontSize: 20
    },
    buttonView: {
        marginTop: 15,
        width: '50%',
        marginBottom: 5
    },
    button: {
        backgroundColor: colorStyles.primaryColor.color,
        paddingVertical: 10,
        height: 60,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 20,
        color: colorStyles.black.color
    }
});