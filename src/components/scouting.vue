<template>
  <div>
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
import { QBtn, QSearch } from 'quasar'
import GameScouting from './game-scouting'
import FloorScouting from './floor-scouting'
import Research from './research'
import { interfaceActions } from '@state/helpers'
export default {
  components: {
    QBtn,
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
