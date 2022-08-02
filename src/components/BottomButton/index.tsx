import React from 'react'
import { Container, Button, ButtonText } from './styles'

interface IButton {
    onPress: () => void;
    label: string;
}

export function BottomButton ({onPress, label}: IButton){

    return (
        <Container>
            <Button
                onPress={onPress}
            > 
                <ButtonText>{ label }</ButtonText>
            </Button>
        </Container>
    )
}

