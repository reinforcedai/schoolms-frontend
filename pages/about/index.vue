<template>
  <v-row justify="center">

    <v-col cols="12" class="about-bg">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12">
          <h1 class="primary--text text-center">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      v-for="card in cards"
      :key="card.title"
      cols="11"
      class="my-5"
    >
      <v-card
        flat
        class="info pa-5"
      >
        <h2 class="primary--text text-center">{{ card.title }}</h2>
        <v-card-subtitle class="accent--text">{{ card.text }}</v-card-subtitle> 
      </v-card>
    </v-col>

    <v-col cols="11" class="mb-5">
      <v-card
        flat
        class="info pa-5"
      >
        <h2 class="primary--text text-center">Our Team</h2>
        <div
          v-for="person in persons"
          :key="person.name"
          class="d-flex justify-center pa-3"
        >
          <v-avatar size="80">
            <v-img
              :src="person.photo"
              alt="photo"
            />
          </v-avatar>
          <div class="pl-2">
            <h3 class="primary--text text-left pb-1">{{ person.name }}</h3>
            <small class="accent--text">{{ person.portfolio }}</small> 
          </div>
        </div>
      </v-card>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
    
  </v-row>
</template>

<script>

export default {
  data: () => ({
    title: 'About Us',
    description: '',
    image: '',
    cards: [
        {
          title: 'Our Mission',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
        },
        {
          title: 'Our Vission',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
        },
        {
          title: 'Our  Core Values',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
        },
        {
          title: 'History',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.',
        },
      ],

    persons: [
        {
          name: 'John Doe',
          photo: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643473642/pexel/pexels-alexander-krivitskiy-1251247_akxkqo.jpg',
          portfolio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
        {
          name: 'John Doe',
          photo: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643473642/pexel/pexels-alexander-krivitskiy-1251247_akxkqo.jpg',
          portfolio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
        {
          name: 'John Doe',
          photo: 'https://res.cloudinary.com/reinforcedai/image/upload/v1643473642/pexel/pexels-alexander-krivitskiy-1251247_akxkqo.jpg',
          portfolio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
      ],
  })
}
</script>

<style scoped>
.about-bg {
  background-image: url('https://res.cloudinary.com/reinforcedai/image/upload/v1643472583/pexel/pexels-pixabay-301926_g5nkp0.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
}
</style>
