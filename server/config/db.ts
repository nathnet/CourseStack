import pg from "pg";

const { Pool } = pg;

// Connection config (PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE) is read from env by pg
const pool = new Pool({
  connectionTimeoutMillis: 5000,
  statement_timeout: 10000,
});

export default pool;
