import { describe, test, expect } from "vitest";
import { getAllProducts, getProduct } from "./productApi";
import { productFixture } from "../../fixtures/product-fixture";

describe("product-api", () => {
  test("getProduct", async () => {
    const data = await getProduct(1);
    expect(data).toEqual(productFixture.results[8]);
  });

  test("getAllProducts", async () => {
    const data = await getAllProducts();
    expect(data).toEqual(productFixture);
  });
});
