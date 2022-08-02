import styled from 'styled-components/native'
import Colors from '../../utilities/Color'

export const Container = styled.View`

`

export const Button = styled.TouchableOpacity`
    background: ${Colors.red_button_background};
    height: 50px;
    border-radius: 10px;
    padding: 15px;
    right: 0;
    bottom: 0;
    top:10px
    align-items: center;
`

export const ButtonText = styled.Text`
    color: ${Colors.main_button_text_color};
    font-weight: bold;
    text-transform: uppercase;
`