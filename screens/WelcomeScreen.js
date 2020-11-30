import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome Screen</Text>
            <StatusBar style="auto" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default memo(WelcomeScreen);