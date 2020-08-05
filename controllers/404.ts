import { Context } from "https://deno.land/x/oak/mod.ts";

export default ({ response }: Context) => {
  response.status = 404;
  response.body = { msg: "Not Found" };
};
