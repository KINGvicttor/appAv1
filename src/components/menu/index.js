import React from 'react'
import { StyleSheet , View, Text } from 'react-native'

export const Menu = () => {
  return (
      <View style={styles.menu}>
          <Icon></Icon>
      </View>
  )
}

const styles = StyleSheet.create({
    menu: {
        borderTopColor: '#F12711',
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderRightColor:  'white',
        borderWidth: 1,
        width: '100%',
        height: '5%',
        marginTop: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    }
}); 

export default Menu;