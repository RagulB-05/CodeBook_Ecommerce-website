import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProducList from "../pages/products/ProductList";
import CartPage from "../pages/Cart/CartPage";
import ProductDetail from "../pages/ProductDetail";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import OrderPage from "../pages/order/OrderPage";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage title="Access Latest Computer Science E-Books " />}
        />
        <Route
          path="products"
          element={<ProducList title="Explore eBook Collection" />}
        />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoutes>
              <OrderPage title="Orders-summary" />
            </ProtectedRoutes>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage title="DashBoard" />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<Login title="Login" />} />
        <Route path="register" element={<Register title="Register" />} />
        <Route path="*" element={<PageNotFound title="PageNotFound" />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
