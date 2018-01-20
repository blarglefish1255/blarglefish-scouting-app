<template>
  <div>
    <q-layout view="hHr LpR lFf">
      <q-toolbar
        slot="header"
        :color="theme"
      >
        <!-- toggles QLayout left side -->
        <q-btn
          flat
          @click="$router.push('/')"
        >
          <q-icon
            name="fa-chevron-left"
            size="20px"
          />
        </q-btn>
        <q-toolbar-title>
          Scouting
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
        <q-route-tab
          icon="fa-database"
          to="/research"
          label="research"
          exact
          slot="title"
        />
        <q-route-tab
          icon="fa-microphone"
          to="/floor-scouting"
          label="floor-scouting"
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
