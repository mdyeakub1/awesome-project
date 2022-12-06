import { View, Text,  Image, TextInput,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../themes/colors'
import Button from '../components/button'
import Input from '../components/input'

export default function Singup({navigation}) {
  return (
      <SafeAreaView style={{flex:1,}}>
          <View style={{paddingHorizontal: 20, marginTop: 40,flex:1 }}>
            <Input placeholder={'Email Address'}/>
            <Input placeholder={'Password'}/>
            <Input placeholder={'Full Name'}/>
            <Input placeholder={'Age'}/>
          </View>
          <View style={styles.preesable}>
          <Button title={'Sign up'} customStyles={{alignSelf: "center", width: '100%', marginBottom: 50}}/>
              <Pressable onPress={()=>{navigation.navigate('Signin')}
              }>
                  <Text style={{color:colors.black}} >Already have an account? <Text style={{color:colors.black, fontWeight:'bold'}}>Sign in</Text> </Text>
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