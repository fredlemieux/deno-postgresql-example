import { Router } from "https://deno.land/x/oak/mod.ts";
import getBeers from "./controllers/getBeers.ts";
import getBeerDetails from "./controllers/getBeerDetails.ts";
import createBeer from "./controllers/createBeer.ts";
import updateBeer from "./controllers/updateBeer.ts";
import deleteBeer from "./controllers/deleteBeer.ts";

const router = new Router();

router
  .get("/beers", getBeers)
  .get("/beers/:id", getBeerDetails)
  .post("/beers", createBeer)
  .put("/beers/:id", updateBeer)
  .delete("/beers/:id", deleteBeer);

export default router;
