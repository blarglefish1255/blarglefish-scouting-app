<template>
  <q-layout view="hhr lpR ffr">
    <q-toolbar
      slot = "header"
      :color="theme">
      <q-toolbar-title>
        BlargleFish Scouting App
      </q-toolbar-title>
    </q-toolbar>
    <div class="absolute-center">
      <q-btn
        :color="theme"
        @click="$router.push('/scouting')">
        Scouting
      </q-btn>
      <q-btn
        :color="theme"
        @click="$router.push('/game-manual')">
        Game Manual
      </q-btn>
      <q-btn
        :color="theme"
        @click="$router.push('/settings')" >
        Settings
      </q-btn>
    </div>
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
