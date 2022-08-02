import React, { useState } from 'react'
import { Alert } from 'react-native'
import { LinkToLogin } from './styles'
import { DefaultContainer } from '../../components/DefaultContainer'
import { Loader } from '../../components/Loader'
import { Input } from '../../components/Input'
import { DefaultButton } from '../../components/DefaultButton'
import auth from '@react-native-firebase/auth'

export function Signup ({ navigation }) {

    const [isLoading, setIsLoading] = useState(false)
    const [fieldName, setFieldName] = useState('')
    const [fieldEmail, setFieldEmail] = useState('')
    const [fieldPassword, setFieldPassword] = useState('')

    function clearFields() {
        setFieldName('')
        setFieldEmail('')
        setFieldPassword('')
    }

    function registerUser () {
        if(fieldName === '' || fieldEmail === '' || fieldPassword === '') {
          Alert.alert('Error', 'All fields are required.')
        } else {
            setIsLoading(true)
            auth()
                .createUserWithEmailAndPassword(fieldEmail, fieldPassword)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: fieldName
                    })
                    setIsLoading(false)
                    clearFields()
                    Alert.alert('Success', 'Account has been created successfully, please login.')
                    navigation.navigate('Login')
                })
            .catch(error => {
                setIsLoading(false)
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Error', 'This email is already in use.')
                    return
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('Error', 'This email is invalid.')
                    return
                }

                if (error.code === 'auth/weak-password') {
                    Alert.alert('Error', 'Your password must have a minimum of 6 characters.')
                    return
                }

                Alert.alert('Error', 'An unmapped error has occurred, please check your internet connection or change your registration details.')

                console.error(error)
            })
        }
    }

    if(isLoading){
        return <Loader />
    }    

    return (
        <DefaultContainer>
            <Input
                placeholder="Name"
                value={fieldName}
                onChangeText={(val) => setFieldName(val)}
            />      
            <Input
                placeholder="E-mail"
                value={fieldEmail}
                onChangeText={(val) => setFieldEmail(val)}
            />
            <Input
                placeholder="Password"
                value={fieldPassword}
                onChangeText={(val) => setFieldPassword(val)}
                secureTextEntry={true}
            />

            <DefaultButton 
                onPress={() => registerUser()}
                label="Register"
            />

            <LinkToLogin 
                onPress={() => navigation.navigate('Login')}
            >
                Already registered? Click here to login.
            </LinkToLogin>              
        </DefaultContainer>
    
    )
}
