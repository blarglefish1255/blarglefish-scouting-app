<template>
  <div>
    <q-layout view="hHr LpR lFf">
      <q-toolbar
        slot="header"
        color="dark"
      >
        <!-- toggles QLayout left side -->
        <q-btn
          flat
          @click="$router.push('/')"
        >
          <q-icon
            name="fa-chevron-left"
            size="20px"
          />
        </q-btn>
        <q-toolbar-title>
          Scouting
        </q-toolbar-title>
      </q-toolbar>

      <q-search
        v-model="queryText"
        icon="fa-search"
      />

      <q-tabs
        slot="footer"
        position="bottom"
        align="center"
        color="dark"
      >
        <!-- Tabs - notice slot="title" -->
        <q-tab
          slot="title"
          name="game-scouting"
          icon="fa-microphone"
        >
          Game Scouting
        </q-tab>
        <q-tab
          default
          slot="title"
          name="research"
          icon="fa-clipboard"
        >
          Research
        </q-tab>
        <q-tab
          slot="title"
          name="floor-scouting"
          icon="fa-clipboard"
        >
          Floor Scouting
        </q-tab>

        <q-tab-pane name="game-scouting">
          <GameScouting/>
        </q-tab-pane>
        <q-tab-pane name="research">
          <Research/>
        </q-tab-pane>
        <q-tab-pane name="floor-scouting">
          <FloorScouting/>
        </q-tab-pane>

      </q-tabs>
    </q-layout>
  </div>
</template>

<script>
import FloorScouting from './floor-scouting'
import GameScouting from './game-scouting'
import Research from './research'
import {
  QBtn,
  QIcon,
  QLayout,
  QTab,
  QTabs,
  QTabPane,
  QToolbar,
  QToolbarTitle,
  QSearch
} from 'quasar'
export default {
  components: {
    FloorScouting,
    GameScouting,
    Research,
    QBtn,
    QIcon,
    QLayout,
    QTab,
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
  }
}
</script>
