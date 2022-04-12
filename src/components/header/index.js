import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
      <LinearGradient style={styles.header} colors={['#F5AF19','#F12711']} start={{x:0,y:1}} end={{x:1,y:0}}>
      <Text style={styles.titleHeader}>LOREM IPSUM</Text>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '5%',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default Header;