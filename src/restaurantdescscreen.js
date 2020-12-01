// task 1
import React,{useState,useEffect} from 'react'
import {Text, View, StyleSheet, FlatList, Image} from 'react-native'
import yelp from './api/yelp'
// task 2 
const restaurantdescscreen = function(props){
    const [text,settext]=useState("nothing")
    const [result,setResult] = useState(null)
    const id = props.navigation.getParam('id')

    const getresult = async function(id){
        try{
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        }catch(e){
            settext("we have an error")
        }
    }

    useEffect(function(){getresult(id)},[])
    console.log('start');
    console.log(result);
    if(!result){
        console.log("null entered");
        return null
    }
    console.log("photos");
    console.log(result.photos);
    return(
        <View>
            <Text>{result.name}</Text>
            <Text>{text}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={k=>k}
                renderItem={function({item}){
                    return(<Image
                        source={{uri:item}}
                        style={st.Image}
                    />)
                }}
            />
        </View>
    )
}

//task 3
const st = StyleSheet.create({
    Image:{
        height:200,
        width:300
    }
})

//task 4 
export default restaurantdescscreen