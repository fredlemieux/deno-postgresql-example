import { updateBeer } from "../services/beerService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

interface ContextWithParams extends Context {
  params: {
    id: string;
  };
}

export default async ({ params, request, response }: ContextWithParams) => {
  const beerId = params.id;

  if (!beerId) {
    response.status = 400;
    response.body = { msg: "Invalid beer id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid beer data" };
    return;
  }

  const { name, brand, is_premium } = await request.body().value;

  await updateBeer(beerId, { name, brand, is_premium });

  response.body = { msg: "Beer updated" };
};
