<template>
  <div>
    <q-input
      :stack-label="label"
      v-model="duration"
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
    durationInSeconds: {
      type: Number,
      default: 0
    },
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
      duration: this.durationInSeconds,
      endTime: null,
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
      this.duration = (this.endTime - this.startTime) / 1000
      this.$emit('change', `${this.duration.toString()}s`)
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
