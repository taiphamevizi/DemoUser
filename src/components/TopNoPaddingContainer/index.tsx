import React from 'react'

import { Container } from './styles'

export function TopNoPaddingContainer ({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}