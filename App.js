import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register';
import EditScreen from './screens/Edit';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const Stack = createNativeStackNavigator(); 


const firebaseConfig = {
  apiKey: "AIzaSyCunvAyiaZP2hn-2dEUaJN7wp_lg3O8wpo",
  authDomain: "beee-e8549.firebaseapp.com",
  projectId: "beee-e8549",
  storageBucket: "beee-e8549.appspot.com",
  messagingSenderId: "47066927942",
  appId: "1:47066927942:web:1ebe1685e7c377ec1ecb47",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Edit" component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
