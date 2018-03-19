import React from 'react'
import glamorous from 'glamorous'
import chroma from 'chroma-js'
import Div from '../components/Div'
import H1 from '../components/H1'
import ColorCard from '../components/ColorCard'

const MODE = 'lab'
const STEPS = 12

const RED = 'hsl(352, 74%, 50%)'
const REDLIGHT = 'hsl(355, 87.5%, 87.5%)'
const REDDARK = 'hsl(355, 87.5%, 12%)'
const ORANGE = 'hsl(20, 98%, 50%)'
const ORANGELIGHT = 'hsl(20, 98%, 90%)'
const ORANGEDARK = 'hsl(20, 98%, 22%)'
const YELLOW = 'hsl(49, 100%, 50%)'
const YELLOWLIGHT = 'hsl(49, 100%, 87.5%)'
const YELLOWDARK = 'hsl(49, 100%, 25%)'
const GREEN = 'hsl(150, 87.5%, 50%)'
const GREENLIGHT = 'hsl(150, 87.5%, 87.5%)'
const GREENDARK = 'hsl(150, 87.5%, 14%)'
const TEAL = 'hsl(174, 100%, 50%)'
const TEALLIGHT = 'hsl(174, 100%, 90%)'
const TEALDARK = 'hsl(174, 100%, 12%)'
const CYAN = 'hsl(190, 98%, 58%)'
const CYANLIGHT = 'hsl(180, 98%, 89%)'
const CYANDARK = 'hsl(180, 98%, 16%)'
const BLUE = 'hsl(208, 100%, 50%)'
const BLUELIGHT = 'hsl(208, 100%, 87.5%)'
const BLUEDARK = 'hsl(208, 100%, 16%)'
const INDIGO = 'hsl(256, 94%, 48%)'
const INDIGOLIGHT = 'hsl(256, 94%, 90%)'
const INDIGODARK = 'hsl(256, 94%, 31%)'
const PURPLE = 'hsl(280, 92%, 50%)'
const PURPLELIGHT = 'hsl(280, 92%, 87.5%)'
const PURPLEDARK = 'hsl(280, 92%, 24%)'
const PINK = 'hsl(330, 96%, 50%)'
const PINKLIGHT = 'hsl(330, 96%, 87.5%)'
const PINKDARK = 'hsl(330, 96%, 20%)'
const WHITE = '#fff'
const BLACK = '#000'
const GRAY = 'hsl(208, 20%, 20%)'


var tealScale = chroma.scale([TEALLIGHT, TEAL, TEALDARK]).correctLightness().mode(MODE).colors(STEPS)
var cyanScale = chroma.scale([CYANLIGHT, CYAN, CYANDARK]).correctLightness().mode(MODE).colors(STEPS)
var blueScale = chroma.scale([BLUELIGHT, BLUE, BLUEDARK]).correctLightness().mode(MODE).colors(STEPS)
var purpleScale = chroma.scale([PURPLELIGHT, PURPLE, PURPLEDARK]).correctLightness().mode(MODE).colors(STEPS)
var indigoScale = chroma.scale([INDIGOLIGHT, INDIGO, INDIGODARK]).correctLightness().mode(MODE).colors(STEPS)
var pinkScale = chroma.scale([PINKLIGHT, PINK, PINKDARK]).correctLightness().mode(MODE).colors(STEPS)
var redScale = chroma.scale([REDLIGHT, RED, REDDARK]).correctLightness().mode(MODE).colors(STEPS)
var orangeScale = chroma.scale([ORANGELIGHT, ORANGE, ORANGEDARK]).correctLightness().mode(MODE).colors(STEPS)
var yellowScale = chroma.scale([YELLOWLIGHT, YELLOW, YELLOWDARK]).correctLightness().mode(MODE).colors(STEPS)
var greenScale = chroma.scale([GREENLIGHT, GREEN, GREENDARK]).correctLightness().mode(MODE).colors(STEPS)
var grayScale = chroma.scale(['#f7f7f7', GRAY, BLACK]).correctLightness().mode(MODE).colors(STEPS)

console.log(greenScale)

var uicolors = []


export default class Home extends React.Component {
  componentDidMount() {
    this.jumpToHash(this.props.location.hash)
  }

  componentDidUpdate() {
    this.jumpToHash(this.props.location.hash)
  }

  // Needed as react-router can't handle fragment links ;—;
  jumpToHash(hash) {
    if (!hash) return
    const element = document.getElementById(hash.slice(1))
    if (element) {
      element.scrollIntoView()
    }
  }

  render () {
    return (
      <Div px={5} py={5}>
        <Div style={{display: 'flex', maxWidth: '100%' }} w={1}>
          <Div style={{ display: 'flex' }} w={1/2} px={4}>
            {greenScale.reverse().map((color, i) => {
              return <ColorCard key={i} color={color} py={5} children={color} />
            })}
          </Div>
          <Div w={1/2} px={4} style={{ display: 'flex' }}>
            {tealScale.reverse().map((color, i) => {
              return <ColorCard key={i} color={color} py={5} children={color} /> 
            })}
          </Div>
        </Div>
        <Div style={{display: 'flex', maxWidth: '100%' }} w={1}>
          <Div style={{display: 'flex' }} w={1/2} px={4}>
        {cyanScale.reverse().map((color, i) => {
          return <ColorCard key={i} color={color} py={5} children={color} /> 
        })}
          </Div>
          <Div w={1/2} px={4} style={{ display: 'flex' }}>
        {blueScale.reverse().map((color, i) => {
          return <ColorCard key={i} color={color} py={5} children={color} /> 
        })}
      </Div>
      </Div>
        <Div style={{display: 'flex', maxWidth: '100%' }} w={1}>
        {indigoScale.reverse().map((color, i) => {
          return <ColorCard key={i} color={color} py={5} children={color} /> 
        })}
        {purpleScale.reverse().map((color, i) => {
          return <ColorCard key={i} color={color} py={5} children={color} /> 
        })}
      </Div>
        <Div style={{display: 'flex', maxWidth: '100%' }} w={1}>
        {pinkScale.reverse().map((color, i) => {
          return <ColorCard key={i} color={color} py={5} children={color} /> 
        })}
        {redScale.reverse().map((color, i) => {
          return <ColorCard key={i} color={color} py={5} children={color} /> 
        })}
      </Div>
        <Div style={{display: 'flex', maxWidth: '100%' }} w={1}>
        {orangeScale.reverse().map((color, i) => {
          return <ColorCard key={i} color={color} py={5} children={color}/> 
        })}
        {yellowScale.reverse().map((color, i) => {
          return <ColorCard key={i} color={color} py={5} children={color} /> 
        })}
      </Div>
      <Div mt={4} style={{display: 'flex', maxWidth: '100%' }} w={1}>
        {grayScale.reverse().map((color, i) => {
          return <ColorCard key={i} children={color} color={color} py={5} /> 
        })}
      </Div>
      </Div>
    );
  }
}
