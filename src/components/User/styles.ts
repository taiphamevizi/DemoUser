import styled from 'styled-components/native'
import Colors from '../../utilities/Color'

export const Container = styled.View`
    background: ${Colors.item_background};
    padding: 15px;
    margin: ${(props) => props.index === 0 ? '2px' : '0px' } 2px 5px 2px;
    border-radius: 10px;
`

export const NameContainer = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${Colors.main_text_color};
`

export const AddressContainer = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${Colors.main_text_color};
`