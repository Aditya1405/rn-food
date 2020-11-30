// task 1
import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import Searchbar from '../src/components/searchbar'
//this will return an array that contain all the items that is returned
import useresults from './hooks/useresults'
import Resultlist from './components/Resultlist'
// task 2
const searchscreen = function(){
    //declaring state
    const [text,settext] = useState('')
    //using destructing for useresults
    console.log('searchscreen');
    //console.log(props);
    const [searchapi, error, apiresult]=useresults()
    /**
     * creating a helper function that will assist in grouping acc to price
     */
    const filterresultbyprice = function(price){
        //price ==='$'||'$$'||'$$$'
        return (
            /**
             * deals with array
             * every result from our result array we will ask if result.price 
             * is equal to the price that we have just passed in
             */
            apiresult.filter(result=>{
                //if this is true then return to the new result set from this function
                return result.price===price 
            })
        )
    }
    return(
        //<> we can use empty tag instead of view to solve our issue without flex
        <View style={st.screen}>

            <Searchbar 
            //passing state param as prop to child 
            ontextchange={function(value){settext(value)}}
            //run api request when on text submit
            // create a helper function 
            ontextsubmit={function(){searchapi(text)}}
            value = {text}
            />
            {error?<Text>{error}</Text>:null}
            
            <ScrollView>
            <Resultlist result ={filterresultbyprice('$')}   title="cost effective" />
            <Resultlist result ={filterresultbyprice('$$')} title="bit pricer" />
            <Resultlist result ={filterresultbyprice('$$$')} title="big spencer" />
            </ScrollView>
        </View>
        //passing props.navigation to child screen
        //</>
    )
}
// task 3
const st = StyleSheet.create({
    screen:{
        flex:1
    }
})
// task 4
export default searchscreen