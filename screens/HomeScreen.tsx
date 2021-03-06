import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonGroup, Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import ThemeContext from '../theme/ThemeContext';
import { MainStackParamList } from '../navigation/AppNavigator';
import TitleComponent from '../components/TitleComponent';

type Props = StackScreenProps<MainStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TitleComponent
                    title={{ name: 'Bamboozled', category: 'h1' }}
                />
                <ButtonGroup>
                    <Button onPress={() => navigation.navigate('JoinGame')}>
                        Join a Game
                    </Button>
                    <Button
                        onPress={() => navigation.navigate('GamesCatalogue')}
                    >
                        Start a Game
                    </Button>
                </ButtonGroup>
            </SafeAreaView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
});

export default HomeScreen;
