import React from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
//we use prop whenever we want to communicate date from parent to child
const Resultlist = function(props){
    return(
        <View>
            <Text style={Style.title}>{props.title}</Text>
            <Text>{props.result.length}</Text>
            <FlatList
                horizontal={true}
                data ={props.result}
                keyExtractor={res=>res.id}
                renderItem={function({item}){
                    return(
                        <Text>{item.name}</Text>
                    )
                }}
            />
        </View>
    )
}

const Style = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
})

export default Resultlist