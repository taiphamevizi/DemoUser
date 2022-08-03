import React, { useState } from 'react'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { DefaultButton } from '../../components/DefaultButton'
import { Input } from '../../components/Input'
import { Loader } from '../../components/Loader'
import { LinkToSignup } from './styles'
import { DefaultContainer } from '../../components/DefaultContainer'

export function Login ({ navigation })  {

    const [isLoading, setIsLoading] = useState(false)
    const [fieldEmail, setFieldEmail] = useState('')
    const [fieldPassword, setFieldPassword] = useState('')

    function clearFields() {
        setFieldEmail('')
        setFieldPassword('')
    }

    function userLogin () {
        if(fieldEmail === '' || fieldPassword === '') {
            Alert.alert('Error', 'All fields are required.')
        } else {
            setIsLoading(true)
            auth().signInWithEmailAndPassword(fieldEmail, fieldPassword)
            .then((res) => {
                clearFields()
                setIsLoading(false)
                navigation.reset({
                    index: 0,
                    routes: [{name: 'ListUser'}],
                  });
            })
            .catch(error => {
                setIsLoading(false)
                // Alert.alert('Error', 'Incorrect data, please try again with other data.')
                console.log('login error --->', error)
            })
        }
    }
    
    if(isLoading){
        if(isLoading){
            return <Loader />
        }  
    } 
    return (
        <DefaultContainer>
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
                onPress={() => userLogin()}
                label="Access"
            />

            <LinkToSignup
                onPress={() => navigation.navigate('Signup')}
            >
                Don't have an account yet? Click here to register.
            </LinkToSignup> 
        </DefaultContainer>
    )
}
