import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import { useState, useEffect } from "react";

const SmartWatches = () => {
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
      <h1>SmartWatches</h1>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading...</div>
      )}
      <Products/>
      <Footer />
    </>
  );
};

export default SmartWatches;
