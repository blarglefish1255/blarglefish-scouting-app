import TheBlueAlliance from '@providers/the-blue-alliance'

export default {
  state: {
    eventsList: {},
    teamsList: {}
  },
  mutations: {
    SET_EVENT_LIST (state, events) {
      state.eventsList = events
    },
    SET_TEAMS_LIST (state, teams) {
      state.teamsList = teams
    }
  },
  actions: {
    getEventList ({ commit }) {
      TheBlueAlliance({ endpoint: 'events/2017' }).then(events => {
        commit('SET_EVENT_LIST', events)
      })
    },
    getTeamList ({ commit }, pageNumber) {
      TheBlueAlliance({ endpoint: `teams/${pageNumber}` }).then(teams => {
        commit('SET_TEAMS_LIST', teams)
      })
    }
  }
}
