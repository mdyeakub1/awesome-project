import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/input'
import { colors } from '../themes/colors'
import axios from 'axios';
import Button from '../components/button'

export default function CreateNote() {
  const [title, setTitle]=useState("")
  const [message, setMessage]=useState("")


  const baseUrl = 'https://appbackend.datavancedbd.com/api/posts';

  const params = JSON.stringify({
      "title": title,
      "body": message,
  });

  const handleCreatePost = () => {
      console.log(params)
      axios.post(baseUrl, params, {
          "headers": {
              "content-type": "application/json",
          },
      })
  }


  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{ paddingHorizontal: 20, marginTop: 20,}}>
      <Input placeholder={'Title..'} onChangeText={(text) => setTitle(text)} />
      <Input placeholder={'Write your message..'} onChangeText={(text) => setMessage(text)} />
      </View>
      <View style={ {paddingHorizontal: 20, marginTop: 20,}  }>
                <Button title={'Publish'} customStyles={{ alignSelf: "center", width: '100%', marginBottom: 50 }} onPress={handleCreatePost} />
            </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
      height: 48,
      borderBottomWidth: 1,
      borderBottomColor: colors.gray,
      marginBottom: 20,
  }
})