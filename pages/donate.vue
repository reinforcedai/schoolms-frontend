<template>
  <v-row justify="center" align="center" class="my-6">

    <v-col cols="12" class="success text-center py-16">
      <h1 class="accent--text mb-5">Donate By Credit Card</h1>
      <v-btn
        href="https://ravesandbox.flutterwave.com/donate/kbwuv7ogyhkv"
        outlined
        x-large
        large
        class="secondary--text"
        >
          Donate
      </v-btn>
    </v-col>

    <v-col cols="11" class="accent--text">
      <h1>Direct Bank Transfer</h1>
      <v-row>
        <v-col
          v-for="bank in banks"
          :key="bank.type"
          cols="12"
          md="4"
        >
          <v-card class="info--text ma-1 pa-3">
            <h2 class="ml-4">{{ bank.type }}</h2>
            <v-card-title class="info--text">{{ bank.bank }}</v-card-title>
            <v-card-subtitle class="info--text">{{ bank.accountName }}</v-card-subtitle>
            <v-card-subtitle class="info--text">{{ bank.accountNumber }}</v-card-subtitle>
            <v-card-subtitle class="info--text">{{ bank.swiftCode }}</v-card-subtitle>
          </v-card>
              
        </v-col>
      </v-row>
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
    banks: [
        {
          type: 'Naira Account',
          bank: 'Zenith Bank',
          accountName: 'Beneficiary Account Name: xyz',
          accountNumber: 'Account Number: xxx xxx xxx',
          swiftCode: 'Swift Code: xxx xxx xxx',
        },
        {
          type: 'Dollar Account',
          bank: 'Bank of America',
          accountName: 'Beneficiary Account Name: xyz',
          accountNumber: 'Account Number: xxx xxx xxx',
          swiftCode: 'Swift Code: xxx xxx xxx',
        },
        {
          type: 'Pounds Account',
          bank: 'Bank Of England',
          accountName: 'Beneficiary Account Name: xyz',
          accountNumber: 'Account Number: xxx xxx xxx',
          swiftCode: 'Swift Code: xxx xxx xxx',
        },
      ],   
  })
}
</script>
