import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const PanamButton = ({ message, ...props }) => (
  <Button style={styles.container} {...props} onPress={() => console.log('Pressed')}>
    { message }
  </Button>
);

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      marginBottom: 10
    },
});

export default PanamButton;