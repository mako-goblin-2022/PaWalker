<<<<<<< HEAD
const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3')
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true
=======
// Update with your config settings.
const path = require('path')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname,'./dev.sqlite3'),
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
>>>>>>> tailwind
  },

  production: {
    client: 'postgresql',
<<<<<<< HEAD
    connection: process.env.DATABASE_URL,
=======
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
>>>>>>> tailwind
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
<<<<<<< HEAD
}
=======

};
>>>>>>> tailwind
