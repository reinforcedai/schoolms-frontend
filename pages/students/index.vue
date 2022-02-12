<template>
  <v-row justify="center" align="center" class="my-10 mx-2">

    <v-col cols="12" class="donate-bg">
      <v-row justify="center" align="center" class="text-center accent--text fill-height">
        <v-col cols="12">
          <h1>{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="3" class="text-center">
      <Sidebar :sideBarLinks="studentsNavLinks" />
    </v-col>

    <v-col cols="12" md="8" class="text-center accent--text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur iusto voluptate cum illum odit ducimus, maiores nisi eum impedit enim vitae doloribus ab. Tempore ipsa neque assumenda quod aliquid tempora fugiat blanditiis quos nesciunt maiores? Possimus incidunt, repudiandae obcaecati voluptatum earum omnis repellat accusamus perferendis quam cumque voluptate culpa. Expedita adipisci repellat voluptate vero natus impedit ipsa atque, qui, accusamus tempore veritatis facilis vitae iste dolore quas eos nisi autem magni. Architecto ex ad sunt dolorum harum impedit, saepe cum nulla earum ut expedita nihil consequuntur facilis sint placeat voluptas ipsum quae adipisci quam! Quidem ipsum laudantium impedit saepe, repellendus id debitis aut optio nulla magni ducimus officiis tempore aspernatur eaque rem, odit quaerat blanditiis! Consequatur, magni necessitatibus voluptatem cumque ipsum consequuntur temporibus corrupti velit tempora totam nulla deserunt obcaecati perferendis hic assumenda earum provident unde officia non qui inventore eos sequi dolores in? At explicabo, dolor consectetur magnam repellat cum enim sunt voluptas voluptate debitis quidem aliquam numquam! Soluta aliquid mollitia veniam, voluptatibus iusto quos a saepe reiciendis amet minus, voluptatem nam, sit velit repellendus eligendi quibusdam quod sequi ipsa ullam. Dolorum, tempora. Culpa, minus optio, harum ratione saepe ipsa modi explicabo mollitia alias numquam similique quam facere.</p>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'students',
  data: () => ({
    title: 'Welcome To Student Portal',
    description: '',
    image: '',
  }),

  computed: {
    ...mapGetters(['studentsNavLinks']),
  },

}
</script>
