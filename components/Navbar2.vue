<template>
  <v-row>
    <v-system-bar app class="hidden-sm-and-down info primary--text">
      <v-btn
          v-for="link in systemBarLinks"
          :key="link.text"
          :to="link.to"
          tile
          text
          x-small
          class="primary--text text-capitalize"
        >
        {{ link.text }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text x-small class="primary--text text-lowercase">
        Phone: +1 (437) xxx xxxx
      </v-btn>
      <v-btn text x-small class="primary--text text-lowercase">
        Email: info@example.com
      </v-btn>
      <v-spacer></v-spacer>
      <social-links color="primary" size="15" />
    </v-system-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="secondary"
    >
      <nuxt-link to="/" exact class="text-decoration-none">
        <v-system-bar
          height="55"
          class="secondary"
        >
          <v-img
            alt="logo"
            contain
            :src="require('../assets/img/logo.png')"
            transition="scale-transition"
            width="40"
            class="shrink"
          />
          <h3 class="primary--text">{{ siteName }}</h3>
        </v-system-bar>
      </nuxt-link>
      
      <v-list 
        v-for="(link, i) in navLinks"
        :key="i"
        nav
        dark
      >
        <v-list-group
          v-if="link.links"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="text-capitalize primary--text" v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="child in link.links"
            :key="child.title"
            :to="child.to"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title" class="text-capitalize primary--text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

          <v-list-item v-else :to="link.to">
          <v-list-item-content>
            <v-list-item-title class="text-capitalize primary--text" v-text="link.title" />
          </v-list-item-content>
          </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      color="secondary"
    >
      <v-app-bar-nav-icon
        color="success"
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      
      <nuxt-link to="/" exact class="text-decoration-none">
        <div class="d-flex align-center ml-5">
          <v-toolbar-title class="font-weight-bold">
            <v-img
              alt="logo"
              class="shrink mr-2"
              contain
              :src="require('../assets/img/logo.png')"
              width="40"
            />
          </v-toolbar-title>
          <h3>{{ siteName }}</h3>
        </div>
      </nuxt-link>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down ml-5 pr-5">
        <v-btn
          v-for="(link, i) in navLinks"
          :key="i"
          tile
          text
          class="primary--text text-capitalize"
        >
          <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <div
                v-if="link.links"
                v-bind="attrs"
                v-on="on"
              >
                {{ link.title }}
                <v-icon size="15">mdi-chevron-down</v-icon>
              </div>
              <nuxt-link v-else :to="link.to" exact class="text-decoration-none">
                {{ link.title }}
              </nuxt-link>
            </template>
            <v-list-item
              v-for="child in link.links"
              :key="child.title"
              :to="child.to"
              class="font-weight-light info"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title" class="text-capitalize primary--text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-menu>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    ...mapGetters(['siteName', 'systemBarLinks', 'navLinks']),
  },
}
</script>
