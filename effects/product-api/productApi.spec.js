import { describe, test, expect } from "vitest";
import { getProduct } from "./productApi";

describe("product-api", () => {
  test("getProduct", async () => {
    const data = await getProduct(1);
    console.log(data);
  });
});
