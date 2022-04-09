<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon>
        <v-icon color="accented" x-large>mdi-aws</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <h3>Get ready for AWS!</h3>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon large>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
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
    //
  }),
}
</script>
