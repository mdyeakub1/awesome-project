import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateNote from './src/screens/createNote';
import EditNote from './src/screens/editNote';
import Home from './src/screens/home';
import Singin from './src/screens/signin';
import Signup from './src/screens/signup';

const AppTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: '#fff'
  }
}

const Stack = createNativeStackNavigator();


export default function App() {
  const user = false
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {user ? (
          <>
           <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateNote" component={CreateNote} />
        <Stack.Screen name="EditNote" component={EditNote} />
          </>
        ):(
          <>
         <Stack.Screen name="Signin" component={Singin} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} />
          </>

        )}
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
