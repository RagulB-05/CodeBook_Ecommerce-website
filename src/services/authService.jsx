const url = import.meta.env.VITE_BASE_URL;

export const login = async (authDetail) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(`${url}/login`, requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
};

export const register = async (authDetail) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(`${url}/register`, requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
};

export const logout = async () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
};
