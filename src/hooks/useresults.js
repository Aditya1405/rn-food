// task 1
import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default function(){
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

    return([searchapi, error, apiresult])
}