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

export const scoutingGetters = {
  ...mapState({
    scoutedTeams: state => state.scouting.scoutedTeams
  })
}

export const scoutingActions = mapActions([
  'initScoutedTeams',
  'addScoutedTeams'
])

export const interfaceGetters = {
  ...mapState({
    theme: state => state.interface.theme
  })
}

export const interfaceActions = mapActions(['updateTheme'])

export const templatesGetters = {
  ...mapState({
    currentTemplate: state => state.templates.currentTemplate,
    templates: state => state.templates.templates
  })
}

export const templatesActions = mapActions([
  'initTemplates',
  'addTemplate',
  'updateCurrentTemplate'
])
