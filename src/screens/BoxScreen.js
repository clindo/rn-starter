import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
    
    <View style={styles.viewOne}/>
    <View style={styles.viewTwo}/>
    <View style={styles.viewThree}/>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({

    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        height:300,
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'space-between'
        
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:1
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:1,
        top:10,
        bottom:10,
        left:10,
        right:10,
        position:'absolute',
     ...StyleSheet.absoluteFillObject,
     
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:1
    },
    viewOne:{
        backgroundColor:'pink',
        height:100,
        width:100,
        
    },
    viewTwo:{
        backgroundColor:'green',
        height:100,
        width:100,
       top:100
        
      
    }
    , viewThree:{
        backgroundColor:'blue',
        height:100,
        width:100
    }
})