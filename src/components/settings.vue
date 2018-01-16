<template>
  <div>
    <q-btn
      icon="fa-chevron-left"
      @click="updateDisplaySettings(false)"
    />
    <p>App Settings go here!!!</p>
  </div>
</template>

<script>
import { QBtn } from 'quasar'
import { interfaceActions } from '@state/helpers'
export default {
  components: {
    QBtn
  },
  methods: {
    ...interfaceActions
  }
}
</script>
