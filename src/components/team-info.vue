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
            <q-item @click="exportInformation">Export</q-item>
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
        <TemplateElements
          :elements="currentSelectedTeam.matches[selectedMatch].elements"
          @change="updateCurrentMatchElement"
        />
      </q-card-main>
    </q-card>
  </q-layout>
</template>

<script>
import {
  Dialog,
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
import convert from '@services/convertToCSV'
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
  methods: {
    ...researchActions,
    ...scoutingActions,
    goBackToScouting() {
      this.updateCurrentSelectedTeam('')
      this.$router.push('/')
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
    },
    updateCurrentMatchElement(event) {
      const matchInformation = {
        team: this.currentSelectedTeam,
        currentMatchIndex: this.selectedMatch,
        elementIndex: event.index,
        value: event.value
      }
      this.updateMatchElement(matchInformation)
    },
    exportInformation() {
      Dialog.create({
        title: 'Export',
        stackButtons: true,
        buttons: [
          {
            label: 'Excel',
            handler: () => {
              let csv = ''
              for (
                let i = 0;
                i < this.currentSelectedTeam.matches.length;
                i++
              ) {
                csv += convert({
                  data: this.currentSelectedTeam.matches[i].elements
                })
                csv += '\n'
              }
              let hiddenElement = document.createElement('a')
              hiddenElement.href =
                'data:text/csv;charset=utf-8,' + encodeURI(csv)
              hiddenElement.target = '_blank'
              hiddenElement.download = `${
                this.currentSelectedTeam.team_number
              }-${this.currentSelectedTeam.nickname}-${new Date(
                Date.now()
              )}.csv`
              hiddenElement.click()
            }
          }
        ]
      })
    }
  }
}
</script>
