import { useDispatch, useSelector } from "react-redux"
import styled, { keyframes } from 'styled-components'
import pictureOfAya from './assets/aya.png'
import ayaKid from './assets/ayakid.png'
import { useTypedDispatch, useTypedSelector } from '../../hooks'
import { setLocation } from "../router/slices"
import { setView } from "./slices"
import React, { useEffect, useState } from 'react';
import Top from '../top'
import History from '../history'
import Portfolio from "../portfolio"
import Fragments from "../fragments"
import Skills from "../skills"
import Resume from "../resume"
import Blank from "../blank"

export type View =  'blank' | 'top' | 'resume' | 'skills' | 'portfolio' | 'fragments'

type Props = {
  view: View,
}

export type State = {
  view: View,
}

const AppRoot = styled.main`
  position: relative;
  display: grid;
  grid-template-areas: 'Roof Roof Roof Space'
                       'BackFront Content Spine Space';
  grid-template-rows: 0.2rem calc(100% - 0.2rem);
  grid-template-columns: 1fr max-content 4.5rem 1fr;
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  @media (max-width: 479px) {
    grid-template-areas: 'Roof'
                         'Content';
    grid-template-rows: 0.2rem calc(100% - 0.2rem);
    grid-template-columns: 100%;
  }
`
const Spine = styled.header`
  grid-area: Spine;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: hsl(0deg 37% 52%);
  box-sizing: border-box;
  position: relative;
`
const BookTitle = styled.h1`
  display: flex;
  font-family: 'Kaisei Opti', serif;
  color: hsl(0deg 100% 98%);
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 1.4rem;
  margin: 0;
  border: 0;
  letter-spacing: 0.05rem;
  font-weight: 100;
`
const Author = styled.span`
  margin-top: -7rem;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
`
const Tomoda = styled.span`
  
`
const Aya = styled.span`
  grid-area: FirstName;
  color: hsl(325deg 34% 54%);
  font-size: 4rem;
`
const Roof = styled.aside`
  grid-area: Roof;
  height: 0.2rem;
  
  background-color: hsl(0deg 37% 52%);
`
const BackFront = styled.footer`
  grid-area: BackFront;
  background-color: hsl(0deg 37% 52%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Emoji',sans-serif;
  color: hsl(0deg 40% 85%);
  font-size: 1.3rem;
`
const Content = styled.section`
  grid-area: Content;
  background-color: white;
  box-sizing: border-box;
  height: 100%;
  width: 54rem;
  overflow: auto;
  display: flex;
  @media (max-width: 479px) {
    width: 100%; 
  }
`
const Space = styled.div`
  grid-area: Space;
  background-color: white;
`
const Iro = styled.span`
  transform: rotate(8deg);
  display: flex;
  align-items: center;
  /* font-size: 1.6rem; */
`
const Iro2 = styled.span`
  transform: rotate(-8deg);
  background: linear-gradient(hsl(359deg 100% 91%),hsl(201deg 100% 94%));
  color: rgba(0,0,0,0);
  -webkit-background-clip: text;
  background-clip: text;
  /* font-size: 1.6rem; */
`
const Iro3 = styled.span`
  /* font-size: 1.5rem; */
`
const Dori = styled.span`
  /* font-size: 1.6rem; */  
`

const App = ({view}: Props) => {
  
  const typedDispatch = useTypedDispatch()
 
  useEffect(() => {
    typedDispatch(setView(view))
  })

  return (
    <AppRoot>
      <Space/>
      <Roof/>
      <Spine>
        <BookTitle>
          <Author>友田彩</Author>&emsp;の&emsp;<Iro>色</Iro>どり<Iro2>彩</Iro2>とり<Iro3>色</Iro3>とり<Dori>鳥</Dori>
        </BookTitle>
      </Spine>
      <Content>
        <Top present={ view === 'top' } />
        {
          view === 'resume' ? <Resume/> : 
          view === 'skills' ? <Skills/> : 
          view === 'portfolio' ? <Portfolio/> : 
          view === 'fragments' ? <Fragments/> : 
          view === 'top' ? null :  <Blank/>
        }
      </Content>
      <BackFront>
      🐓
      </BackFront>
    </AppRoot>
  )
}
  
  export default App