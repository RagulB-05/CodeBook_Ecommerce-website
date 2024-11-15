import { useEffect, useState } from "react";

import ProductCard from "../../../components/elements/ProductCard";

import { getFeaturedList } from "../../../services/productService";

import { toast } from "react-toastify";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchFeaturedProducts();
  }, [products]);

  return (
    <section className="my-20">
      <h1 className="text-2xl font-semibold text-center mb-5 dark:text-slate-100 underline underline-offset-8 ">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
