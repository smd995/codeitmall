import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Header from "@/components/Header";
import Container from "@/components/Container";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get(`/products`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SearchForm />
        <ProductList className={styles.productList} products={products} />
      </Container>
    </>
  );
}
