import beerRepo, { Beer } from "../repositories/beerRepo.ts";
import { QueryResult } from "https://deno.land/x/postgres/query.ts";

type GenericObject = { [key: string]: any };

const generateObjectFromQueryResult = (queryResult: QueryResult) => {
  const result: GenericObject[] = [];

  queryResult.rows.map((beer: string[]) => {
    var obj: GenericObject = {};

    queryResult.rowDescription.columns.map((el, i) => {
      obj[el.name] = beer[i];
    });
    result.push(obj);
  });

  return result;
};

export const getBeers = async () => {
  const beers = await beerRepo.selectAll();

  return generateObjectFromQueryResult(beers);
};

export const getBeer = async (beerId: string) => {
  const beer = await beerRepo.selectById(beerId);

  return generateObjectFromQueryResult(beer)[0];
};

export const createBeer = async (beerData: Beer) => {
  const newBeer = {
    name: String(beerData.name),
    brand: String(beerData.brand),
    is_premium: "is_premium" in beerData ? Boolean(beerData.is_premium) : false,
    registration_date: new Date(),
  };

  const queryResponse = await beerRepo.create(newBeer);

  return generateObjectFromQueryResult(queryResponse)[0].id;
};

export const updateBeer = async (beerId: string, beerData: Beer) => {
  const beer = await getBeer(beerId);

  if (Object.keys(beer).length === 0 && beer.constructor === Object) {
    throw new Error("Beer not found");
  }

  const updatedBeer = {
    name: beerData.name !== undefined ? String(beerData.name) : beer.name,
    brand: beerData.brand !== undefined ? String(beerData.brand) : beer.brand,
    is_premium: beerData.is_premium !== undefined
      ? Boolean(beerData.is_premium)
      : beer.is_premium,
  };

  beerRepo.update(beerId, updatedBeer);
};

export const deleteBeer = async (beerId: string) => {
  beerRepo.deleteBeer(beerId);
};
