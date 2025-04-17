import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import axios from "@/lib/axios";
import styles from "@/styles/Search.module.css";
import Head from "next/head";

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  const getProducts = useCallback(async () => {
    const res = await axios.get(`products/?q=${q}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }, [q]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Head>
        <title>{`${q} 검색결과 - Codeitmall`}</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
