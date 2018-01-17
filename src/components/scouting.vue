<template>
  <div>
    <q-layout>
      <q-toolbar color="dark">
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
    </q-layout>
    <footer>
      <q-tabs
        slot="navigation"
        align="center"
        color="dark"
      >
        <!-- Tabs - notice slot="title" -->
        <q-route-tab
          slot="title"
          to="/game-scouting"
          exact
          icon="fa-microphone"
        >
          Game Scouting
        </q-route-tab>
        <q-route-tab
          default
          slot="title"
          to="/research"
          exact
          icon="fa-clipboard"
        >
          Research
        </q-route-tab>
        <q-route-tab
          slot="title"
          to="/floor-scouting"
          exact
          icon="fa-clipboard"
        >
          Floor Scouting
        </q-route-tab>

      </q-tabs>
    </footer>
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
  QSearch
} from 'quasar'
import { interfaceActions } from '@state/helpers'
export default {
  components: {
    QBtn,
    QIcon,
    QLayout,
    QRouteTab,
    QTabs,
    QTabPane,
    QToolbar,
    QSearch
  },
  data() {
    return {
      queryText: ''
    }
  },
  methods: {
    ...interfaceActions
  }
}
</script>
