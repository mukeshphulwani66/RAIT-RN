import { View, Text ,Image,FlatList,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import {Card, Button} from 'react-native-paper'

const HomeScreen = ({navigation}) => {


    const users = [
        {
          id:1,
          name:"Ramesh verma",
          img:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
          id:2,
          name:"Suresh kumar",
          img:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
          id:3,
          name:"Hitesh verma",
          img:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
       
    ]
    
    
  const RenderCard =  ({item})=>{
            return(
                <Card style={styles.card}>
                    <View key={item.id} style={styles.cardView}>
                        <Image
                        style={styles.icon}
                        source={{uri:item.img}}
                        />
                        <Text style={styles.textStyle}>{item.name}</Text>
                   </View>    
                </Card> 
            )
  }

  return (
    <View>  
       <FlatList 
        data={users}
        renderItem={({item})=><RenderCard item={item} />}
        keyExtractor={(item)=>item.id}  
       />

       
    </View>
  )
}


const styles = StyleSheet.create({
    card:{
        margin: 5,
    },
    cardView:{
      margin: 10,
      flexDirection:"row",
      alignItems:"center"
     },
    icon:{
        width: 80,
        height: 80,
        borderRadius:40
    },
    textStyle:{
        fontSize:20,
        marginLeft:20
    }
})


export default HomeScreen