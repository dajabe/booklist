/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {
      id: 1,
      series: 'Stormlight Archive',
      title: 'Way of Kings',
      is_fiction: true,
      genre: 'Epic Fantasy',
      referral: null,
      is_read: true,
      img_url:
        'https://www.brandonsanderson.com/wp-content/uploads/2019/11/Way-of-Kings.jpg',
      url: 'https://www.brandonsanderson.com/the-stormlight-archive-series/',
    },
    {
      id: 2,
      series: 'A Song of Ice and Fire',
      title: 'Winds Of Winter',
      is_fiction: true,
      genre: 'Epic Fantasy',
      referral: null,
      is_read: false,
      img_url:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465341854i/12111823.jpg',
      url: 'https://georgerrmartin.com/category/news/winds-of-winter-news/',
    },
    {
      id: 3,
      series: null,
      title: 'Four Thousand Weeks',
      is_fiction: false,
      genre: 'Personal Development',
      referral: 'Work Friend',
      is_read: true,
      img_url: 'https://cdn2.penguin.com.au/covers/original/9781847924018.jpg',
      url: 'https://www.penguin.co.nz/books/four-thousand-weeks-9781847924018',
    },
  ])
}
