
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('palettes').del()
    .then(() => knex('projects').del())
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          project_name: 'Ryans World'
        }, 'id')
        .then(project => {
          return knex('palettes').insert([
            {
              palette_name: 'dirt boy',
              color1: '#111111',
              color2: '#222222',
              color3: '#333333',
              color4: '#444444',
              color5: '#555555',
              project_id: project[0]
            }, {
              palette_name: 'garbage man',
              color1: '#222222',
              color2: '#333333',
              color3: '#444444',
              color4: '#555555',
              color5: '#666666',
              project_id: project[0]
            }
          ])
        })
        .then(() => console.log('SEEDING COMPLETE!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
