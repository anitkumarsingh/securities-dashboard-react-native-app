import React from 'react'
import { View,Text,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})


const Home = props => {
  return (
    <View style={styles.container}>
      <Text>This is home screen</Text>
    </View>
  )
}

export default Home
