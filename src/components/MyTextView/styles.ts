import styled from 'styled-components/native'
import Colors from '../../utilities/Color'

export const Container = styled.View`

`

export const TextView = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${Colors.main_text_color};
    border-color: ${Colors.border_color};
    border-bottom-width: 1px;
    background: ${Colors.item_background};
    padding: 15px;
    border-radius: 10px;
`