<template>
  <v-row justify="center" align="center" class="fill-height py-5" no-gutters>
    <v-col
      v-for='testimonial in testimonials'
      :key='testimonial.id'
      cols="12"
      md="4"
      class="pa-3"
    >
      <v-card
        elevation="15"
        min-height="200"
      >
        <div class="d-flex align-center pa-3">
          <v-avatar size="80">
            <v-img
              :src="testimonial.image"
              alt="photo"
            />
          </v-avatar>
          <div class="pl-2">
            <h3 class="secondary--text text-left pb-1">{{ testimonial.name }}</h3>
            <small class="accent--text">{{ testimonial.portfolio }}</small> 
          </div>
        </div>
        <v-card-subtitle class="accent--text">{{ testimonial.testimony }}</v-card-subtitle> 
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { getMedia } from "../utils/medias";

export default {
  data: () => ({
    testimonials: [
      {
        'name': 'John Doe',
        'portfolio': 'CEO',
        'image': 'https://res.cloudinary.com/reinforcedai/image/upload/v1644657554/pexel/pexels-ron-lach-9829317_gwivuh.png',
        'testimony': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
      {
        'name': 'John Doe',
        'portfolio': 'CEO',
        'image': 'https://res.cloudinary.com/reinforcedai/image/upload/v1644657554/pexel/pexels-ron-lach-9829317_gwivuh.png',
        'testimony': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
      {
        'name': 'John Doe',
        'portfolio': 'CEO',
        'image': 'https://res.cloudinary.com/reinforcedai/image/upload/v1644657554/pexel/pexels-ron-lach-9829317_gwivuh.png',
        'testimony': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
    ],
    
  }),

  methods: {
    getMedia,
  },
}
</script>
