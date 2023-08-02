import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Sort from "../../components/Sort/Sort";
import { useEffect, useState } from "react";

const MobilePhones = () => {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Navbar />
      <h1>MobilePhones</h1>
      <h3>description</h3>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading...</div>
      )}
      <Products />
      <Filter />
      <Sort/>
      <Footer />
    </>
  );
};

export default MobilePhones;
