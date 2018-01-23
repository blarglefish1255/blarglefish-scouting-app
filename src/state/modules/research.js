import TheBlueAlliance from '@providers/the-blue-alliance'

export default {
  state: {
    teamsList: {}
  },
  mutations: {
    SET_TEAMS_LIST(state, teams) {
      state.teamsList = teams
    }
  },
  actions: {
    getTeamList({ commit }, pageNumber) {
      TheBlueAlliance({ endpoint: `teams/${pageNumber}` }).then(teams => {
        commit('SET_TEAMS_LIST', teams)
      })
    }
  }
}
