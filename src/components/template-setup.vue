<template>
  <q-layout view="hHr LpR lFf">
    <q-toolbar
      slot="header"
      :color="theme"
    >
      <q-btn
        flat
        @click="backToTemplates"
      >
        <q-icon
          name="fa-chevron-left"
          size="20px"
        />
      </q-btn>
      <q-toolbar-title> {{ currentTemplate.title }} </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>
import { QBtn, QIcon, QLayout, QToolbar, QToolbarTitle } from 'quasar'
import {
  interfaceGetters,
  templatesGetters,
  templatesActions
} from '@state/helpers'
export default {
  components: {
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle
  },
  computed: {
    ...interfaceGetters,
    ...templatesGetters
  },
  methods: {
    ...templatesActions,
    backToTemplates() {
      this.updateCurrentTemplate(null)
      this.$router.push('/templates')
    }
  }
}
</script>
