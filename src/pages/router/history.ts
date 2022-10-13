import type { Location } from './slices'

export const pushState = (location: Location, path: string) => {
  history.pushState({popName: location}, '', path)
}

export const replaceState = (location: Location, path: string) => {
  history.replaceState({popName: location}, '', path)
}

export const back = () => {
  history.back()
}