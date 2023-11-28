import { View, Text ,FlatList,StyleSheet} from 'react-native'
import React from 'react'

const ListScreen = () => {
    const friends =[{ name: 'Joe',age:30},{ name: 'Joe1',age:30},{ name: 'Joe2',age:30},{ name: 'Joe3',age:30},{ name: 'Joe4',age:30},{ name: 'Joe5',age:30},{ name: 'Joe6',age:30}];
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={friend=> friend.name}
     data ={friends} 
        renderItem={({item}) =>{
return (
    <View>
        <Text style={styles.testStyle}>{item.name} - Age {item.age}</Text>
        
    </View>
)


        }}
    />
  )
}

const styles=StyleSheet.create({

    testStyle:{marginVertical:50}

  });

export default ListScreen