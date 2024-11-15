const url = import.meta.env.VITE_BASE_URL;

export const getProductList = async (searchTerm) => {
  const response = await fetch(
    `${url}/444/products?name_like=${searchTerm ? searchTerm : ""}`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const response = await fetch(`${url}/444/products/${id}`);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
};

export const getFeaturedList = async () => {
  const response = await fetch(`${url}/444/featured_products`);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
};
