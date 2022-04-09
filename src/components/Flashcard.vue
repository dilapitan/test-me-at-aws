<template>
  <v-card width="700" max-width="900">
    <v-container>
      <v-card-title>
        {{ details.question }}
      </v-card-title>

      <div>
        <v-list>
          <v-list-item v-for="(answer, i) in answers" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="answer"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-chip class="mt-2 font-weight-medium">
          Category: {{ details.category.name }}
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
    this.parseAnswers(this.details.answers)
  },

  methods: {
    parseAnswers(answers) {
      const parsed = answers?.split('\n')
      this.answers = parsed
    },
  },
}
</script>