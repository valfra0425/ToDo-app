// este é o arquivo de tipos usado na navegação inicial e suas respectivas telas
import type { StackScreenProps } from '@react-navigation/stack';

export type StackList = {
    Start: undefined,
    Login: undefined,
    SignUp: undefined,
};

export type StartProps = StackScreenProps<StackList, 'Start'>;
export type LoginProps = StackScreenProps<StackList, 'Login'>;
export type SignUpProps = StackScreenProps<StackList, 'SignUp'>;