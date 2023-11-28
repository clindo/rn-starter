import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
  <Text style={styles.text}>Hello World!</Text>
  <Button 
  title="Go to component Demo"
  onPress={() => navigation.navigate("Components")}
   />
   <Button title="Go to List Demo" onPress={()=>navigation.navigate("List")}/>
   <Button title="Go to Image Demo" onPress={()=>navigation.navigate("Images")}/>
   <Button title="Go to Counter Demo" onPress={()=>navigation.navigate("CounterScreen")}/>
   <Button title="Go to Colour Demo" onPress={()=>navigation.navigate("Colors")}/>
   <Button title="Go to Square Demo" onPress={()=>navigation.navigate("Square")}/>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
