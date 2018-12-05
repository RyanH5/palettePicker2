// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/palette_picker_2',
    migrations: {
      directory: './db/migrations'
    },
     seeds: {
       directory: './db/seeds/dev'
     },
    useNullAsDefault: true
  }
};
