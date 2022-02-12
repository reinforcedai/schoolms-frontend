<template>
  <v-row justify="center" align="center" class="my-16">

    <v-col cols="12">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12">
          <h1 class="accent--text text-center">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11">
      <v-sheet height="500">
        <v-calendar
          :now="today"
          :value="today"
          color="primary"
        >
          <template v-slot:day="{ past, date }">
            <v-row
              class="fill-height"
            >
              <template v-if="past && tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      title: 'Academic Calendar',
      description: '',
      image: '',
      today: '2022-01-10',
      tracked: {
        '2022-01-09': [23, 45, 10],
        '2022-01-08': [10],
        '2022-01-07': [0, 78, 5],
        '2022-01-06': [0, 0, 50],
        '2022-01-05': [0, 10, 23],
        '2022-01-04': [2, 90],
        '2022-01-03': [10, 32],
        '2022-01-02': [80, 10, 10],
        '2022-01-01': [20, 25, 10],
      },
      colors: ['#1867c0', '#fb8c00', '#000000'],
      category: ['Development', 'Meetings', 'Slacking'],
    }),
  }
</script>
<style scoped>
.calendar-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 40vh;
}
</style>
