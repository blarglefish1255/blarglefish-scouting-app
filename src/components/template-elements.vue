<template>
  <q-layout>
    <div
      v-for="element of elements"
      :key="element.id"
    >
      <q-checkbox
        v-if="element.type === 'checkbox'"
        v-model="element.value"
        :label="element.label"
      />
      <q-input
        v-if="element.type === 'note'"
        v-model="element.value"
        :stack-label="element.label"
      />
    </div>
  </q-layout>
</template>

<script>
import { QCheckbox, QInput, QLayout } from 'quasar'
export default {
  components: {
    QCheckbox,
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
