<template>
  <div>
    <br />
    <v-row>
      <v-col cols="1" sm="3" md="3"></v-col>
      <v-col cols="9" sm="4" md="3">
        <v-select
          :items="categories"
          item-text="value"
          item-value="value"
          v-model="select"
          label="Sort By"
          filled
          rounded
          dense
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1" sm="3"></v-col>
      <v-col cols="10" sm="6" v-if="!loading">
        <div style="height: 100px" class="display-block">
          <h3 class="font-weight-bold">
            {{ details.question }}
          </h3>
        </div>

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
    categories: [{ value: 'All Categories' }],
    select: { value: 'All Categories' },
    details: {},
    loading: null,
  }),

  watch: {
    select() {
      console.log('selected: ', this.select)
    },
  },

  methods: {
    async getFlashcards() {
      try {
        const response = await FlashcardService.getFlashcards()
        this.flashcards = response.data.content

        this.flashcards.map((flashcard) => {
          const found = this.categories.find((category) => {
            category.value === flashcard.category.name
          })

          if (found === undefined)
            this.categories.push({ value: flashcard.category.name })
        })
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