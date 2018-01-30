<template>
  <q-layout>
    <q-toolbar :color="theme">
      <q-btn
        icon="fa-chevron-left"
        @click="goBackToScouting"
        flat
      />
      <q-toolbar-title> {{ currentSelectedTeam.nickname }} </q-toolbar-title>
    </q-toolbar>
    <p>{{ currentSelectedTeam.key }}</p>
  </q-layout>
</template>

<script>
import { QBtn, QLayout, QToolbar, QToolbarTitle } from 'quasar'
import {
  interfaceGetters,
  researchGetters,
  researchActions
} from '@state/helpers'
export default {
  components: {
    QBtn,
    QLayout,
    QToolbar,
    QToolbarTitle
  },
  computed: {
    ...interfaceGetters,
    ...researchGetters
  },
  methods: {
    ...researchActions,
    goBackToScouting() {
      this.updateCurrentSelectedTeam('')
      this.$router.push('/scouting')
    }
  }
}
</script>
