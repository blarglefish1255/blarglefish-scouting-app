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
    },
    ADD_MATCH(state, matchInformation) {
      state.scoutedTeams[
        state.scoutedTeams.indexOf(matchInformation.team)
      ].matches.push(matchInformation.template)
    },
    UPDATE_MATCH(state, matchInformation) {
      state.scoutedTeams[
        state.scoutedTeams.indexOf(matchInformation.team)
      ].matches[matchInformation.currentMatchIndex].elements[
        matchInformation.elementIndex
      ].value =
        matchInformation.value
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
          ...team,
          matches: []
        }

        commit('ADD_SCOUTED_TEAMS', teamObject)
        LocalStorage.set('scoutedTeams', state.scoutedTeams)
      })
    },
    clearScoutedTeams({ commit }) {
      commit('CLEAR_SCOUTED_TEAMS')
      LocalStorage.remove('scoutedTeams')
    },
    addMatch({ state, commit }, matchInformation) {
      commit('ADD_MATCH', matchInformation)
      LocalStorage.set('scoutedTeams', state.scoutedTeams)
    },
    updateMatchElement({ state, commit }, matchInformation) {
      commit('UPDATE_MATCH', matchInformation)
      LocalStorage.set('scoutedTeams', state.scoutedTeams)
      console.log(state.scoutedTeams)
    }
  }
}
