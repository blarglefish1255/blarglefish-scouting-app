<template>
  <div>
    <q-btn
      icon="fa-chevron-left"
      @click="updateDisplayGM(false)"
    />
    <p>Place Game Manual Here!!!</p>
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
