// task 1
import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Searchbar from '../src/components/searchbar'

// task 2
const searchscreen = function(props){
    //declaring state
    const [text,settext] = useState('')
   
    return(
        <View>
            <Searchbar 
            //passing state param as prop to child 
            ontextchange={function(value){settext(value)}}
            ontextsubmit={function(){console.log('term was submitted')}}
            value = {text}
            />
            <Text>{text}</Text>
        </View>
    )
}
// task 3
const st = StyleSheet.create({

})
// task 4
export default searchscreen