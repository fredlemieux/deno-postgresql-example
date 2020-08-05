import { Client } from "https://deno.land/x/postgres/mod.ts";

let client = new Client({
  user: "postgres",
  database: "logrocket_deno",
  hostname: "localhost",
  password: "password",
  port: 5432,
});

await client.connect();

export default client;
