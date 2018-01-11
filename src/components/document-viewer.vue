<template>
<div>
  <button
    class="btn btn-default"
    @click="updateDisplayGM(false)"
  >
    Go Back
  </button>
  <p>Place Game Manual Here!!!</p>
</div>
</template>

<script>
import { interfaceActions } from '@state/helpers'
export default {
  methods: {
    ...interfaceActions
  }
}
</script>
