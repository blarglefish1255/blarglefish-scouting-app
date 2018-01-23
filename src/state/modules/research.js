import TheBlueAlliance from '@providers/the-blue-alliance'

export default {
  state: {
    teamsList: {},
    currentSelectedTeam: ''
  },
  mutations: {
    SET_TEAMS_LIST(state, teams) {
      state.teamsList = teams
    },
    SET_CURRENT_SELECTED_TEAM(state, newTeamKey) {
      state.currentSelectedTeam = newTeamKey
    }
  },
  actions: {
    getTeamList({ commit }, pageNumber) {
      TheBlueAlliance({ endpoint: `teams/${pageNumber}` }).then(teams => {
        commit('SET_TEAMS_LIST', teams)
      })
    },
    updateCurrentSelectedTeam({ commit }, newTeam) {
      commit('SET_CURRENT_SELECTED_TEAM', newTeam)
    }
  }
}
