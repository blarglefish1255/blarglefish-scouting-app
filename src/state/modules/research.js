import TheBlueAlliance from '@providers/the-blue-alliance'

export default {
  state: {
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
    getTeamAttributes({ state }, teamNumber) {
      return TheBlueAlliance({ endpoint: `team/frc${teamNumber}` }).then(
        team => team
      )
    },
    updateCurrentSelectedTeam({ commit }, newTeam) {
      commit('SET_CURRENT_SELECTED_TEAM', newTeam)
    }
  }
}
