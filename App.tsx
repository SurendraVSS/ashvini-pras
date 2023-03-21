import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import ProductContainer from './screens/ProductContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
