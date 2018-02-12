<template>
  <q-layout view="hhr lpR ffr">
    <Scouting/>
  </q-layout>
</template>


<script>
import { QBtn, QLayout, QToolbar, QToolbarTitle } from 'quasar'
import { interfaceGetters, interfaceActions } from '@state/helpers'
export default {
  components: {
    QBtn,
    QLayout,
    QToolbar,
    QToolbarTitle
  },
  computed: {
    ...interfaceGetters
  },
  methods: {
    ...interfaceActions
  }
}
</script>

<style>
.center {
  margin: auto;
  width: 25%;
}

.center-vertical {
  margin-top: 50%;
}
</style>
