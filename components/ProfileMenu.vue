<template>
  <div class="text-center mx-2 mt-2">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
          icon
          block
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          block
          text
          tile
          x-large
          class="font-weight-light info"
        >
          {{ item.title }}
        </v-btn>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Login' },
        { title: 'Sign Up' },
        { title: 'Logout' },
      ],
    }),
  }
</script>