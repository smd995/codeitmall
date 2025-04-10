import { describe, test, expect } from "vitest";
import {
  getAllProducts,
  getProduct,
  getAllSizeReviews,
  getSizeReview,
} from "./productApi";
import { productFixture } from "../../fixtures/product-fixture";
import { reviewFixture } from "../../fixtures/review-fixture";

describe("product-api", () => {
  test("getProduct", async () => {
    const targetId = 1;
    const data = await getProduct(targetId);
    expect(data).toEqual(productFixture.results[8]);
  });

  test("getAllProducts", async () => {
    const data = await getAllProducts();
    expect(data).toEqual(productFixture);
  });

  test("getSizeReview", async () => {
    const targetId = 1;
    const data = await getSizeReview(targetId);
    const filteredReviewFixture = reviewFixture.results.filter(
      (review) => review.productId === targetId
    );
    expect(data.results).toEqual(filteredReviewFixture);
  });

  test("getAllSizeReviews", async () => {
    const data = await getAllSizeReviews();
    expect(data).toEqual(reviewFixture);
  });
});
