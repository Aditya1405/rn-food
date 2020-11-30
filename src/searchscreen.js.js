// task 1
import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Searchbar from '../src/components/searchbar'
//this will return an array that contain all the items that is returned
import useresults from './hooks/useresults'
// task 2
const searchscreen = function(props){
    //declaring state
    const [text,settext] = useState('')
    //using destructing for useresults
    console.log(useresults);
    const [searchapi, error, apiresult]=useresults()
    
    return(
        <View>
            <Searchbar 
            //passing state param as prop to child 
            ontextchange={function(value){settext(value)}}
            //run api request when on text submit
            // create a helper function 
            ontextsubmit={function(){searchapi(text)}}
            value = {text}
            />
            {error?<Text>{error}</Text>:null}
            <Text>{'we have found'+ apiresult.length}</Text>
        </View>
    )
}
// task 3
const st = StyleSheet.create({

})
// task 4
export default searchscreen