import { LocalStorage } from 'quasar'

export default {
  state: {
    scoutedTeams: []
  },
  mutations: {
    ADD_SCOUTED_TEAMS(state, newScoutedTeam) {
      state.scoutedTeams.push(newScoutedTeam)
    },
    INIT_SCOUTED_TEAMS(state, scoutedTeams) {
      state.scoutedTeams = scoutedTeams
    }
  },
  actions: {
    initScoutedTeams({ commit }) {
      let scoutedTeams

      if (LocalStorage.get.item('scoutedTeams')) {
        scoutedTeams = LocalStorage.get.item('scoutedTeams')
      } else {
        scoutedTeams = []
      }

      commit('INIT_SCOUTED_TEAMS', scoutedTeams)
    },
    addScoutedTeams({ state, commit }, newScoutedTeam) {
      commit('ADD_SCOUTED_TEAMS', newScoutedTeam)
      LocalStorage.set('scoutedTeams', state.scoutedTeams)
    }
  }
}
