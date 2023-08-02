import { AiFillStar } from "react-icons/ai";
import Button from "../Button/Button";
import "./Products.css"
import Filter from "../Filter/Filter";

const Products = ({ products = [] }) => {
  return (
    <section className="card-container">
      <div className="container mx-auto">
        <div className="product-grid">
          {products.map((product) => {
            console.log(product, "product");
            const { image, title, description, price, category, rating, id } =
              product;
            return (
              <div
                key={id}
                className="product-card"
              >
                <a className="product-image">
                  <img
                    alt={title}
                    className="object-cover object-center w-full h-full block"
                    src={image}
                    height={200}
                    width={200}
                  />
                </a>
                <div className="product-details">
                  <h3 className="product-category">
                    {category}
                  </h3>
                  <h2 className="product-title">
                    {title}
                  </h2>
                  <p className="product-price">${price}</p>
                  <p className="product-rating">
                    <AiFillStar />
                    {rating.rate}
                  </p>
                  <p className="product-button">
                    <Button />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
