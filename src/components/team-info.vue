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

    <q-card v-if="currentSelectedTeam.matches.length > 0">
      <q-card-title>
        <q-btn
          flat
          @click="decreaseSelectedMatch"
        >
          <q-icon name="fa-chevron-left"/>
        </q-btn>
        Match {{ selectedMatch + 1 }}
        <q-btn
          flat
          @click="increaseSelectedMatch"
        >
          <q-icon name="fa-chevron-right"/>
        </q-btn>
      </q-card-title>
      <q-card-main>
        <TemplateElements :elements="currentSelectedTeam.matches[selectedMatch].elements"/>
      </q-card-main>
    </q-card>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QCard,
  QCardTitle,
  QCardMain,
  QIcon,
  QItem,
  QLayout,
  QList,
  QPopover,
  QToolbar,
  QToolbarTitle
} from 'quasar'
import TemplateElements from './template-elements'
import {
  interfaceGetters,
  researchGetters,
  researchActions,
  scoutingGetters,
  scoutingActions,
  templatesGetters
} from '@state/helpers'
export default {
  components: {
    QBtn,
    QCard,
    QCardTitle,
    QCardMain,
    QIcon,
    QItem,
    QLayout,
    QList,
    QPopover,
    QToolbar,
    QToolbarTitle,
    TemplateElements
  },
  data() {
    return {
      selectedMatch: 0
    }
  },
  computed: {
    ...interfaceGetters,
    ...researchGetters,
    ...scoutingGetters,
    ...templatesGetters
  },
  created() {
    console.log(this.currentSelectedTeam)
  },
  methods: {
    ...researchActions,
    ...scoutingActions,
    goBackToScouting() {
      this.updateCurrentSelectedTeam('')
      this.$router.push('/scouting')
    },
    addMatchToTeam() {
      this.$refs.popover.close()
      this.addMatch({
        team: this.currentSelectedTeam,
        template: this.templates[this.currentActiveTemplateIndex]
      })
    },
    increaseSelectedMatch() {
      if (!this.currentSelectedTeam.matches[this.selectedMatch + 1]) return
      this.selectedMatch = this.selectedMatch + 1
    },
    decreaseSelectedMatch() {
      if (!this.currentSelectedTeam.matches[this.selectedMatch - 1]) return
      this.selectedMatch = this.selectedMatch - 1
    }
  }
}
</script>
