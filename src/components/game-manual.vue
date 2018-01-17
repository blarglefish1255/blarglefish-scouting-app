<template>
  <div>
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
        Game Manual
      </q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
import { QBtn, QIcon, QToolbar, QToolbarTitle } from 'quasar'
export default {
  components: {
    QBtn,
    QIcon,
    QToolbar,
    QToolbarTitle
  }
}
</script>
