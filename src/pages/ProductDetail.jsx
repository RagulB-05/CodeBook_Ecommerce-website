import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/elements/Rating";
import { useTitle } from "../hook/useTitle";
import { useCart } from "../context/CartContext";
import { getProduct } from "../services/productService";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    productInCart ? setInCart(true) : setInCart(false);
  }, [cartList, product.id]);

  const {
    name,
    poster,
    image_local,
    rating,
    best_seller,
    in_stock,
    size,
    long_description,
  } = product;

  useTitle(name);

  const { id } = useParams();

  const images = poster ? poster : image_local;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchProduct();
  }, [product]);

  return (
    <main>
      <section className="my-24">
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde
          quisquam magni vel eligendi nam.
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded-lg" src={images} alt={name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">₹</span>
              <span className="">29</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={rating} />
              </span>
            </p>
            <p className="my-4 select-none flex flex-wrap ">
              {best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}

              {in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}

              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {size} MB
              </span>
            </p>
            <p className="my-3">
              {inCart ? (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                    product.in_stock ? "" : "Cursor cursor-not-allowed"
                  } `}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
