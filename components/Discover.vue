<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col
      v-for='item in discover'
      :key='item.id'
      cols="12"
      md="3"
    >
      <v-card
        min-height="300"
        class="success"
      >
        <v-img
            :src="item.src"
            alt="photo"
            height="200"
        />
        <v-card-title class="secondary--text text-left pb-3">{{ item.title }}</v-card-title>
        <v-card-subtitle class="accent--text">{{ item.text }}</v-card-subtitle> 
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { getMedia } from "../utils/medias";

export default {
  data: () => ({
    discover: [
      {
        'title': 'Sports',
        'src': 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187927/football-gfebd6d0ad_1280_kxl3ih.jpg',
        'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
      {
        'title': 'Admission',
        'src': 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187937/pexels-pixabay-220320_xwtwnx.jpg',
        'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
      {
        'title': 'Technology',
        'src': 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187939/wormhole-gcb9639440_640_sf6p3b.png',
        'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
      {
        'title': 'Library',
        'src': 'https://res.cloudinary.com/reinforcedai/image/upload/v1643472585/pexel/pexels-pixabay-256541_2_s4lxeh.jpg',
        'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
    ],
    
  }),

  methods: {
    getMedia,
  },
}
</script>
