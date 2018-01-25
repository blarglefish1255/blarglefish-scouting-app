<template>
  <q-layout/>
</template>

<script>
import { QLayout } from 'quasar'
export default {
  components: {
    QLayout
  },
  props: {
    elements: {
      type: Array,
      required: true
    }
  }
}
</script>
