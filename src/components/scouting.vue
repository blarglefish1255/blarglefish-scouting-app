<template>
  <div>
    <q-layout view="hHr LpR lFf">
      <q-toolbar
        slot="header"
        :color="theme"
      >
        <q-toolbar-title>
          Blarglefish Scouting App
        </q-toolbar-title>
      </q-toolbar>

      <q-search
        v-model="queryText"
        icon="fa-search"
      />

      <router-view/>

      <q-tabs
        slot="footer"
        position="bottom"
        align="center"
        :color="theme"
      >
        <q-route-tab
          icon="fa-gamepad"
          to="/game-scouting"
          label="game-scouting"
          exact
          slot="title"
        />
      </q-tabs>
    </q-layout>
  </div>
</template>

<script>
import {
  QBtn,
  QIcon,
  QLayout,
  QRouteTab,
  QTabs,
  QTabPane,
  QToolbar,
  QToolbarTitle,
  QSearch
} from 'quasar'
import { interfaceActions, interfaceGetters } from '@state/helpers'
export default {
  components: {
    QBtn,
    QIcon,
    QLayout,
    QRouteTab,
    QTabs,
    QTabPane,
    QToolbar,
    QToolbarTitle,
    QSearch
  },
  data() {
    return {
      queryText: ''
    }
  },
  computed: {
    ...interfaceGetters
  },
  methods: {
    ...interfaceActions
  }
}
</script>
