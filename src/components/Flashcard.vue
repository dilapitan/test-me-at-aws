<template>
  <v-card>
    <v-card-title>{{ details.question }}</v-card-title>
    <v-card-text>
      {{ details.answers }}
    </v-card-text>

    <p>{{ details.category.name }}</p>
  </v-card>
</template>

<script>
export default {
  name: 'Flashcard',
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
}
</script>