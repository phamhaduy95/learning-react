import { rest } from "msw";
import { api } from "./api";
import { getAccessToStore } from "./FakeDataStorage";
import { ProductSchema } from "./types";

/** For testing purpose, i suggest returning directly a data object instead of relying on any global storage such as SessionStorage or LocalStorage since each test should be isolated from each other, which mean they should not share any global store object. */

export const handlers = [
  // Handles a POST /login request
  rest.get(api.products.item, async (req, res, ctx) => {
    const id = req.params.productId as string;
    const store = getAccessToStore<ProductSchema>("product");
    const item = await store.getItem(id);
    if (item === undefined) return res();
  }),
  rest.post(api.products.base, async (req, res, ctx) => {
    const productToAdd = await req.json<ProductSchema>();
    const store = getAccessToStore<ProductSchema>("product");
    const result = await store.addItem(productToAdd);
    return res(ctx.status(200));
  }),

  rest.delete(api.products.item, async (req, res, ctx) => {
    const id = req.params.productId as string;
    const store = getAccessToStore<ProductSchema>("product");
    const result = await store.removeItem(id);
    if (!result)
      return res(ctx.status(400), ctx.json({ errorMessage: "item not found" }));
    return res(ctx.status(200));
  }),

  rest.get(api.products.pagination, async (req, res, ctx) => {
    const pageSizeString = req.url.searchParams.get("pageSize");
    const pageIndexString = req.url.searchParams.get("pageIndex");      
    const errorRes = res(
      ctx.status(400),
      ctx.json({ errorMessage: "pageSize and pageIndex not valid" })
    );
    if (pageSizeString === null || pageIndexString === null) return errorRes;
    const pageSize = parseInt(pageSizeString);
    const pageIndex = parseInt(pageIndexString);
    if (Number.isNaN(pageSize) || Number.isNaN(pageIndex)) return errorRes;
    const store = getAccessToStore<ProductSchema>("product");
    const items = await store.getPagination({ pageSize, pageIndex });
    return res(ctx.status(200), ctx.json(items));
  }),
];
