<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { templatesActions } from '@state/helpers'
export default {
  created() {
    this.initTemplates()
  },
  methods: {
    ...templatesActions
  }
}
</script>
