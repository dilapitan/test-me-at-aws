<template>
  <v-card class="display-block" height="400">
    <v-container>
      <div>
        <v-list class="display-block" height="330">
          <v-list-item v-for="(answer, i) in answers" :key="i">
            <v-list-item-content>
              {{ answer }}
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-chip class="my-1 font-weight-medium">
          Under category: {{ details.category.name }}
        </v-chip>
      </div>
    </v-container>
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

  data: () => ({
    answers: null,
    opacity: 0.5,
    overlay: true,
    absolute: true,
  }),

  created() {
    // Run once
    this.parseAnswers(this.details.answers)
  },

  watch: {
    // Listen to prop change
    details() {
      this.parseAnswers(this.details.answers)
    },
  },

  methods: {
    parseAnswers(answers) {
      const parsed = answers?.split('\n')
      this.answers = parsed
    },
  },
}
</script>