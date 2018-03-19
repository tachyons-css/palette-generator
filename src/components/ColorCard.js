import React from 'react'
import chroma from 'chroma-js'
import contrast from 'get-contrast'



import Card from './Div'
import Div from './Div'
import P from './P'

const ColorCard = ({color, ...props}) => {

var colorObj = chroma(color)
var whiteRatio = contrast.ratio('#ffffff', color).toFixed(2)
var blackRatio  = contrast.ratio('#000000', color).toFixed(2)

  return (
    <Card>
      <Div pt={6} pr={5} bg={color} />
      <P fontSize={0}>{props.children}</P>
    </Card>
  )
}

export default ColorCard

