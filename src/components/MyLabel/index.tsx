import React from 'react'
import { Container, Label } from './styles'

interface IText {
    value: string;
}


export function MyLabel({value}: IText) {
    return (
        <Container>
            <Label
                placeholderTextColor="black">{value}</Label>
        </Container>
    )
}