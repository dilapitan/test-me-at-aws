<template>
  <div>
    <br /><br />
    <v-row>
      <v-col cols="1" sm="3"></v-col>
      <v-col cols="10" sm="6">
        <Flashcard :details="details" />

        <br />
        <v-row class="pr-3">
          <v-spacer></v-spacer>
          <v-btn class="white--text" color="accented">NEXT</v-btn>
        </v-row>
      </v-col>
      <v-col cols="1" sm="3"></v-col>
    </v-row>
  </div>
</template>

<script>
import Flashcard from '@/components/Flashcard'

export default {
  name: 'Home',

  components: {
    Flashcard,
  },

  data: () => ({
    flashcards: null,
    details: {
      question: 'What are availability zones (AZ)?',
      answers:
        '- the ones that are going into the region\n- one or more discrete data centers with redundant power, networking, and connectivity\n- separate from each other; isolated from disaster\n- connected to each other with super awesome networking',
      category: {
        id: '8a9b319d-1ea1-4460-aaa5-d5db8618e247',
        name: 'AWS Cloud Overview',
        color: 'brown',
      },
    },
  }),
}
</script>