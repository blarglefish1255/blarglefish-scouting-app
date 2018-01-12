<template>
  <span
    :class="'fa fa-' + icon"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
