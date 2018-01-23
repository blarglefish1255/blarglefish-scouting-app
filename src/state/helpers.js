import { mapState, mapActions } from 'vuex'

export const researchGetters = {
  ...mapState({
    teams: state => state.research.teamsList
  })
}

export const researchActions = mapActions(['getTeamList'])

export const interfaceGetters = {
  ...mapState({})
}

export const interfaceActions = mapActions([])
