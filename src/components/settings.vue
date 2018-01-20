<template>
  <q-layout>
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
        Settings
      </q-toolbar-title>
    </q-toolbar>
    <q-card>
      <q-card-title>
        Scouting
      </q-card-title>
      <q-card-main>
        <q-btn
          @click="$router.push('/templates')"
          color="dark"
          class="full-width"
          full-width
        >
          Templates
        </q-btn>
      </q-card-main>
    </q-card>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QCard,
  QCardMain,
  QCardTitle,
  QIcon,
  QLayout,
  QToolbar,
  QToolbarTitle
} from 'quasar'
import { interfaceGetters, interfaceActions } from '@state/helpers'
export default {
  components: {
    QBtn,
    QCard,
    QCardMain,
    QCardTitle,
    QIcon,
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
