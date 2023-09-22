const path = require("path")
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      // eslint-disable-next-line no-undef
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    pool:{
        afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    migrations: {
        // eslint-disable-next-line no-undef
        directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
      },
    useNullAsDefault: true
  },
};
