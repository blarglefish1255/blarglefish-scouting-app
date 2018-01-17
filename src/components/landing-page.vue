<template>
  <div>
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
  </div>
</template>


<script>
import { QBtn } from 'quasar'
export default {
  components: {
    QBtn
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
