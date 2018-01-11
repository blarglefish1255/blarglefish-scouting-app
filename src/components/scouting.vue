<template>
  <div>
    <ul class="nav nav-pills nav-justified">
      <li class="active"><a>Game Scouting</a></li>
      <li><a>Floor Scouting</a></li>
      <li><a>Research</a></li>
    </ul>
    <button
      class="btn btn-default"
      @click="updateDisplayScouting(false)"
    >
      Go Back
    </button>
    <GameScouting v-if="displayGameScouting"/>
    <FloorScouting v-if="displayFloorScouting"/>
    <Research v-if="displayResearch"/>
  </div>
</template>

<script>
import GameScouting from './game-scouting'
import FloorScouting from './floor-scouting'
import Research from './research'
import { interfaceActions } from '@state/helpers'
export default {
  components: {
    GameScouting,
    FloorScouting,
    Research
  },
  data () {
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
