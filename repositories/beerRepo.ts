import client from "../db/database.ts";

export type Beer = {
  name: string;
  brand: string;
  is_premium: boolean;
  registration_date?: Date;
};

export const create = async (beer: Beer) => {
  return client.query(
    "INSERT INTO beers (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4) RETURNING id",
    beer.name,
    beer.brand,
    beer.is_premium,
    beer.registration_date,
  );
};

export const selectAll = () => {
  return client.query("SELECT * FROM beers ORDER BY id");
};

export const selectById = (id: string) => {
  return client.query(`SELECT * FROM beers WHERE id = $1`, id);
};

export const update = async (id: string, beer: Beer) => {
  var query =
    `UPDATE beers SET name = $1, brand = $2, is_premium = $3 WHERE id = $4`;

  return client.query(
    query,
    beer.name,
    beer.brand,
    beer.is_premium,
    id,
  );
};

export const deleteBeer = (id: string) => {
  var query = `DELETE FROM beers WHERE id = $1`;

  return client.query(
    query,
    id,
  );
};

export default {
  create,
  selectAll,
  selectById,
  update,
  deleteBeer,
};
