import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'

export default function Input({placeholder, secureTextEntry, onChangeText}) {
  return (
    <TextInput placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry}></TextInput>
  )
}

const styles = StyleSheet.create({
    input:{
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        marginBottom:20,
    }
})