import { View, Text,  Image, TextInput,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../themes/colors'
import Button from '../components/button'
import { NavigationContainer } from '@react-navigation/native'
import Input from '../components/input'

export default function Singin({navigation}) {
  return (
      <SafeAreaView style={{flex:1,}}>
         <View style={{flex:1, marginTop:20}}>
         <Image source={require('../../assets/image.png')} style={{alignSelf:'center',}} />
          <Text style={{fontSize: 20, textAlign: 'center'}}>Never forget your notes</Text>
         </View >
          <View style={{paddingHorizontal: 20, marginTop: 40,flex:1 }}>
            <Input placeholder={'Email Address'}/>
            <Input placeholder={'Password'}/>
          </View>
          <View style={styles.preesable}>
          <Button title={'Login'} customStyles={{alignSelf: "center", width: '100%', marginBottom: 50}}/>
              <Pressable onPress={()=> {navigation.navigate('Signup')}}>
                  <Text style={{color:colors.black}} >Don't have an account? <Text style={{color:colors.black, fontWeight:'bold'}}>Sign up</Text> </Text>
              </Pressable>
          </View>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    input:{
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        marginBottom:20,
    },
    preesable:{
        justifyContent:"flex-end",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom:20
    }
})