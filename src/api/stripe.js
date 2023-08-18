import { API_ENDPOINT } from ".";

export const processStripe = async (basketItems) => {
  const response = await fetch(`${API_ENDPOINT}/stripe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      basketItems
    })
  }).then(res => {
    if(res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  }).then(({ url }) => {
    console.log( url )
    window.location = url
  }).catch( e => {
    console.error(e.error)
  })

  const data = await response.json()

  return data;
};
