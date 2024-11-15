import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
