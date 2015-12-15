import { TAB_NAV } from '../mutations-types'

export const navigatorInitialState = {
  index: 0,
}

export const navigatorMutations = {
  [TAB_NAV](state, index) {
    state.navigator.index = index
  }
}
