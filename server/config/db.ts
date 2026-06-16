import pg from "pg";

const { Pool } = pg;

// Connection config (PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE) is read from env by pg
const pool = new Pool();

export default pool;
