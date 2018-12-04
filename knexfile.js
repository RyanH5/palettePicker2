// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/palette_picker_2',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
