import React from "react";
import CartList from "./components/CartList";
import CartEmpty from "./components/CartEmpty";
import { useCart } from "../../context/CartContext";
import { useTitle } from "../../hook/useTitle";

const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);
  return (
    <main>
      <div className="my-20">
        {cartList.length ? <CartList /> : <CartEmpty />}
      </div>
    </main>
  );
};

export default CartPage;
