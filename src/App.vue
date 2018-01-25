<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { templatesActions, scoutingActions } from '@state/helpers'
export default {
  created() {
    this.initTemplates()
    this.initScoutedTeams()
  },
  methods: {
    ...templatesActions,
    ...scoutingActions
  }
}
</script>
