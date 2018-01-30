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
        >
          Templates
        </q-btn>
      </q-card-main>
      <q-card-main>
        <q-btn
          :color="theme"
          @click="clearScoutedTeams"
          class="full-width"
        >
          Clear Scouted Teams
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
        <q-btn
          :color="theme"
          @click="clearAllSettings"
          class="full-width"
        >
          Clear App Settings
        </q-btn>
      </q-card-main>
    </q-card>
  </q-layout>
</template>

<script>
import {
  LocalStorage,
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
import {
  interfaceGetters,
  interfaceActions,
  scoutingActions
} from '@state/helpers'
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
    ...scoutingActions,
    ...interfaceActions,
    clearAllSettings() {
      LocalStorage.clear()
      window.location.reload(false)
    }
  }
}
</script>
