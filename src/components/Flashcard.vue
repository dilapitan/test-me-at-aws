<template>
  <v-card>
    <v-container>
      <v-card-title>
        {{ details.question }}
      </v-card-title>

      <div>
        <v-list>
          <v-list-item v-for="(answer, i) in answers" :key="i">
            <v-list-item-content>
              {{ answer }}
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-chip class="mt-2 font-weight-medium">
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