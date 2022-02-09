<template>
  <v-container class="hidden-sm-and-down success py-5">
    <v-list 
      v-for="(link, i) in sideBarLinks"
      :key="i"
      class="transparent"
    >

      <v-list-item
        :to="link.to"
        class="my-n3"
      >
        <v-list-item-content>
          <v-list-item-title class="text-capitalize text-left accent--text" v-text="link.title" />
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-container>
</template>

<script>

export default {
  props: {
    sideBarLinks: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>
