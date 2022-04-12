import React from 'react'
import { StyleSheet , View, Text } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons';

export const Menu = () => {
  return (
      <View style={styles.menu}>
          <Text style={styles.icons}>
          <Feather name="home" size={24} color="black" />
          <Feather name="check" size={24} color="black" />
          <AntDesign name="close" size={24} color="black" />
          <Feather name="menu" size={24} color="black" />
          <Feather name="power" size={24} color="black" />
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    menu: {
        borderTopColor: '#FF8E00',
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderRightColor:  'white',
        borderWidth: 1,
        width: '100%',
        height: '5%',
        marginTop: '15%',
        alignItems: 'center',  
    },
    icons: {
        marginTop: '2%',
    }

}); 

export default Menu;