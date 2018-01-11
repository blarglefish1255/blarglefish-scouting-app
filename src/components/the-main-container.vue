<template>
<div>
  <div
    v-if="!displayScouting && !displayGM && !displaySettings"
    class="center center-vertical"
  >
    <button
      class="btn btn-primary"
      @click="updateDisplayScouting(true)"
    >
      Scouting
    </button>
    <button
      class="btn btn-danger"
      @click="updateDisplayGM(true)"
    >
      Game Manual
    </button>
    <button
      class="btn btn-success"
      @click="updateDisplaySettings(true)"
    >
      Settings
    </button>
  </div>
  <Scouting v-if="displayScouting"/>
  <DocumentViewer v-if="displayGM"/>
  <Settings v-if="displaySettings"/>
</div>
</template>


<script>
import Scouting from './scouting'
import DocumentViewer from './document-viewer'
import Settings from './settings'
import { interfaceGetters, interfaceActions } from '@state/helpers'
export default {
  components: {
    Scouting,
    DocumentViewer,
    Settings
  },
  data () {
    return {}
  },
  computed: {
    ...interfaceGetters
  },
  methods: {
    ...interfaceActions
  }
}
</script>

<style>

.center {
  margin: auto;
  width: 25%;
}

.center-vertical {
  margin-top: 50%;
}
</style>

