import { StyleSheet } from 'react-native';
import { colorStyles } from '../colors/colorStyles';

export const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorStyles.white.color,
    },
    text: {
        // esse é o texto default do app
        color: colorStyles.black.color,
        fontSize: 30,
    }
})