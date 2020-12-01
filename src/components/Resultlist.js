import React from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Resultdetail from '../components/resultdetail'
//instead of passing navigation from search to result we came directly
import {withNavigation} from 'react-navigation'
//we use prop whenever we want to communicate date from parent to child
const Resultlist = function(props){
    if(!props.result.length){
        return null
    }
    console.log('resultlist');
    //console.log(props);
    return(
        <View>
            <Text style={Style.title}>{props.title}</Text>
            
            <FlatList
                horizontal={true}
                data ={props.result}
                keyExtractor={res=>res.id}
                renderItem={function({item}){
                    return(
                                                                                     //adding additional info besides navigaiton just like intent in android
                        <TouchableOpacity onPress={function(){props.navigation.navigate('desc',{id:item.id})}}>
                            <Resultdetail
                                result={item}
                            />
                        </TouchableOpacity>
                        
                    )
                }}
            />
        </View>
    )
}

const Style = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:10
    }
})
/**
 * So we're no longer exporting results less directly.

Instead we are exporting a special version of results list that has that extra code or kind of extra

functionality tied to it.

That's going to give results list access to navigation.
still have access to navigation but without being passed as a prop
 */
export default withNavigation(Resultlist)