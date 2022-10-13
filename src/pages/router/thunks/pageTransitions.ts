import { pushState } from '../history'
import { setLocation } from '../slices'

export const openBlank = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    pushState('blank', `/`)
    dispatch(setLocation('blank'))
  }
}

export const turnBlank = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    dispatch(setLocation('blank'))
  }
}

export const openTop = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    pushState('top', `/`)
    dispatch(setLocation('top'))
  }
}

export const turnTop = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    dispatch(setLocation('top'))
  }
}

export const openResume = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    pushState('resume', `/resume`)
    dispatch(setLocation('resume'))
  }
}

export const turnResume = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    dispatch(setLocation('resume'))
  }
}

export const openSkills = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    pushState('skills', `/skills`)
    dispatch(setLocation('skills'))
  }
}

export const turnSkills = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    dispatch(setLocation('skills'))
  }
}

export const openPortfolio = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    pushState('portfolio', `/portfolio`)
    dispatch(setLocation('portfolio'))
  }
}

export const turnPortfolio = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    dispatch(setLocation('portfolio'))
  }
}

export const openFragments = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    pushState('fragments', `/fragments`)
    dispatch(setLocation('fragments'))
  }
}

export const turnFragments = () => {
  return function(dispatch: any, getState: any) {
    const state = getState()
    dispatch(setLocation('fragments'))
  }
}