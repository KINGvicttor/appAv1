import React from 'react'
import { StyleSheet , View, Text } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons';

export const Menu = () => {
  return (
      <View style={styles.menu}>
          <Feather name="home" size={24} color="black" />
          <Feather name="check" size={24} color="black" />
          <AntDesign name="close" size={24} color="black" />
          <Feather name="menu" size={24} color="black" />
          <Feather name="power" size={24} color="black" />
      </View>
  )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        borderTopColor: '#FF8E00',
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderRightColor:  'white',
        borderWidth: 1,
        width: '100%',
        marginTop: '5%',
        alignItems: 'center',  
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
}); 

export default Menu;