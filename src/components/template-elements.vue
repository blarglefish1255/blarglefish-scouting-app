<template>
  <q-layout>
    <div
      v-for="(element, index) of elements"
      :key="element.id"
      style="margin: auto; margin-top: 20px; width: 50%;"
    >
      <div class="inner-elements">
        <q-checkbox
          v-if="element.type === 'checkbox'"
          v-model="element.value"
          :label="element.label"
          @change="updateElement({ event: $event, index: index })"
        />
        <q-input
          v-if="element.type === 'note'"
          v-model="element.value"
          type="textarea"
          :stack-label="element.label"
          @change="updateElement({ event: $event, index: index })"
        />
        <Stopwatch
          v-if="element.type === 'stopwatch'"
          :label="element.label"
          :duration-in-seconds="element.value"
          :color="theme"
          @change="updateElement({ event: $event, index: index })"
        />
        <q-select
          v-if="element.type === 'selector'"
          :stack-label="element.label"
          separator
          :options="element.options"
          v-model="element.value"
          @change="updateElement({ event: $event, index: index })"
        />
      </div>
    </div>
  </q-layout>
</template>

<script>
import Stopwatch from './stopwatch'
import { QCheckbox, QInput, QLayout, QSelect } from 'quasar'
import {
  interfaceGetters,
  templatesGetters,
  templatesActions
} from '@state/helpers'
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
  data() {
    return {
      elementArray: this.elements
    }
  },
  computed: {
    ...interfaceGetters,
    ...templatesGetters
  },
  methods: {
    ...templatesActions,
    updateElement(event) {
      this.$emit('change', { value: event.event, index: event.index })
    }
  }
}
</script>

<style>
.inner-elements {
  padding: 5px;
}
</style>
