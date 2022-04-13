import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import Content from './src/components/content';
import Menu from './src/components/menu';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Menu />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
