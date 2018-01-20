import { LocalStorage } from 'quasar'

export default {
  state: {
    theme: LocalStorage.get.item('interface.theme') || 'tertiary',
    themeSelections: [
      {
        // color store here
      }
    ],
    displayScouting: false,
    displayGM: false,
    displaySettings: false
  },
  mutations: {
    SET_DISPLAY_SCOUTING(state, displayScouting) {
      state.displayScouting = displayScouting
    },
    SET_DISPLAY_GM(state, displayGM) {
      state.displayGM = displayGM
    },
    SET_DISPLAY_SETTINGS(state, displaySettings) {
      state.displaySettings = displaySettings
    },
    SET_THEME(state, newTheme) {
      state.theme = newTheme
    }
  },
  actions: {
    updateDisplayScouting({ commit }, displayScouting) {
      commit('SET_DISPLAY_SCOUTING', displayScouting)
    },
    updateDisplayGM({ commit }, displayGM) {
      commit('SET_DISPLAY_GM', displayGM)
    },
    updateDisplaySettings({ commit }, displaySettings) {
      commit('SET_DISPLAY_SETTINGS', displaySettings)
    },
    updateTheme({ state, commit }, newTheme) {
      commit('SET_THEME', newTheme)
      LocalStorage.set('interface.theme', state.theme)
    }
  }
}
