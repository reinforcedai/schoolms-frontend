<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-default-footer
    :hide-default-header="header"
    :dense="dense"
    class="elevation-1"
  ></v-data-table>
</template>

<script>

export default {
  props: {
    headers: {
      type: Array,
      default: () => ([]),
    },
    desserts: {
      type: Array,
      default: () => ([]),
    },
    header: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: true,
    },
  },
  
}
</script>
