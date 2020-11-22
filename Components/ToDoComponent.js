import React,{useState} from 'react';
import {  View, TextInput,Text,TouchableOpacity } from 'react-native';
import {containerStyle} from "./ToDoComponent.style";
const ToDo = () => {
    const[todo,setTodo]=useState('')
    const[todos,setTodos]=useState([])

    const addTodo = () => {
        setTodos([...todos,todo])
        setTodo('')
    }
    const deleteToDo = (td) => {
        const newToDos = todos.filter(el => el != td)
        setTodos(newToDos)
    }

    return(
        <View style={containerStyle.container}>
            <View style={containerStyle.todoContainer}>
                <View style={containerStyle.todoInputContainer}>
                    <TextInput value={todo} onChangeText={e=>setTodo(e)} style={containerStyle.todoInput}/>
                </View>
                <View style={containerStyle.addButtomContainer}>
                    <TouchableOpacity onPress={addTodo}  hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
                        <Text style={containerStyle.addButtom}>
                            Add
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={containerStyle.todosContainer}>
                {
                    todos.map(el => ( 
                        <View style={{height:"5%",marginTop:"5%",flexDirection:"row"}}>
                            <View style={containerStyle.todosTextContainer}>
                                <Text style={containerStyle.todos}>{el}</Text>
                            </View>
                            <View style={containerStyle.deleteButtomContainer}>
                                <TouchableOpacity onPress={() => deleteToDo(el)}  hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
                                    <Text style={containerStyle.addButtom}>
                                        Delete
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default ToDo