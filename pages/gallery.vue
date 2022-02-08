<template>
  <v-row justify="center" no-gutters>

    <v-col cols="12" class="gallery-bg">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12">
          <h1 class="primary--text text-center">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      v-for="card in cards"
      :key="card.title"
      cols="12"
    >

      <v-row justify="center" class="my-16">
        <v-col cols="12" md="5" class="secondary--text">
          <h2 class="accent--text text-capitalize text-center">{{ card.title }}</h2>
          <v-card-subtitle class="accent--text">{{ card.text }}</v-card-subtitle> 
        </v-col>
        <v-col cols="12" md="6" class="secondary--text">
          <v-img :src="card.src"></v-img>
        </v-col>

      </v-row>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
    
  </v-row>
</template>

<script>

export default {
  data: () => ({
    title: 'Photo Gallery',
    description: '',
    image: '',
    cards: [
        {
          title: 'Sports Facilities',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187932/pexels-img-2116469_jkktut.jpg',
        },
        {
          title: 'ICT Facilities',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187939/pexels-szymon-shields-10948210_ijtifl.jpg',
        },
        {
          title: 'Teaching Facilities',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187937/pexels-pixabay-220320_xwtwnx.jpg',
        },
        {
          title: 'Hostel Facilities',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1644188141/banner-gefc396206_1920_ftlm65.jpg',
        },
        {
          title: 'Laboratory Facilities',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187940/pexels-chokniti-khongchum-3938023_jtofw4.jpg',
        },
        {
          title: 'Libraries Facilities',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187939/pexels-pixabay-256455_k3lxil.jpg',
        },
        {
          title: 'Health Facilities',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1644187939/wormhole-gcb9639440_640_sf6p3b.png',
        },
        {
          title: 'Other Facilities',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643472585/pexel/pexels-mikhail-nilov-8924160_glfufb.jpg',
        },
      ],
  })
}
</script>

<style scoped>
.gallery-bg {
  background-image: url('https://res.cloudinary.com/reinforcedai/image/upload/v1644187927/football-gfebd6d0ad_1280_kxl3ih.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
}
</style>
