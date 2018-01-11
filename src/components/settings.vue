<template>
  <div>
    <button
      class="btn btn-default"
      @click="updateDisplaySettings(false)"
    >
      Go Back
    </button>
    <p>App Settings go here!!!</p>
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
