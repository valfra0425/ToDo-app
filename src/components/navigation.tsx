import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../screens/start/start';
import Login from '../screens/login/login';
import SignUp from '../screens/signup/signUp';
import { StackList } from '../utils/Types/navigationTypes';

const Stack = createStackNavigator<StackList>();

export default function Navigation(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}