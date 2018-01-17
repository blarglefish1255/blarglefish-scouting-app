<template>
  <q-layout>
    <q-toolbar
      slot="header"
      color="dark"
    >
      <!-- toggles QLayout left side -->
      <q-btn
        flat
        @click="$router.push('/settings')"
      >
        <q-icon
          name="fa-chevron-left"
          size="20px"
        />
      </q-btn>
      <q-toolbar-title>
        Templates
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>
import { QBtn, QIcon, QLayout, QToolbar, QToolbarTitle } from 'quasar'
export default {
  components: {
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle
  }
}
</script>
