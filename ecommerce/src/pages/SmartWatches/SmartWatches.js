import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";
import { useState, useEffect } from "react";

const SmartWatches = () => {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  const setFilterHandler = (newFilter) => {
    setFilters({ ...filters, ...newFilter });
  };
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
      <h1>SmartWatches</h1>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading...</div>
      )}
      <Products/>
      <Filter onFilterChange={setFilterHandler} />
      <Sort/>
      <Footer />
    </>
  );
};

export default SmartWatches;
