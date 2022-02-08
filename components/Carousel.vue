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
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643474754/pexel/pexels-pavel-danilyuk-8442567_tdbmri.jpg',
            text: 'Laboratory',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643472591/pexel/pexels-polina-zimmerman-3778622_lqcgoz.jpg',
            text: 'ICT',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643472585/pexel/pexels-pixabay-256541_2_s4lxeh.jpg',
            text: 'Library',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643472581/pexel/pexels-arthur-krijgsman-4019754_bnbb9d.jpg',
            text: 'Classroom',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643473054/pexel/alina-chernysheva-JA2S6sJWleg-unsplash_fbfbpq.jpg',
            text: 'Sports',
          },
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643472578/pexel/pexels-mikhail-nilov-8923375_nubxcj.jpg',
            text: 'Experiment',
          },
        ],
      }
    },
  }
</script>
