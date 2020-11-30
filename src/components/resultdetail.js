// task 1
import React from 'react'
import {Text, View,Image, StyleSheet} from 'react-native'

// task 2 
const Resultdetail = function(props){
    //var imgurl = `require(${props.result.image_url})`
    //console.log(imgurl)
    return(
        <View style={st.container}>
            <Image
                style={st.Image}
                //source={imgurl}
                source= {{uri:props.result.image_url}}
            />
            <Text style={st.name}>{props.result.name}</Text>
            <Text>
                {props.result.rating} Stars, {props.result.review_count} Reviews
            </Text>
        </View>
    )
}

//task 3
const st = StyleSheet.create({
    Image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:10
    },
    name:{
        fontWeight:'bold'
    },
    container:{
        marginLeft:10,
        marginBottom:10
    }
})

//task 4 
export default Resultdetail