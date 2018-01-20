import { mapState, mapActions } from 'vuex'

export const researchGetters = {
  ...mapState({
    teams: state => state.research.teamsList,
    currentSelectedTeam: state => state.research.currentSelectedTeam
  })
}

export const researchActions = mapActions([
  'getTeamList',
  'updateCurrentSelectedTeam'
])

export const interfaceGetters = {
  ...mapState({
    theme: state => state.interface.theme
  })
}

export const interfaceActions = mapActions(['updateTheme'])
