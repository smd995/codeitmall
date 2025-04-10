import axios from "../../lib/axios";

export const getProduct = async (targetId) => {
  const res = await axios.get(`/products/${targetId}`);
  return res.data;
};

export const getAllProducts = async () => {
  const res = await axios.get(`/products`);
  return res.data;
};
