<template>
    <v-carousel
      :cycle="cycle"
      hide-delimiter-background
      hide-delimiters
      height="100vh"
      class=""
    >
      <v-carousel-item
        v-for="(slide,i) in slides"
        :key="i"
        :src="slide.src"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col class="text-center">
            <h1 class="primary--text font-weight-black text-h2">{{ slide.text }}</h1>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        cycle: true,
        slides: [
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643474744/pexel/pexels-pixabay-207692_riefkk.jpg',
            text: 'Welcome To College',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1645778519/pexel/microscope-gd339bc0ae_640_a1iuhr.jpg',
            text: 'Laboratory',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1645779486/pexel/pexels-k-s-7457914_ugsstl.jpg',
            text: 'ICT',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643472585/pexel/pexels-pixabay-256541_2_s4lxeh.jpg',
            text: 'Library',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1645778520/pexel/classroom-g4babd194d_640_bktqm2.jpg',
            text: 'Classroom',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1645778523/pexel/sports-g290b294b1_640_ubdyjn.jpg',
            text: 'Sports',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643474746/pexel/pexels-kindel-media-8326147_amodzk.jpg',
            text: 'Experiment',
          },
        ],
      }
    },
  }
</script>
