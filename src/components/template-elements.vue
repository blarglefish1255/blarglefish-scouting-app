<template>
  <q-layout>
    <div
      v-for="element of elements"
      :key="element.id"
    >
      <q-input
        v-if="element.type === 'note'"
        v-model="element.value"
        :stack-label="element.label"
      />
    </div>
  </q-layout>
</template>

<script>
import { QInput, QLayout } from 'quasar'
export default {
  components: {
    QInput,
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
