import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React,{useState} from 'react'

const TextScreen = () => {
    const [password,setPassword] = useState("");
  return (
    <View>
    <Text>Enter Password:</Text>
      <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false}
      value={password} onChangeText={(newVale)=> {setPassword(newVale);}}></TextInput>
   

      {password.length<5?<Text>Password must be longer than 5 charachters</Text>:null}
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
    input: {
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})