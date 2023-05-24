// este é o arquivo de tipos usado na navegação inicial e suas respectivas telas
import type { StackScreenProps } from '@react-navigation/stack';

export type StackList = {
    Start: undefined,
};

export type StartProps = StackScreenProps<StackList, 'Start'>;