import React, { useState } from 'react'
import { Alert } from 'react-native'
import { LinkToLogin } from './styles'
import { DefaultContainer } from '../../components/DefaultContainer'
import { Loader } from '../../components/Loader'
import { Input } from '../../components/Input'
import { DefaultButton } from '../../components/DefaultButton'

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
          Alert.alert('Atenção', 'Todos os campos são obrigtórios.')
        } else {
            setIsLoading(true)
        }
    }

    if(isLoading){
        return <Loader />
    }    

    return (
        <DefaultContainer>
            <Input
                placeholder="Nome"
                value={fieldName}
                onChangeText={(val) => setFieldName(val)}
            />      
            <Input
                placeholder="E-mail"
                value={fieldEmail}
                onChangeText={(val) => setFieldEmail(val)}
            />
            <Input
                placeholder="Senha"
                value={fieldPassword}
                onChangeText={(val) => setFieldPassword(val)}
                secureTextEntry={true}
            />

            <DefaultButton 
                onPress={() => registerUser()}
                label="Cadastrar"
            />

            <LinkToLogin 
                onPress={() => navigation.navigate('Login')}
            >
                Já é registrado? Clique aqui para fazer o login.
            </LinkToLogin>              
        </DefaultContainer>
    
    )
}
