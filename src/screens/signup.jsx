import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../themes/colors'
import axios from 'axios';
import Button from '../components/button'
import Input from '../components/input'


const genderOptions = ['Male', 'Female']

export default function Singup({ navigation }) {
    const [gender, setGender] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")

    const baseUrl = 'https://appbackend.datavancedbd.com/api/auth/signup';

    const params = JSON.stringify({
        "name": name,
        "username": username,
        "email": email,
        "password": password
    });

    const handleSignup = () => {
        console.log(params)
        axios.post(baseUrl, params, {
            "headers": {
                "content-type": "application/json",
            },
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ paddingHorizontal: 20, marginTop: 40, flex: 1 }}>
                <Input placeholder={'Full Name'} onChangeText={(text) => setName(text)} />
                <Input placeholder={'User name'} onChangeText={(text) => setUsername(text)} />
                <Input placeholder={'Email Address'} onChangeText={(text) => setEmail(text)} />
                <Input placeholder={'Password'} onChangeText={(text) => setPassword(text)} />
                {/* <Input placeholder={'Age'} onChangeText={(text) => setAge(text)} />
                <View style={{ marginTop: 12, }}>
                    <Text style={{ marginBottom: 16, fontWeight: 'bold' }}>Select Gender</Text>
                    {
                        genderOptions.map((option) => {
                            const selected = option === gender
                            return (
                                <Pressable onPress={() => setGender(option)} style={styles.radioContainer}>
                                    <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                                        <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]}></View>
                                    </View>
                                    <Text style={{ marginLeft: 10 }}>{option}</Text>
                                </Pressable>
                            )
                        })
                    }
                </View> */}
            </View>
            <View style={styles.preesable}>
                <Button title={'Sign up'} customStyles={{ alignSelf: "center", width: '100%', marginBottom: 50 }} onPress={handleSignup} />
                <Pressable onPress={() => { navigation.navigate('Signin') }
                }>
                    <Text style={{ color: colors.black }} >Already have an account? <Text style={{ color: colors.black, fontWeight: 'bold' }}>Sign in</Text> </Text>
                </Pressable>
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
    },
    preesable: {
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 20
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    outerCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "#cfcfcf",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedOuterCircle: {
        borderColor: 'orange'
    },
    selectedInnerCircle: {
        backgroundColor: 'orange',
        width: 16,
        height: 16,
        borderRadius: 8,
    }
})