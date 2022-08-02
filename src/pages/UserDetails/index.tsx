import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { TopNoPaddingContainer } from '../../components/TopNoPaddingContainer'
import { MyTextView } from '../../components/MyTextView'
import { MyLabel } from '../../components/MyLabel'
import { BottomButton } from '../../components/BottomButton'
import { DefaultContainer } from '../../components/DefaultContainer'
import { DeleteButton } from '../../components/DeleteButton'

export function UserDetails ({ route, navigation})  {

    const [itemId, setItemId] = useState('')
    const [fieldName, setFieldName] = useState()
    const [fieldAddress, setFieldAddress] = useState()

    useEffect(() => {
        setItemId(route.params.itemId)
        setFieldName(route.params.name)
        setFieldAddress(route.params.address)
    })

    function editUser() {
        console.log('edit user --->', itemId)
        navigation.navigate('AddUser', {
            isEdit: true,
            itemId: itemId,
            name: fieldName,
            address: fieldAddress
        })
    }

    function deleteUser() {
        console.log('edit user --->', itemId)
        Alert.alert("Are your sure?",
        "Are you sure you want to delete this user?",
        [
          // The "Yes" button
          {
            text: "Yes",
            onPress: () => {
                firestore()
                .collection('users')
                .doc(itemId)
                .delete()
                .then(() => {
                  console.log('User deleted!');
                  navigation.navigate('ListUser')
                });
            },
          },
          // The "No" button
          // Does nothing but dismiss the dialog when tapped
          {
            text: "No",
          },
        ])
    }

    return (
        <DefaultContainer>
            <TopNoPaddingContainer>
                <MyLabel
                    value='Name'
                />
                <MyTextView
                    value={fieldName}
                />
                <MyLabel
                    value='Address'
                />
                <MyTextView
                    value={fieldAddress}
                />
            </TopNoPaddingContainer>
            <BottomButton
                    onPress={() => editUser()}
                    label="Edit"
                />
            <DeleteButton
                onPress={() => deleteUser()}
                label="Delete"
            />
        
        </DefaultContainer>
    )
}
