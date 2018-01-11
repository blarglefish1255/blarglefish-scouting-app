
export default {
  state: {
    displayScouting: false,
    displayGM: false,
    displaySettings: false
  },
  mutations: {
    SET_DISPLAY_SCOUTING (state, displayScouting) {
      state.displayScouting = displayScouting
    },
    SET_DISPLAY_GM (state, displayGM) {
      state.displayGM = displayGM
    },
    SET_DISPLAY_SETTINGS (state, displaySettings) {
      state.displaySettings = displaySettings
    }
  },
  actions: {
    updateDisplayScouting ({ commit }, displayScouting) {
      commit('SET_DISPLAY_SCOUTING', displayScouting)
    },
    updateDisplayGM ({ commit }, displayGM) {
      commit('SET_DISPLAY_GM', displayGM)
    },
    updateDisplaySettings ({ commit }, displaySettings) {
      commit('SET_DISPLAY_SETTINGS', displaySettings)
    }
  }
}
