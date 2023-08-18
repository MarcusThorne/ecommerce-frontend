import React, { useContext } from 'react'
import { Context } from '../App'

function Card({name, price, description, id}) {
  const [basket, setBasket] = useContext(Context)

  const addToBasket = () => {
    setBasket([...basket, {id, name, price, description, quantity: 1, total: price }])
    alert(`You've added ${name} to your basket`)
  }

  return (
    <div className="col-md-8 col-lg-6 col-xl-4 my-3">
      <div className="card" style={{ borderRadius: '15px' }}>
      <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light">
          <img src="https://source.unsplash.com/random/?product"
          style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", maxHeight: '300px', width: '100%', objectFit: 'cover'}} className="img-fluid"
          alt="Laptop" />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body pb-0">
        <div className="d-flex justify-content-between">
          <div>
            <p><a href="#!" className="text-dark">{name}</a></p>
            <p className="small text-muted">Laptops</p>
          </div>
          <div>
            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="small text-muted">Rated 4.0/5</p>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <div className="card-body pb-0">
        <div className="d-flex justify-content-between">
          <p><a href="#!" className="text-dark">${price}</a></p>
          <p className="text-dark">#### {id}</p>
        </div>
        <p className="small text-muted">{description}</p>
      </div>
      <hr className="my-0" />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
          <a href="#!" className="text-dark fw-bold">Cancel</a>
          <button type="button" className="btn btn-primary" onClick={() => addToBasket(id)}>Add to Basket</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card
