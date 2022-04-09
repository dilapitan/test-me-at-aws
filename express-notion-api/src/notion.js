const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NOTION_API_KEY })

// async function getDatabase() {
//   try {
//     const response = await notion.databases.retrieve({
//       database_id: process.env.NOTION_DATABASE_ID,
//     })
//   } catch (error) {
//     throw new Error(error)
//   }
// }

function notionPropertiesById(properties) {
  return Object.values(properties).reduce((obj, property) => {
    const { id, ...rest } = property
    return { ...obj, [id]: rest }
  }, {})
}

function fromNotionObject(notionPage) {
  const propertiesById = notionPropertiesById(notionPage.properties)

  return {
    id: notionPage.id,
    question:
      propertiesById[process.env.NOTION_DATABASE_QUESTION_PROPERTY_ID].title[0]
        .plain_text,
    answers:
      propertiesById[process.env.NOTION_DATABASE_ANSWERS_PROPERTY_ID]
        .rich_text[0].plain_text,
    category:
      propertiesById[process.env.NOTION_DATABASE_CATEGORY_PROPERTY_ID].select,
  }
}

async function getFlashcards() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [
        {
          property: process.env.NOTION_DATABASE_QUESTION_PROPERTY_ID,
          direction: 'descending',
        },
      ],
    })
    const flashcards = response.results.map(fromNotionObject)

    return flashcards
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getFlashcards,
}
