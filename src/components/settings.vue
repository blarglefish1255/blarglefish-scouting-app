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
          :color="theme"
          class="full-width"
          full-width
        >
          Templates
        </q-btn>
      </q-card-main>
    </q-card>

    <q-card>
      <q-card-title>
        App
      </q-card-title>
      <q-card-main>
        <q-select
          stack-label="Themes"
          v-model="theme"
          separator
          :options="options"
          @change="updateTheme"
        />
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
  QToolbarTitle,
  QSelect
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
    QToolbarTitle,
    QSelect
  },
  data() {
    return {
      options: [
        {
          label: 'Dark',
          value: 'dark'
        },
        {
          label: 'Purple',
          value: 'deep-purple-8'
        },
        {
          label: 'Light',
          value: 'grey-5'
        },
        {
          label: 'Green',
          value: 'positive'
        },
        {
          label: 'Blue',
          value: 'primary'
        },
        {
          label: 'Red',
          value: 'red-9'
        },
        {
          label: 'Yellow',
          value: 'warning'
        }
      ]
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
