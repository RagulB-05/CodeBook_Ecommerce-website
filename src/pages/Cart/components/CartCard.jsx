import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex justify-between text-center">
        <Link to={`/products/${product.id}`}>
          <img
            className="w-32 rounded"
            src={product.poster}
            alt={product.name}
          />
        </Link>
        <div>
          <Link to={`/products/${product.id}`}>
            <p className="text-lg ml-2 dark:text-slate-200">
              The Complete Guide to Backend Development
            </p>
          </Link>
        </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>₹{product.price}</span>
      </div>
      <div className="flex">
        <button
          onClick={() => removeFromCart(product)}
          className=" text-base font-semibold text-red-400 bg-gray-100 rounded-xl px-4  dark:bg-gray-900 dark:font-normal  "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
