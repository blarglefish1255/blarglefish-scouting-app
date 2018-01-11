import { mapState, mapActions } from 'vuex'

export const eventGetters = {
  ...mapState({
    events: state => state.events.eventsList,
    teams: state => state.events.teamsList
  })
}

export const eventActions = mapActions([
  'getTeamList',
  'getEventList'
])

export const interfaceGetters = {
  ...mapState({
    displayScouting: state => state.interface.displayScouting,
    displayGM: state => state.interface.displayGM,
    displaySettings: state => state.interface.displaySettings
  })
}

export const interfaceActions = mapActions([
  'updateDisplayScouting',
  'updateDisplayGM',
  'updateDisplaySettings'
])
