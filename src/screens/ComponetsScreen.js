import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ComponetsScreen = () => {
    const name="Clinzmann";
  return (
   <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.headerStyle}>My name is {name} </Text>
      </View>
   )
}

export default ComponetsScreen


const styles = StyleSheet.create({

    textStyle:{fontSize:45

    },
    headerStyle:{fontSize:  20}


});