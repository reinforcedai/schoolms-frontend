<template>
  <v-row justify="center" align="center" class="fill-height">

    <v-col cols="12" class="text-center">
      <Carousel />
    </v-col>

    <v-col cols="11" class="secondary--text text-center">
      <v-alert
        text
        border="top"
        type="info"
      >
        <h1>Announcement</h1>
        <p>
          Lorem ipsum incidunt eaque! Impedit architecto sint similique voluptate asperiores repellat. Fuga iste nostrus quod ea dignissimos voluptate rem tenetur sit odit totam. Recusandae id suscipit ut? Est tenetur cum at velit officia illum aspernatur voluptatem commodi nihil tempora rerum delectus ex repellendus error, maxime, vitae quos eum assumenda ipsam facilis unde consequuntur dolorum? Ab, dolore qui natus magnam sed illum minima. Molestiae pariatur aliquid quos mollitia ducimus rem optio, sequi nihil esse facilis dolore harum atque eos modi iure? Nisi magnam, possimus eos, optio labore repellendus qui est saepe distinctio blanditiis repellat amet rem autem, asperiores porro tempore reprehenderit excepturi provident eos omni.
        </p>
      </v-alert>
    </v-col>

    <v-col cols="11" class="mb-5">
      <v-card
        outlined
        class="pa-5"
      >
        <h2 class="accent--text text-center">Latest News</h2>
        <v-card-subtitle class="accent--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.</v-card-subtitle> 
      </v-card>
    </v-col>

    <v-col cols="11" class="py-16">
      <h2 class="accent--text text-center">Testimonials</h2>
      <Testimonials :testimonials=testimonials />
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>
<script>

export default {
  data: () => ({
    transition: '',
    title: 'Home',
    description: '',
    image: require('../static/frontend.png'),
    testimonials: [
      {
        'name': 'John Doe',
        'portfolio': 'CEO',
        'image': 'https://res.cloudinary.com/reinforcedai/image/upload/v1643473642/pexel/pexels-alexander-krivitskiy-1251247_akxkqo.jpg',
        'testimony': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
      {
        'name': 'John Doe',
        'portfolio': 'CEO',
        'image': 'https://res.cloudinary.com/reinforcedai/image/upload/v1643473642/pexel/pexels-alexander-krivitskiy-1251247_akxkqo.jpg',
        'testimony': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
      {
        'name': 'John Doe',
        'portfolio': 'CEO',
        'image': 'https://res.cloudinary.com/reinforcedai/image/upload/v1643473642/pexel/pexels-alexander-krivitskiy-1251247_akxkqo.jpg',
        'testimony': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
    ],
    
  }),

}
</script>
