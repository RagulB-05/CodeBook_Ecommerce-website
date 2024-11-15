import { useEffect, useState } from "react";
import DashboardCard from "./components/DashboardCard";
import DashboardEmpty from "./components/DashboardEmpty";
import { getUserOrder } from "../../services/dataService";
import { useTitle } from "../../hook/useTitle";
import { toast } from "react-toastify";

const DashboardPage = ({ title }) => {
  useTitle(title);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getUserOrder();
        setOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchOrders();
  }, []);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-20 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length ? (
          orders.map((order) => <DashboardCard key={order.id} order={order} />)
        ) : (
          <DashboardEmpty />
        )}
      </section>
    </main>
  );
};

export default DashboardPage;
