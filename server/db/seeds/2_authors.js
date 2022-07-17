/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('authors').del()
  await knex('authors').insert([
    {
      id: 1,
      name: 'Brandon Sanderson',
      img_url:
        'https://www.brandonsanderson.com/wp-content/uploads/2019/11/BrandonGray-776x1024.jpg',
      url: 'https://www.brandonsanderson.com/',
    },
    {
      id: 2,
      name: 'George R.R. Martin',
      img_url:
        'https://georgerrmartin.com/notablog/wp-content/themes/dark-shop-lite/images/grrm-photo.jpg',
      url: 'https://georgerrmartin.com/',
    },
    {
      id: 3,
      name: 'Oliver Burkeman',
      img_url:
        'https://static.wixstatic.com/media/053ea9_1ce8ae1394584317bd0892aae6c96377~mv2.jpg',
      url: 'https://www.oliverburkeman.com/',
    },
  ])
}
