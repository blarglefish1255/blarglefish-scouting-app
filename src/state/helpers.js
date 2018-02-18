import { mapState, mapActions } from 'vuex'

export const researchGetters = {
  ...mapState({
    teams: state => state.research.teamsList,
    currentSelectedTeam: state => state.research.currentSelectedTeam
  })
}

export const researchActions = mapActions([
  'getTeamAttributes',
  'updateCurrentSelectedTeam'
])

export const scoutingGetters = {
  ...mapState({
    scoutedTeams: state => state.scouting.scoutedTeams
  })
}

export const scoutingActions = mapActions([
  'initScoutedTeams',
  'addScoutedTeams',
  'clearScoutedTeams',
  'addMatch',
  'deleteScoutedTeam',
  'updateMatchElement'
])

export const interfaceGetters = {
  ...mapState({
    theme: state => state.interface.theme
  })
}

export const interfaceActions = mapActions(['updateTheme'])

export const templatesGetters = {
  ...mapState({
    currentActiveTemplateIndex: state =>
      state.templates.currentActiveTemplateIndex,
    currentSelectedTemplateIndex: state =>
      state.templates.currentSelectedTemplateIndex,
    templates: state => state.templates.templates
  })
}

export const templatesActions = mapActions([
  'initTemplates',
  'addTemplate',
  'addNewTemplateElement',
  'updateCurrentTemplate',
  'updateCurrentSelectedTemplateIndex',
  'updateCurrentActiveTemplate',
  'updateCurrentActiveTemplateIndex',
  'updateElement'
])
