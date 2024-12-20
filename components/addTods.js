import React, { useState } from 'react';
import { StyleSheet,Text, View, TextInput, Button } from 'react-native';


export default function AddTodos({ submitHandler } ) {
     const [text, setText] = useState('')
    const changeHandler =( val) => {
      setText( val);
    }
    
    return(
        <View>
            <TextInput styles ={styles.input}
             placeholder='new todo ...'
             onChangeText={changeHandler}

            />
            <Button onPress={ ()=> submitHandler (text) } title= 'addtodo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    }
})
