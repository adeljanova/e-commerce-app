import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";
import { useState, useEffect } from "react";
import Description from "../../components/Description/Description";

const SmartWatches = () => {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 0 });
  const [filters, setFilters] = useState({ category: "", price: "" });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sorting, setSorting] = useState("");
 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data);

        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);

        const prices = data.map((product) => product.price);
        setPrice({ min: Math.min(...prices), max: Math.max(...prices) });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.price) {
      const price = parseFloat(filters.price);
      filtered = filtered.filter((product) => product.price <= price);
    }


    switch (sorting) {
      case "az":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, products, sorting]);

  const setFilterHandler = (newFilter) => {
    setFilters({ ...filters, ...newFilter });
  };

  const setSortingHandler = (newSort) => {
    setSorting(newSort);
  };

 
  return (
    <>
      <Navbar />
      <Description/>
      
      <Filter
        categories={categories}
        price={price}
        onFilterChange={setFilterHandler}
      />
      
      {filteredProducts.length > 0 ? (
        <Products products={filteredProducts} />
      ) : (
        <div>Loading...</div>
      )}
     
      <Sort onSortChange={setSortingHandler} />
      <Footer />
    </>
  );
};

export default SmartWatches;
