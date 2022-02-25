<template>
  <v-row>
    <v-system-bar v-if="systemBar" app class="hidden-sm-and-down info primary--text">
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
        Email: info@frontend.com
      </v-btn>
      <v-spacer></v-spacer>
      <social-links color="primary" size="15" />
    </v-system-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      :color="color"
    >
      <nuxt-link to="/" exact class="text-decoration-none">
        <v-system-bar
          height="55"
          :color="color"
        >
          <div class="d-flex align-center primary--text ml-5">
            <v-img
              alt="logo"
              class="shrink mr-2"
              contain
              :src="require('../assets/img/logo.svg')"
              width="40"
            />
            <h3>{{ site }}</h3>
          </div>
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
      :color="color"
    >
      <v-app-bar-nav-icon
        color="success"
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      
      <nuxt-link to="/" exact class="text-decoration-none">
        <div class="d-flex align-center ml-5">
            <v-img
              alt="logo"
              class="shrink mr-2"
              contain
              :src="require('../assets/img/logo.svg')"
              width="40"
            />
            <h3>{{ site }}</h3>
        </div>
      </nuxt-link>

      <v-spacer/>
      
      <v-toolbar-items class="hidden-sm-and-down mr-16">
        <v-btn
          v-for="link in navLinks"
          :key="link.title"
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
                class="font-weight-black"
              >
                {{ link.title }}
                <v-icon size="15">mdi-chevron-down</v-icon>
              </div>
              <nuxt-link v-else :to="link.to" exact class="text-decoration-none font-weight-black">
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
        <v-toolbar-items v-if="profile">
          <v-btn
            v-if="!$auth.loggedIn"
            to="/auth/login/"
            outlined
            text
            dark
            x-large
            class="text-capitalize"
          >
            Login
          </v-btn>
          <div v-else>
            <ProfileMenu />
          </div>
        </v-toolbar-items>
      </v-toolbar-items>
    </v-app-bar>
  </v-row>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'secondary',
    },
    systemBar: {
      type: Boolean,
      default: false,
    },
    navLinks: {
      type: Array,
      default: () => ([]),
    },
    systemBarLinks: {
      type: Array,
      default: () => ([]),
    },
    site: {
      type: String,
      default: '',
    },
    profile: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      drawer: false,
    }
  },
  
}
</script>
