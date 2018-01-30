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
    },
    CLEAR_SCOUTED_TEAMS(state) {
      state.scoutedTeams = []
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
    addScoutedTeams({ state, commit, dispatch }, newScoutedTeamNumber) {
      dispatch('getTeamAttributes', newScoutedTeamNumber).then(team => {
        const teamObject = {
          ...team
        }

        commit('ADD_SCOUTED_TEAMS', teamObject)
        LocalStorage.set('scoutedTeams', state.scoutedTeams)
      })
    },
    clearScoutedTeams({ commit }) {
      commit('CLEAR_SCOUTED_TEAMS')
      LocalStorage.remove('scoutedTeams')
    }
  }
}
