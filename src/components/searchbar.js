// task 1
/**
 * code for searchbar
 */
import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
// task 2 
/**
 * how to utilize this text input
 * we type 1 letter - machine starts to search based on it 
 * we type 5 letters - machine re-starts to search based on it
 * so we need a state variable to track the current value of that text input is
 * 
 */
const Searchbar = function(props){
    return(
        <View style = {st.view} >
            <FontAwesome name="search" size={24} color="black" style={st.searchglass} />
            <TextInput 
            style={st.searchbar} 
            placeholder="Search" 
            value={props.value} 
            onChangeText={props.ontextchange}
            onEndEditing={props.ontextsubmit}
             />
        </View>
    )
}

//task 3
const st = StyleSheet.create({
    view:{
        backgroundColor:'grey',
        height:50,
        borderRadius:10,
        margin:10,
        flexDirection:'row'
    },
    searchglass:{
        padding:10,
        borderColor:'red',
        alignSelf:'center'
        
    },
    searchbar:{
        borderColor:'black',
        fontSize:18,
        flex:1,
        //borderWidth:1,
        //marginRight:10
    }
})

//task 4 
export default Searchbar