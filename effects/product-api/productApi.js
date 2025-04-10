import axios from "../../lib/axios";

export const getProduct = async (targetId) => {
  const res = await axios.get(`/products/${targetId}`);
  return res.data;
};
