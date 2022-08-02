import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { Loader } from '../../components/Loader'
import { User } from '../../components/User'
import { TouchableOpacity } from 'react-native';
import {ScrollViewContainer} from './styles'
import { DefaultContainer } from '../../components/DefaultContainer'
import { BottomButton } from '../../components/BottomButton'

const qtdPerPage = 10

export function ListUser ({ navigation })  {

    const [isLoading, setIsLoading] = useState(false)
    const [fieldEmail, setFieldEmail] = useState('')
    const [fieldPassword, setFieldPassword] = useState('')
    const [limit, setLimit] = useState(qtdPerPage)
    const [totalUsers, setTotalUsers] = useState(0)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [screenHeightWithoutScrollView, setScreenHeightWithoutScrollView] = useState(140)


    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
        setTimeout(() => {
            setIsLoadingMore(false)
        }, 1000)
    }, [limit])

    
    if(isLoading){
        if(isLoading){
            return <Loader />
        }  
    } 

    function onResult(querySnapshot) {
        console.log('Got users collection result');
        setUsers(querySnapshot.docs.reverse());
      }
      
    function onError(error) {
        console.error(error);
    }

    async function getUsers() {
        firestore()
                        .collection('users')
                        .limit(limit)
                        .onSnapshot(onResult, onError)
        // const user = await firestore().collection('users').get().then(onResult, onError);

        // get total user
        firestore()
                        .collection('users')
                        .get()
                        .then (querySnapshot => {
                            setTotalUsers(querySnapshot.size)
                            console.log('Total users => ' + querySnapshot.size);
                        })
    }

    function itemClick(item) {
        // alert(item._data.name + "\n" + item._data.address)
        console.log("item = " + item._data.name)
        navigation.navigate('UserDetails', {
            itemId: item.id,
            name: item._data.name,
            address: item._data.address
        })
    }

    function addNew() {
        console.log("add new")
        navigation.navigate('AddUser', {isEdit: false})
    }

    return (
        <DefaultContainer>
            <ScrollViewContainer 
                screenHeightWithoutScrollView={screenHeightWithoutScrollView}
            >
                {
                users.map((item, index) => {
                     return <TouchableOpacity key = {item.id} onPress = {() => itemClick(item)}><User index = {index} name = {item._data.name} address = {item._data.address}/></TouchableOpacity>
                })
            }
            </ScrollViewContainer>
            <BottomButton
                onPress={() => addNew()}
                label="Add New"
            />
        </DefaultContainer>
    )
}
