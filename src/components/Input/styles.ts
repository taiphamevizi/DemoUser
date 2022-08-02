import styled from 'styled-components/native'
import Colors from '../../utilities/Color'

export const Container = styled.View`

`

export const TextInput = styled.TextInput`
    width: 100%
    margin-bottom: 15px
    padding-bottom: 15px
    align-self: center;
    border-color: ${Colors.border_color};
    border-bottom-width: 1px;
    color: ${Colors.main_text_color};
    background: ${Colors.item_background};
    padding: 15px;
    border-radius: 10px;
`