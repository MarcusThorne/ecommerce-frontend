import { API_ENDPOINT } from ".";

export const getProducts = async () => {
  const response = await fetch(`${API_ENDPOINT}/products`, {
    method: 'GET'
  })

  const data = await response.json()

  return data;
};
