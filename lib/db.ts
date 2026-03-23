import { Pool } from "pg";

declare global {
  // allow global `var` for hot-reload in dev
  // eslint-disable-next-line no-var
  var _pool: Pool | undefined;
}

const pool =
  global._pool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

// store in global (prevents multiple connections)
if (!global._pool) {
  global._pool = pool;
}

export default pool;