const { Pool } = require("pg");
const { PGPORT, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } = require("../config");

const pool = new Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
