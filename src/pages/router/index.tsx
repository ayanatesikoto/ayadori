import { useEffect } from 'react'
import styled from 'styled-components'
import App from '../app'
import { back } from './history'
import directRouteMap from './thunks/directRouteMap'
import { useTypedSelector, useTypedDispatch } from '../../hooks'
import { setView } from "../app/slices"
import type { View } from '../app'
import type { Location } from './slices'
import { openTop, turnBlank, turnFragments, turnPortfolio, turnResume, turnSkills, turnTop } from './thunks/pageTransitions'

const Root = styled.div`
  height: 100%;
  width: 100%;
`

export type State = {
  location: Location
  children: typeof App,
}

const Router = () => {

  const typedDispatch = useTypedDispatch()

  useEffect(() => {
    window.onpopstate = function(event) {
      
      if (event.state && event.state.popName === 'top') {
        typedDispatch(turnTop())
        return
      }
      if (event.state && event.state.popName === 'resume') {
        typedDispatch(turnResume())
        return
      }
      if (event.state && event.state.popName === 'skills') {
        typedDispatch(turnSkills())
        return
      }
      if (event.state && event.state.popName === 'portfolio') {
        typedDispatch(turnPortfolio())
        return
      }
      if (event.state && event.state.popName === 'fragments') {
        typedDispatch(turnFragments())
        return
      }
      if (event.state && event.state.popName === 'blank') {
        typedDispatch(turnBlank())
        return
      }
      if (event.state) {
        typedDispatch(turnBlank())
        return
      }
      // 外部のサイトから来た時で、そこに戻るとき
      if (!event.state) {
        back()
      }
    }

    typedDispatch(directRouteMap())
  }, [])
  
  const location = useTypedSelector(state => state.router.location)  

  let view: View = 'blank'  
  switch (location) {
    case 'top':
      view = 'top'
      break
    case 'resume':
      view = 'resume'
      break
    case 'skills':
      view = 'skills'
      break
    case 'portfolio':
      view = 'portfolio'
      break
    case 'fragments':
      view = 'fragments'
      break
    default:
      break
  }

  return (
    <Root>
      <App view={view} />
    </Root>
    )
  }
  
  export default Router