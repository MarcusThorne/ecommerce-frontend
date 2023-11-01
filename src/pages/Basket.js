import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'
import { processStripe } from '../api/stripe'
import Product from '../images/product.png'

function Basket() {
  const [basket, setBasket] = useContext(Context)
  const [total, setTotal] = useState(0)

  const updateValue = (index, newValue) => {
    const newBasket = basket.map(item => {
      if(item.id === index) {
        return {
          ...item,
          quantity: newValue,
        }
      } else {
        return item;
      }
    })

    setBasket(newBasket)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const items = []
    basket.map(item => {
      return items.push({ id: item.id, quantity: item.quantity })
    })

    try {
      await processStripe(items);
    } catch (error) {

    }
  }

  useEffect(() => {
    const updateTotal = () => {
      let total = 0;

      basket.map(item => {
        return total += (item.price * item.quantity);
      })

      setTotal(total + 5)
    }

    updateTotal()
  }, [basket])

  return (
    <section className="h-100 h-custom mt-5" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{basket.length} items</h6>
                      </div>
                      <hr className="my-4" />

                        {basket.map((item, index) => (
                          <div key={index} className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img src={Product}
                                style={{
                                  maxHeight: '300px',
                                  width: '100%',
                                  objectFit: 'contain',
                                  backgroundColor: item.colour
                                }}
                                className="img-fluid p-3 rounded"
                                alt="Laptop" />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">{item.name}</h6>
                              <h6 className="text-black mb-0">{item.description}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button className="btn btn-link px-2"
                                // onclick="this.parentNode.querySelec /tor('input[type=number]').stepDown()"
                                >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input id="form1" min="0" name="quantity"  type="number" value={item.quantity}
                                className="form-control form-control-sm" onChange={(e) => updateValue(index, (item.quantity++)) } />

                              <button className="btn btn-link px-2"
                                // onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">£{item.price * item.quantity}.00</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                            </div>
                          </div>
                        ))}

                        <hr className="my-4" />

                            <hr className="my-4" />

                              <div className="pt-5">
                                <h6 className="mb-0">
                                  <Link to='/products' className="text-body">
                                    - Back to shop
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 bg-grey">
                            <div className="p-5">
                              <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                              <hr className="my-4" />

                                <div className="d-flex justify-content-between mb-4">
                                  <h5 className="text-uppercase">items {basket.length}</h5>
                                  <h5>€ {}</h5>
                                </div>

                                <h5 className="text-uppercase mb-3">Shipping</h5>

                                <div className="mb-4 pb-2">
                                  <select className="select">
                                    <option value="1" onClick={() => setTotal(5)}>Standard-Delivery- £5.00</option>
                                  </select>
                                </div>

                                <h5 className="text-uppercase mb-3">Give code</h5>

                                <div className="mb-5">
                                  <div className="form-outline">
                                    <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                    <label className="form-label" >Enter your code</label>
                                  </div>
                                </div>

                                <hr className="my-4" />

                                  <div className="d-flex justify-content-between mb-5">
                                    <h5 className="text-uppercase">Total price</h5>
                                    <h5>£ {total}</h5>
                                  </div>

                                  <button onClick={(e) => handleSubmit(e)}  to="/purchase" className="btn btn-dark btn-block btn-lg"
                                    data-mdb-ripple-color="dark">Buy Now</button>

                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Basket
