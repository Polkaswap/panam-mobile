import React, { memo } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import PanamButton from '../component/button';

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Panam</Text>
            <Image style={styles.image} source={require('../assets/blockchain.png')}/>
            <View>
                <PanamButton icon="account-circle" message="Login" mode="contained" />
                <PanamButton icon="arrow-right-thick" message="Create your account" mode="outlined" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: "space-around",
    },
    title: {
        fontSize: 70,
        fontFamily: 'Inter_900Black'
    },
    image: {
        width: 140,
        height: 140,
    },
});

export default memo(WelcomeScreen);