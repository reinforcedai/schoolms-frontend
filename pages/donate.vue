<template>
  <v-row justify="center" align="center" class="my-16" no-gutters>

    <v-col cols="11" md="5" class="text-center">
      <v-btn
        outlined
        x-large
        large
        class="secondary--text"
        >
          Donate
      </v-btn>
    </v-col>

    <v-col cols="11" md="6">
      <h1 class="accent--text">
        Direct Bank Transfer
      </h1>
      <v-card>
        <v-tabs
          background-color="accent"
          centered
          dark
          class="accent--text"
        >
          <v-tab>
            Naira Account
          </v-tab>
          <v-tab>
            Dollar Account
          </v-tab>
          <v-tab>
            Pounds Account
          </v-tab>

          <v-tab-item>
            <v-card-title>
              Zenith Bank
            </v-card-title>
            <v-card-subtitle>
              Beneficiary Account Name: xyz
            </v-card-subtitle>
            <v-card-subtitle>
              Account Number: xxx xxx xxx
            </v-card-subtitle>
            <v-card-subtitle>
              Swift Code: xxx xxx xxx
            </v-card-subtitle>
          </v-tab-item>

          <v-tab-item>
            <v-card-title>
             Bank of America
            </v-card-title>
            <v-card-subtitle>
              Beneficiary Account Name: xyz
            </v-card-subtitle>
            <v-card-subtitle>
              Account Number: xxx xxx xxx
            </v-card-subtitle>
            <v-card-subtitle>
              Swift Code: xxx xxx xxx
            </v-card-subtitle>
          </v-tab-item>

          <v-tab-item>
            <v-card-title>
              UK Bank
            </v-card-title>
            <v-card-subtitle>
              Beneficiary Account Name: xyz
            </v-card-subtitle>
            <v-card-subtitle>
              Account Number: xxx xxx xxx
            </v-card-subtitle>
            <v-card-subtitle>
              Swift Code: xxx xxx xxx
            </v-card-subtitle>
          </v-tab-item>

        </v-tabs>
      </v-card>
          
    </v-col>

  <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>

<script>

export default {
  data: () => ({
    title: 'Donation',
    description: '',
    image: '',    
  })
}
</script>
