<template>
  <div>
    <q-input
      :stack-label="label"
      v-model="durationInSeconds"
      readonly
    />
    <q-btn
      :color="color"
      @click="changeTimeState"
    >
      {{ getButtonValue() }}
    </q-btn>
  </div>
</template>

<script>
import { QBtn, QInput } from 'quasar'
export default {
  components: {
    QBtn,
    QInput
  },
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'deep-purple-8'
    }
  },
  data() {
    return {
      startTime: null,
      endTime: null,
      durationInSeconds: '00:00:00',
      running: false
    }
  },
  methods: {
    changeTimeState() {
      if (!this.running) {
        this.startTime = Date.now()
        this.running = true
        return
      }

      this.running = false
      this.endTime = Date.now()
      this.durationInSeconds = (this.endTime - this.startTime) / 1000
    },
    getButtonValue() {
      if (this.running) {
        return 'Stop'
      }

      return 'Start'
    }
  }
}
</script>
