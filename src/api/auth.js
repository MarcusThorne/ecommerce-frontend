import { API_ENDPOINT } from ".";

export const getUser = async (endpoint, email, password) => {
  const response = await fetch(`${API_ENDPOINT}/auth/${endpoint}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await response.json()

  return data;
};

export const findUserInfo = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
    method: 'GET'
  })

  const data = await response.json()

  return data;
};

export const updateUser = async (updateInfo) => {
  const response = await fetch(`${API_ENDPOINT}/users/${updateInfo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({updateInfo})
  })

  const data = await response.json()

  return data;
};
