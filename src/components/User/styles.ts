import styled from 'styled-components/native'

export const Container = styled.View`
    background: #FFF;
    padding: 15px;
    margin: ${(props) => props.index === 0 ? '20px' : '0px' } 20px 20px 20px;
    border-radius: 10px;
`

export const NameContainer = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000;
`

export const AddressContainer = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000;
`