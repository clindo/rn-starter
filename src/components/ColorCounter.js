import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const ColorCounter = ({color,onIncrease,onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`More ${color}`} onPress={()=> onIncrease()}/>
      <Button title={`Less ${color}`} onPress={()=>onDecrease()}/>
    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({})