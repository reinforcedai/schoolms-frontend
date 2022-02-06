<template>
  <v-container>
    <v-list 
      v-for="(link, i) in studentsNavLinks"
      :key="i"
      nav
      class="success"
    >

      <v-list-item
        :to="link.to"
      >
        <v-list-item-content>
          <v-list-item-title class="text-capitalize text-left accent--text" v-text="link.title" />
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['studentsNavLinks']),
  },
}
</script>
