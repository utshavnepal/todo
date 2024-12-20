import React, {useState} from 'react'; 

import { StyleSheet, Text, View, Alert, FlatList, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import TodoItem from './components/todoitem';
import Header from './components/header';
import AddTodos from './components/addTods';

export default function App() {
  const [todos, seTods] = useState(
    [
      {text:'buy coffee', key:'1'},
      {text: 'create an app', key:'2'},
      {text:'play on the switch',key:'3'}
    ]
  );
  
    const pressHandler =(key)=>{
      seTods ((prevTodos) =>{
        return prevTodos.filter(todos => todos.key != key);
      }
      
      );
    }

    const submitHandler = (text) =>{

      if (text.length>3){
      seTods ((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},

          ...prevTodos

        ];
      });
    }
    else { 
      Alert.alert('opps', 'todos must be 3 character long',
      [
        {text:'Undrestood', onPress: () => console.log('alert closed') }
      ]
      );
    }
    }

  return (
    
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss
    }}>

<View style={styles.container}>
    <Header/>
     <View styles={styles.content}>
     <AddTodos submitHandler={ submitHandler }/>
       <View style={styles.list}>
       <FlatList
         data={todos}
         renderItem={({item}) =>(
           <TodoItem item={item}
             pressHandler={pressHandler}
           />
         )}
       />

       </View>
     </View>
  
    </View>

    </TouchableWithoutFeedback>
    
  
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20
  },
  content:{
    padding:40,
    flex:1
  },
  list:{
    marginTop:20,
  }


});
