import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import CreateContact from './screens/CreateContact';
import { Feather } from '@expo/vector-icons'; 
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#e91e63",
  },
};


const Stack = createStackNavigator();


const Navigation = ()=>{
  const navigation = useNavigation()

  return(
    <Stack.Navigator>
    <Stack.Screen
     name="Home" 
     component={HomeScreen}
     options={
       {
         title:"My Contacts",
         headerTintColor:"#fff",
         // headerShown:false,
         headerStyle:{
           backgroundColor:"#e91e63"
         },
         headerRight:()=><Feather
           name="plus"
           size={30} 
           color="white" 
           onPress={()=>{navigation.navigate("add")}} />
       }
     }
    />
    <Stack.Screen 
    name="add" 
    component={CreateContact} 
    options={
      {
        headerTintColor:"#e91e63",
        title:"Create Contact"
      }
    }
    
    />
</Stack.Navigator>
  )
}


export default function App() {
 

  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
       <Navigation />
    </NavigationContainer>
    </PaperProvider>
  );
}

