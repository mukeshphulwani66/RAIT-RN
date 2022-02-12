import { View, Text ,Image,FlatList,StyleSheet,ScrollView,Linking} from 'react-native'
import React,{useState,useEffect} from 'react'
import {Card, Button} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {
   const focus = useIsFocused()

    const [users,setUsers] = useState([])

    const openDial = (phone) =>{
       Linking.openURL(`tel:${phone}`)
    }
    const getAllContacts = async () => {
      try {
        const value = await AsyncStorage.getItem('contacts')
        if(value !== null) {
          setUsers(JSON.parse(value))
        }
      } catch(e) {
        console.log(e)
       alert("Error getting contacts")
      }
    }

    useEffect(async ()=>{
      getAllContacts()
    },[])

    useEffect(()=>{
      getAllContacts()
    },[focus])
    
  const RenderCard =  ({item})=>{
            return(
                <Card style={styles.card}>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                     <View key={item.phone} style={styles.cardView}>
                        <Image
                        style={styles.icon}
                        source={{uri:item.image}}
                        />
                        <Text style={styles.textStyle}>{item.firstName} {item.lastName}</Text>
                    </View>  
                    <Ionicons name="call" size={30} color="green" onPress={()=>openDial(item.phone)} />  
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
        padding: 5
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