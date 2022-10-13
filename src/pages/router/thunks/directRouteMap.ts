import { pushState, replaceState } from '../history'
import { setLocation } from '../slices'
import type { TypedDispatch, RootState } from '../../../store'

const directRouteMap = () => {
  return function(typedDispatch: TypedDispatch) {

    const route =  location.pathname
    
    if (route === '/') {
      replaceState('top', `/`)
      typedDispatch(setLocation('top'))
      return
    }
    if (route === '/resume') {
       replaceState('resume', `/resume`)
       typedDispatch(setLocation('resume'))
      return
    }
    if (route === '/skills') {
      replaceState('skills', `/skills`)
      typedDispatch(setLocation('skills'))
      return
    }
    if (route === '/portfolio') {
      replaceState('portfolio', `/portfolio`)
      typedDispatch(setLocation('portfolio'))
      return
    }
    if (route === '/fragments') {
      replaceState('fragments', `/fragments`)
      typedDispatch(setLocation('fragments'))
      return
    }

    typedDispatch(setLocation('blank'))
  }
}

export default directRouteMap


