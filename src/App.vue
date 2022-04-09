<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon>
        <v-icon color="accented" x-large>mdi-aws</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <h3>Get ready for AWS!</h3>
      </v-toolbar-title>

      <v-btn @click="toggleTheme()" icon color="accented">
        <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
        <v-icon v-else>mdi-white-balance-sunny</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="showAbout()" icon large v-bind="attrs" v-on="on">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title> About this app </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-card color="background" flat height="100%">
      <v-main>
        <Home />
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import Home from '@/components/Home'

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    dialog: false,
  }),

  created() {
    const theme = localStorage.getItem('dark_theme')
    this.$vuetify.theme.dark = theme === 'true' ? true : false
  },

  methods: {
    showAbout() {
      this.drawer = true
    },

    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>
