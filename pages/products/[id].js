import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";

export default function Product() {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { id } = router.query;

  async function getProduct(targetId) {
    const res = await axios.get(`products/${targetId}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  }

  useEffect(() => {
    if (!id) return;

    getProduct(id);
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt={product.namge}></img>
    </div>
  );
}
