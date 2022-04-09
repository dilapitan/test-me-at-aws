<template>
  <div>
    <br /><br />
    <v-row>
      <v-col cols="1" sm="3"></v-col>
      <v-col cols="10" sm="6" v-if="!loading">
        <Flashcard :details="details" />

        <br />
        <v-row class="pr-5">
          <v-spacer></v-spacer>
          <v-btn @click="randomize()" class="white--text" color="accented">
            NEXT
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="10" sm="6" class="d-flex justify-center" v-else>
        <v-progress-circular
          color="accented"
          indeterminate
          :size="70"
        ></v-progress-circular>
      </v-col>
      <v-col cols="1" sm="3"></v-col>
    </v-row>
  </div>
</template>

<script>
import Flashcard from '@/components/Flashcard'
import FlashcardService from '@/services/FlashcardService'

export default {
  name: 'Home',

  components: {
    Flashcard,
  },

  created() {
    this.setup()
  },

  data: () => ({
    flashcards: [],
    details: {},
    loading: null,
  }),

  methods: {
    async getFlashcards() {
      try {
        const response = await FlashcardService.getFlashcards()
        this.flashcards = response.data.content
      } catch (error) {
        throw new Error(error)
      }
    },

    randomize() {
      const randomFlashcard =
        this.flashcards[Math.floor(Math.random() * this.flashcards.length)]

      this.details = randomFlashcard
    },

    async setup() {
      this.loading = true
      await this.getFlashcards()
      if (this.flashcards?.length > 0) {
        this.randomize()
        this.loading = false
      }
    },
  },
}
</script>