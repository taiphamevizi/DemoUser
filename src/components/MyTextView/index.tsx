import React from 'react'
import { Container, TextView } from './styles'

interface IText {
    value: string;
}


export function MyTextView({value}: IText) {
    return (
        <Container>
            <TextView
                placeholderTextColor="black">{value}</TextView>
        </Container>
    )
}