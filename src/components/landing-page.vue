<template>
  <q-layout view="hhr lpR ffr">
    <q-btn
      class="btn btn-primary"
      @click="$router.push('/scouting')"
    >
      Scouting
    </q-btn>
    <q-btn
      class="btn btn-danger"
      @click="$router.push('/game-manual')"
    >
      Game Manual
    </q-btn>
    <q-btn
      class="btn btn-success"
      @click="$router.push('/settings')"
    >
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
