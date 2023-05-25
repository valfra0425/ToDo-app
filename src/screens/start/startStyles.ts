import { StyleSheet } from 'react-native';
import { colorStyles } from '../../utils/colors/colorStyles';

export const startStyles = StyleSheet.create({
    welcome: {
        width: "90%",
        color: colorStyles.black.color,
        fontSize: 25,
        textAlign: 'center'
    },
    buttonView: {
        marginTop: 30,
        width: '50%'
    },
    button: {
        backgroundColor: colorStyles.primaryColor.color,
        paddingVertical: 10,
        height: 50,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 20,
        color: colorStyles.black.color
    }
})