import React from 'react'

import { Container, NameContainer, AddressContainer } from './styles'

interface IUser{
    index: number;
    name: string;
    address: string;
}

export function User({index, name, address}: IUser){
    return (
        <Container index={index}>
            <NameContainer>{ name }</NameContainer>
            <AddressContainer>{ address }</AddressContainer>
        </Container>
    )
}