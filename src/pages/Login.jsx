import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { toast } from "react-toastify";
import { useTitle } from "../hook/useTitle";

const Login = ({ title }) => {
  useTitle(title);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value,
      };
      const data = await login(authDetail);
      data.accessToken
        ? (navigate("/products"), toast.success("Logged in"))
        : toast.error(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLoginGuest = async (e) => {
    e.preventDefault();
    const guestAccount = import.meta.env.VITE_BASE_GUEST_LOGIN;
    const guestPassword = import.meta.env.VITE_BASE_GUEST_PASSWORD;
    const authDetail = {
      email: (email.current.value = guestAccount),
      password: (password.current.value = guestPassword),
    };
    try {
      const data = await login(authDetail);
      data.accessToken
        ? (navigate("/products"), toast.success("Logged in"))
        : toast.error(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form
                onSubmit={handleLogin}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    ref={email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    ref={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <button
                  onClick={handleLoginGuest}
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login as guest
                </button>

                <p className=" text-center text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    to="/register"
                    className="p-2 font-bold text-blue-700  hover:underline dark:text-blue-8000"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
