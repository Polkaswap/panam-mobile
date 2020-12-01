import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PanamButton from '../component/button';

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Panam</Text>
            <StatusBar style="auto" />
            <View>
                <PanamButton icon="account-circle" message="Login" mode="contained" />
                <PanamButton icon="arrow-right-thick" message="Create your account" mode="contained" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c7ecee',
      alignItems: 'center',
      justifyContent: "space-around",
    },
    title: {
        fontSize: 50,
    }
});

export default memo(WelcomeScreen);