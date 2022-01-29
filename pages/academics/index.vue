<template>
  <v-row justify="center" align="center" no-gutters>

    <v-col cols="12">
      <v-img
        src="https://res.cloudinary.com/reinforcedai/image/upload/v1643472572/pexel/pexels-pixabay-256417_f4b8qm.jpg"
        class="academics-bg"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12">
            <h1 class="primary--text text-center">{{ title }}</h1>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="12" class="pa-5">
      <v-row justify="center" align="center">

        <v-col cols="12" md="6" class="accent--text">
          <h3 class="mb-3">Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quaerat earum dicta optio fuga iste facilis quis pariatur eveniet! Harum at quibusdam mollitia ab veniam deleniti eum velit aspernatur assumenda tempore atque nesciunt magnam earum porro, ut accusamus vero dolorem commodi, officia, a blanditiis non? Quia, esse placeat! Aspernatur sed commodi illo, reprehenderit eos fugiat cupiditate enim fugit porro temporibus aliquam excepturi laboriosam ipsum doloremque ex magnam nostrum quae veritatis, dolore ullam! Nisi quis repellendus, deserunt exercitationem facere debitis quos cum, nobis ab harum totam similique, consequuntur nostrum nihil quisquam suscipit error magni ipsam dicta laudantium distinctio hic. Facere atque sapiente esse ipsam recusandae necessitatibus tempore corporis laboriosam accusantium, illo ut aliquid blanditiis similique fugit ipsa.</p>
        </v-col>
        <v-col cols="12" md="6">
          <v-lazy>
            <v-img src="https://res.cloudinary.com/reinforcedai/image/upload/v1643472576/pexel/pexels-max-fischer-5212329_te2tsm.jpg"></v-img>
          </v-lazy>
        </v-col>
        
        <v-col cols="12" md="6" class="accent--text">
          <h3 class="mb-3">Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quaerat earum dicta optio fuga iste facilis quis pariatur eveniet! Harum at quibusdam mollitia ab veniam deleniti eum velit aspernatur assumenda tempore atque nesciunt magnam earum porro, ut accusamus vero dolorem commodi, officia, a blanditiis non? Quia, esse placeat! Aspernatur sed commodi illo, reprehenderit eos fugiat cupiditate enim fugit porro temporibus aliquam excepturi laboriosam ipsum doloremque ex magnam nostrum quae veritatis, dolore ullam! Nisi quis repellendus, deserunt exercitationem facere debitis quos cum, nobis ab harum totam similique, consequuntur nostrum nihil quisquam suscipit error magni ipsam dicta laudantium distinctio hic. Facere atque sapiente esse ipsam recusandae necessitatibus tempore corporis laboriosam accusantium, illo ut aliquid blanditiis similique fugit ipsa.</p>
        </v-col>
        <v-col cols="12" md="6">
          <v-lazy>
            <v-img src="https://res.cloudinary.com/reinforcedai/image/upload/v1643472588/pexel/pexels-pixabay-289740_mbk3du.jpg"></v-img>
          </v-lazy>
        </v-col>

        <v-col cols="12" md="6" class="accent--text">
          <h3 class="mb-3">Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quaerat earum dicta optio fuga iste facilis quis pariatur eveniet! Harum at quibusdam mollitia ab veniam deleniti eum velit aspernatur assumenda tempore atque nesciunt magnam earum porro, ut accusamus vero dolorem commodi, officia, a blanditiis non? Quia, esse placeat! Aspernatur sed commodi illo, reprehenderit eos fugiat cupiditate enim fugit porro temporibus aliquam excepturi laboriosam ipsum doloremque ex magnam nostrum quae veritatis, dolore ullam! Nisi quis repellendus, deserunt exercitationem facere debitis quos cum, nobis ab harum totam similique, consequuntur nostrum nihil quisquam suscipit error magni ipsam dicta laudantium distinctio hic. Facere atque sapiente esse ipsam recusandae necessitatibus tempore corporis laboriosam accusantium, illo ut aliquid blanditiis similique fugit ipsa.</p>
        </v-col>
        <v-col cols="12" md="6">
          <v-lazy>
            <v-img src="https://res.cloudinary.com/reinforcedai/image/upload/v1643472564/pexel/pexels-artem-podrez-8088092_nzjuwd.jpg"></v-img>
          </v-lazy>
        </v-col>
        
      </v-row>
    </v-col>


    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>
<script>

export default {
  data: () => ({
    title: 'Academics',
    description: '',
    image: '',
    
  }),

}
</script>
<style scoped>
.academics-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
}
</style>
