<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { internetConnectionActions } from '@state/helpers'
export default {
  created() {
    this.initInternetConnectionChecker()
  },
  methods: {
    ...internetConnectionActions
  }
}
</script>
