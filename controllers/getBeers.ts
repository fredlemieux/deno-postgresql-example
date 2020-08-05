import { getBeers } from "../services/beerService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

export default async ({ response }: Context) => {
  response.body = await getBeers();
};
