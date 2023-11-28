import { StyleSheet, Text, View ,Button} from 'react-native'
import React,{useReducer} from 'react'

const reducer = (state,action) => {

 switch (action.type) {

  case 'Increase':
  return {...state, counter: state.counter+1};
  case 'Decrease':
    return {...state, counter: state.counter-1};
  default:
    return state;
 }
}

const CounterScreen = () => {

    const[state,dispatch] = useReducer(reducer,{counter:0});
    const {counter}= state;
  return (
    <View>
    <Button title="Increase" onPress={()=>{
        dispatch({type:'Increase'});
    }}/>
    <Button title="Decrease" onPress={()=>{
          dispatch({type:'Decrease'});
    }}/>
      <Text>Current Count:{counter}</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})