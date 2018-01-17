<template>
  <q-layout view="hhr lpR ffr">
    <q-btn @click="$router.push('/scouting')">
      Scouting
    </q-btn>
    <q-btn @click="$router.push('/game-manual')">
      Game Manual
    </q-btn>
    <q-btn @click="$router.push('/settings')" >
      Settings
    </q-btn>
  </q-layout>
</template>


<script>
import { QBtn, QLayout } from 'quasar'
export default {
  components: {
    QBtn,
    QLayout
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
