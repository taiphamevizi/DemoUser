import React, { useState, useRef } from 'react'
import { Alert } from 'react-native'
import { Loader } from '../../components/Loader'
import { User } from '../../components/User'
import { View, TouchableOpacity } from 'react-native';
import {Container, ScrollViewContainer} from './styles'

export function ListUser ({ navigation })  {

    const scrollViewRef = useRef<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [fieldEmail, setFieldEmail] = useState('')
    const [fieldPassword, setFieldPassword] = useState('')
    const [screenHeightWithoutScrollView, setScreenHeightWithoutScrollView] = useState(140)
    const [names] = useState([
        {'name': 'Ben', 'id': 1, 'address': 'United States Ben'},
        {'name': 'Susan', 'id': 2, 'address': 'United States Susan'},
        {'name': 'Robert', 'id': 3, 'address': 'United States Robert'},
        {'name': 'Mary', 'id': 4, 'address': 'United States Mary'},
        {'name': 'Daniel', 'id': 5, 'address': 'United States Daniel'},
        {'name': 'Laura', 'id': 6, 'address': 'United States Laura'},
        {'name': 'John', 'id': 7, 'address': 'United States John'},
        {'name': 'Debra', 'id': 8, 'address': 'United States Debra'},
        {'name': 'Aron', 'id': 9, 'address': 'United States Aron'},
        {'name': 'Ann', 'id': 10, 'address': 'United States Ann'},
        {'name': 'Steve', 'id': 11, 'address': 'United States Steve'},
        {'name': 'Olivia', 'id': 12, 'address': 'United States Olivia'}
    ])
    
    if(isLoading){
        if(isLoading){
            return <Loader />
        }  
    } 

    function alertItemName(item) {
        // alert(item.name + "\n" + item.address)
        console.log("item = " + item.name)
        navigation.navigate('Login')
    }

    return (
        <Container>
            <ScrollViewContainer 
                screenHeightWithoutScrollView={screenHeightWithoutScrollView}
            >
                {
                names.map((item, index) => {
                     return <TouchableOpacity key = {item.id} onPress = {() => alertItemName(item)}><User index = {index} name = {item.name} address = {item.address}/></TouchableOpacity>
                })
            }
                </ScrollViewContainer>
        </Container>
    )
}
