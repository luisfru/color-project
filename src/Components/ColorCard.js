import {StyleCard,StyleTitle, StyleText,StyleBackgroundColor} from '../styles/card'
const ColorCard = ({name,hex,rgb,hsl }) => {
    return(
       <StyleCard>
    <StyleBackgroundColor style={{backgroundColor: hex}}></StyleBackgroundColor>
    <StyleTitle>{name}</StyleTitle> 
        <StyleText>{hex}</StyleText>
        <StyleText>rgb{rgb}</StyleText>
        <StyleText>hsl{hsl}</StyleText>
    </StyleCard>
 )
}

export default ColorCard