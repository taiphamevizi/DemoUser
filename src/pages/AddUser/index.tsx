import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { Input } from '../../components/Input'
import { Loader } from '../../components/Loader'
import { TopNoPaddingContainer } from '../../components/TopNoPaddingContainer'
import { BottomButton } from '../../components/BottomButton'
import { DefaultContainer } from '../../components/DefaultContainer'
import { MyLabel } from '../../components/MyLabel'

export function AddUser ({ route, navigation})  {

    const [isLoading, setIsLoading] = useState(false)
    const [isEdit] = useState(route.params.isEdit)
    const [itemId, setItemId] = isEdit ? useState(route.params.itemId) : useState('')
    const [fieldName, setFieldName] = isEdit ? useState(route.params.name) : useState('')
    const [fieldAddress, setFieldAddress] = isEdit ? useState(route.params.address) : useState('')
    
    
    if(isLoading){
        if(isLoading){
            return <Loader />
        }  
    } 

    useEffect(() => {
        if(isEdit) {
            navigation.setOptions({ title: 'Update User' })
        }
    })

    function clearFields() {
        setFieldName('')
        setFieldAddress('')
    }

    function addUser() {
        if(fieldName === '' || fieldAddress === '') {
            Alert.alert('Error', 'All fields are required.')
          } else {
                if(isEdit) {
                    console.log('updating user --->')
                    firestore()
                    .collection('users')
                    .doc(itemId)
                    .update({
                        name: fieldName,
                        address: fieldAddress,
                    })
                    .then(() => {
                        console.log('User updated!');
                        Alert.alert('Success', 'User has been updated successfully.')
                        navigation.navigate('ListUser')
                    });
                } else {
                    console.log('adding user --->')
                    firestore()
                    .collection('users')
                    .add({
                        name: fieldName,
                        address: fieldAddress,
                    })
                    .then(() => {
                        console.log('User added!');
                        Alert.alert('Success', 'User has been added successfully.')
                        navigation.navigate('ListUser')

                    });
                }
          }
    }

    return (
        <DefaultContainer>
            {
                isEdit ?
                <TopNoPaddingContainer>
                    <MyLabel
                        value='Name'
                    />
                    <Input
                        placeholder="Name"
                        value={fieldName}
                        onChangeText={(val) => setFieldName(val)}
                    />
                    <MyLabel
                        value='Address'
                    />
                    <Input
                        placeholder="Address"
                        value={fieldAddress}
                        onChangeText={(val) => setFieldAddress(val)}
                    />
                </TopNoPaddingContainer>
                :
                <TopNoPaddingContainer>
                    <Input
                        placeholder="Name"
                        value={fieldName}
                        onChangeText={(val) => setFieldName(val)}
                    />      
                    <Input
                        placeholder="Address"
                        value={fieldAddress}
                        onChangeText={(val) => setFieldAddress(val)}
                    />
                </TopNoPaddingContainer>
            }
            <BottomButton
                onPress={() => addUser()}
                label= {isEdit ? "Update" : "Add"}
            />
        
        </DefaultContainer>
    )
}
