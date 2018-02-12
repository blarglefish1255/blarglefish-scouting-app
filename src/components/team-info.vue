<template>
  <q-layout>
    <q-toolbar :color="theme">
      <q-btn
        icon="fa-chevron-left"
        @click="goBackToScouting"
        flat
      />
      <q-toolbar-title> {{ currentSelectedTeam.nickname }} </q-toolbar-title>
      <q-btn
        flat
        ref="target"
      >
        <q-icon name="fa-ellipsis-h"/>
        <q-popover
          ref="popover"
        >
          <q-list
            style="min-width: 100px;"
            link
          >
            <q-item @click="addMatchToTeam">Add Match</q-item>
          </q-list>
        </q-popover>
      </q-btn>
    </q-toolbar>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QIcon,
  QItem,
  QLayout,
  QList,
  QPopover,
  QToolbar,
  QToolbarTitle
} from 'quasar'
import {
  interfaceGetters,
  researchGetters,
  researchActions,
  scoutingGetters
} from '@state/helpers'
export default {
  components: {
    QBtn,
    QIcon,
    QItem,
    QLayout,
    QList,
    QPopover,
    QToolbar,
    QToolbarTitle
  },
  computed: {
    ...interfaceGetters,
    ...researchGetters,
    ...scoutingGetters
  },
  methods: {
    ...researchActions,
    goBackToScouting() {
      this.updateCurrentSelectedTeam('')
      this.$router.push('/scouting')
    },
    addMatchToTeam() {
      this.$refs.popover.close()
      this.addMatch({
        team: this.currentSelectedTeam,
        template: this.currentSelectedTemplate
      })
    }
  }
}
</script>
