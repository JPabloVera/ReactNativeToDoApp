import {StyleSheet} from 'react-native'

export const containerStyle = StyleSheet.create({
    container: {
        width: "100%",
        height:"100%",
        backgroundColor: "#9C344C",
    },
    todoInputContainer: {
        width: "70%",
        borderRadius: 100,
        height: "30%",
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
        backgroundColor: "white",
        marginLeft: "10%"
    },
    todoInput:{
        width: "90%",
        marginLeft: "5%",
    },
    addButtom: {
       //bottom: "5%",
       fontSize:14,
       fontWeight:"bold"
        
    },
    addButtomContainer: {
        height:"32%",
        width:"10%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
        backgroundColor: "white",
        padding: 5,
        marginRight: "5%",
        paddingTop:7
        
    },
    todoContainer: {
        alignSelf: "flex-start",
        top: "20%",
        height:"20%",
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    todosContainer: {
        width: "100%",
        height:"100%",
        top: "5%"
    },
    todosTextContainer: {
        width: "60%",
        borderRadius: 100,
        height: "100%",
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
        backgroundColor: "gray",
        marginLeft: "10%"
    },
    todos:{
        width: "90%",
        marginLeft: "5%",
        marginTop:"3%"
    },
    deleteButtomContainer:{
        height:"100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
        backgroundColor: "white",
        marginLeft: "3%"
    }
})

