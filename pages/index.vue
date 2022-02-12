<template>
  <v-row justify="center" align="center">

    <v-col cols="12" class="text-center mb-16">
      <Carousel />
    </v-col>
    <v-col cols="12" class="text-left mb-16">
      <v-row justify="center">
        <v-col cols="12" md="4" class="secondary--text">
          <v-img src="https://res.cloudinary.com/reinforcedai/image/upload/v1644604703/pexel/pexels-pavel-danilyuk-7943987_hh9e9e_athkw9.png"></v-img>
        </v-col>

        <v-col cols="11" md="7" class="secondary--text">
          <h2>We Are Committed To Developing The Future Leaders</h2>
          <p>
            Lorem ipsum incidunt voluptate asperiores repellat. Fuga iste nostrus quod ea dignissimos voluptate rem tenetur sit odit totam. Recusandae id suscipit ut? Est tenetur cum at velit officia illum aspernatur voluptatem commodi nihil tempora rerum delectus ex repellendus error, maxime, vitae quos eum assumenda ipsam facilis unde consequuntur dolorum? Ab, dolore qui natus magnam sed illum minima. Molestiae pariatur aliquid quos mollitia ducimus rem optio, sequi nihil esse facilis dolore harum atque eos modi iure? Nisi magnam, possimus eos, optio labore repellendus qui est saepe distinctio blanditiis repellat amet rem autem, asperiores porro tempore reprehenderit excepturi provident eos omni.
          </p>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="11" class="secondary--text text-center mb-16">
      <v-alert
        text
        border="top"
        type="info"
      >
        <h2>Announcement</h2>
        <p>
          Lorem ipsum incidunt eaque! Impedit architecto sint similique voluptate asperiores repellat. Fuga iste nostrus quod ea dignissimos voluptate rem tenetur sit odit totam. Recusandae id suscipit ut? Est tenetur cum at velit officia illum aspernatur voluptatem commodi nihil tempora rerum delectus ex repellendus error, maxime, vitae quos eum assumenda ipsam facilis unde consequuntur dolorum? Ab, dolore qui natus magnam sed illum minima. Molestiae pariatur aliquid quos mollitia ducimus rem optio, sequi nihil esse facilis dolore harum atque eos modi iure? Nisi magnam, possimus eos, optio labore repellendus qui est saepe distinctio blanditiis repellat amet rem autem, asperiores porro tempore reprehenderit excepturi provident eos omni.
        </p>
      </v-alert>
    </v-col>

    <v-col cols="11" md="7" class=" mb-16">
      <v-card flat>
      <v-card-title class="accent--text font-weight-black">Latest News</v-card-title>
      <v-card-subtitle class="accent--text">Lorem ipsum dolor sit eligendit impeditipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.</v-card-subtitle> 
      </v-card>
    </v-col>

    <v-col cols="11" md="4" class=" mb-16">
      <v-card flat>
      <v-card-title class="accent--text font-weight-black">Upcoming Events</v-card-title>
      <v-card-subtitle class="accent--text">Lorem ipsum dolor. Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.</v-card-subtitle> 
      </v-card>
    </v-col>

    <v-col cols="11" class=" mb-16">
      <h2 class="accent--text text-center">Testimonials</h2>
      <Testimonials />
    </v-col>

    <v-col cols="11" class="accent--text mb-16">
      <h2 class="pb-3">Discover More</h2>
      <Discover />
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
    discover: [
      {
        'title': 'Lorem Ipsum',
        'image': 'https://res.cloudinary.com/reinforcedai/image/upload/v1643473642/pexel/pexels-alexander-krivitskiy-1251247_akxkqo.jpg',
        'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui',
      },
    ],
    
  }),

}
</script>
