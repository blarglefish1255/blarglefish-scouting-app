<template>
  <div>
    <q-layout view="hHr LpR lFf">
      <q-toolbar
        slot="header"
        :color="theme"
      >
        <q-toolbar-title>
          Blarglefish Scouting App
        </q-toolbar-title>
        <q-btn
          ref="target"
          flat
        >
          <q-icon name="fa-ellipsis-h"/>
          <q-popover ref="popover">
            <q-item
              @click="$router.push('/settings')"
              link
            >
              Settings
            </q-item>
          </q-popover>
        </q-btn>
      </q-toolbar>

      <q-search
        v-model="queryText"
        icon="fa-search"
      />

      <GameScouting :filtered-teams="filteredTeams"/>
    </q-layout>
  </div>
</template>

<script>
import {
  QBtn,
  QIcon,
  QItem,
  QLayout,
  QPopover,
  QRouteTab,
  QTabs,
  QTabPane,
  QToolbar,
  QToolbarTitle,
  QSearch
} from 'quasar'
import {
  interfaceActions,
  interfaceGetters,
  scoutingGetters
} from '@state/helpers'
import GameScouting from './game-scouting'
export default {
  components: {
    GameScouting,
    QBtn,
    QIcon,
    QItem,
    QLayout,
    QPopover,
    QRouteTab,
    QTabs,
    QTabPane,
    QToolbar,
    QToolbarTitle,
    QSearch
  },
  data() {
    return {
      queryText: ''
    }
  },
  computed: {
    ...interfaceGetters,
    ...scoutingGetters,
    filteredTeams() {
      return this.scoutedTeams.filter(team => {
        return (
          team.team_number.toString().indexOf(this.queryText) !== -1 ||
          team.nickname.indexOf(this.queryText) !== -1
        )
      })
    }
  },
  methods: {
    ...interfaceActions
  }
}
</script>
