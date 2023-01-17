import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "The Rational Male",
    description: "The book of all books.",
  },

  {
    id: "p2",
    price: 5,
    title: "The Irrational Female",
    description: "The book of some books.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={6}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
