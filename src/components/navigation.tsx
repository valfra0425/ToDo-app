import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../screens/start/start';
import { StackList } from '../utils/Types/navigationTypes';

const Stack = createStackNavigator<StackList>();

export default function Navigation(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}