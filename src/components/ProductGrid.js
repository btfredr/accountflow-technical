import Product from "./Product";

const ProductGrid = ({ products, isLoading }) => {
  return isLoading ? (
    <h1>Products are loading... Please wait!</h1>
  ) : (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </section>
  );
};

export default ProductGrid;
