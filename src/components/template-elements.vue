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
      <Stopwatch
        v-if="element.type === 'stopwatch'"
        :label="element.label"
        :color="theme"
      />
      <q-select
        v-if="element.type === 'selector'"
        v-model="element.value"
        :stack-label="element.label"
        separator
        :options="element.options"
      />
    </div>
  </q-layout>
</template>

<script>
import Stopwatch from './stopwatch'
import { QCheckbox, QInput, QLayout, QSelect } from 'quasar'
import { interfaceGetters } from '@state/helpers'
export default {
  components: {
    QCheckbox,
    QInput,
    QLayout,
    QSelect,
    Stopwatch
  },
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...interfaceGetters
  }
}
</script>
