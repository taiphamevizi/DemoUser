import styled from 'styled-components/native'
import Colors from '../../utilities/Color'

export const Container = styled.View`

`

export const Button = styled.TouchableOpacity`
    background: ${Colors.main_button_background};
    margin-top: 15px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 15px;
`

export const ButtonText = styled.Text`
    color: ${Colors.main_button_text_color};
    font-weight: bold;
    text-transform: uppercase;
`