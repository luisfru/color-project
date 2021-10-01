import React from 'react'

import ColorCard from '../components/ColorCard'

import { colorNameList } from '../data/colors'
 
import { StyleSquare } from '../styles/card'

const ColorCardList = () => {
  return (
    <StyleSquare>
      {colorNameList.map((color) =>  
       <ColorCard key={color.id} {...color}/>
       
      )}
    </StyleSquare>
  );
}

export default ColorCardList;
