import axios from "../../lib/axios";

export const getProduct = async (targetId) => {
  const res = await axios.get(`/products/${targetId}`);
  return res.data;
};

export const getAllProducts = async () => {
  const res = await axios.get(`/products`);
  return res.data;
};

export const getAllSizeReviews = async () => {
  const res = await axios.get(`/size_reviews/?limit=30`);
  return res.data;
};

export const getSizeReview = async (targetId) => {
  const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
  return res.data;
};
