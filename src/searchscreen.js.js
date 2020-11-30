// task 1
import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Searchbar from '../src/components/searchbar'
import yelp from '../src/api/yelp'
// task 2
const searchscreen = function(props){
    //declaring state
    const [text,settext] = useState('')
    /**
     * declare another useState for yelp api why ?--do smth and update on screen {we use state}
     * we initialize it with empty [] because the result that we are expecting is in form of a
     * huge array of objects that will contain all the result that we got from api
     * if you want to see the result 
     * --->go to yelp api--->business endpoint--->business search--->response body
     */
    const [apiresult,setapiresult] = useState([])
    const [error,seterror] =useState('')
    const searchapi = async function(searchterm){
        /**
         * this is an async operation
         */
        console.log('hello');
        try{
            const response = await yelp.get('/search',
            {
                params:{
                    limit:50,
                    term: searchterm,
                    location: 'san jose'
                }
            })
            setapiresult(response.data.businesses)
        }catch(e){
            seterror('something went wrong')
        }
    }
    //call searchapi
    //is first rendered badcode!!!
    //searchapi('pasta')
    //this will cause an infinite loop
    //
    //using useeffect to avoid infinite loop
    useEffect(function(){
        searchapi('pasta')
    }, [])
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
            <Text>{'we have found'+apiresult.length}</Text>
        </View>
    )
}
// task 3
const st = StyleSheet.create({

})
// task 4
export default searchscreen