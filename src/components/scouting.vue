<template>
  <div>
    <q-tabs>
      <!-- Tabs - notice slot="title" -->
      <q-route-tab
        slot="title"
        to="/game-scouting"
        exact
        icon="fa-microphone"
      />
      <q-route-tab
        default
        slot="title"
        to="/research"
        exact
        icon="fa-clipboard"
      />
      <q-route-tab
        slot="title"
        to="/floor-scouting"
        exact
        icon="fa-clipboard"
      />

    </q-tabs>
    <q-btn
      icon="fa-chevron-left"
      @click="updateDisplayScouting(false)"
    />
    <q-search
      v-model="queryText"
      icon="fa-search"
    />
    <GameScouting v-if="displayGameScouting"/>
    <FloorScouting v-if="displayFloorScouting"/>
    <Research v-if="displayResearch"/>
  </div>
</template>

<script>
import { QBtn, QRouteTab, QTabs, QTabPane, QSearch } from 'quasar'
import GameScouting from './game-scouting'
import FloorScouting from './floor-scouting'
import Research from './research'
import { interfaceActions } from '@state/helpers'
export default {
  components: {
    QBtn,
    QRouteTab,
    QTabs,
    QTabPane,
    QSearch,
    GameScouting,
    FloorScouting,
    Research
  },
  data() {
    return {
      displayGameScouting: true,
      displayFloorScouting: false,
      displayResearch: false
    }
  },
  methods: {
    ...interfaceActions
  }
}
</script>
