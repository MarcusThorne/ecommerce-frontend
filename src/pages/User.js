import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { updateUser } from '../api/auth'

import { findUserInfo } from '../api/auth'

function User() {
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(null)

  const [userData, setUserData ] = useState({
    id: cookies.ID,
    first_name: '',
    last_name: '',
    mobile: '',
    address_name: '',
    address_street: '',
    address_county: '',
    postcode: '',
    country: '',
    facebook_id: '',
    google_id: '',
    password: ''
  })

  // eslint-disable-next-line
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setUserData({...userData, id: cookies.ID})
    const data = await updateUser(userData);

    if (data.detail) {
      setError(data.detail)
      return
    }

    // console.log(data)
    setCookie('Updated', true)
    // console.log(cookies.User)
    setUserData(data)
  }

  useEffect(() => {
    const fetchUser = async () => {
      console.log('this is in user page ', cookies.AuthToken)
      if (cookies.AuthToken !== '') {
        const response = await findUserInfo(cookies.ID)
        setUserData(response.data)
        // console.log(response.data)
        if (cookies.Updated) setCookie('Updated', false)
      }
    }

    fetchUser()
  }, [cookies.AuthToken, setCookie])

  return (
    <div style={{marginTop: '100px'}}>
      <div className="container bg-white mt-5 mb-5 border" style={{ borderRadius: '15px' }}>
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" alt="profile pic" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
              <span className="font-weight-bold">{cookies.Email}</span>
              {userData.first_name && <span className="text-black-50">{userData.first_name} {userData.last_name}</span>}
              <span> </span>
            </div>
          </div>

          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                {/* Firstname field */}
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userData.first_name !== '' ? userData.first_name : 'first name'}
                    value={userData.first_name}
                    onChange={(e) => setUserData({ ...userData, first_name: e.target.value})} />
                </div>
                {/* last name field */}
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userData.last_name}
                    placeholder={userData.last_name !== '' ? userData.last_name : 'last name'}
                    onChange={(e) => setUserData({ ...userData, last_name: e.target.value})} />
                </div>
              </div>

              <div className="row mt-3">
                {/* mobile field */}
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userData.mobile !== '' ? userData.mobile : 'mobile'}
                    value={userData.mobile}
                    onChange={(e) => setUserData({ ...userData, mobile: e.target.value})} />
                </div>
                {/* house name or number field */}
                <div className="col-md-12">
                  <label className="labels">House Name or Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userData.address_name}
                    value={userData.address_name}
                    onChange={(e) => setUserData({ ...userData, address_name: e.target.value}) } />
                </div>
                {/* Address street field */}
                <div className="col-md-12">
                  <label className="labels">Address Street</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userData.address_street}
                    value={userData.address_street}
                    onChange={(e) => setUserData({ ...userData, address_street: e.target.value})} />
                </div>
                {/* address county field s */}
                <div className="col-md-12">
                  <label className="labels">County</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userData.address_county}
                    value={userData.address_county}
                    onChange={(e) => setUserData({ ...userData, address_county: e.target.value})}  />
                </div>
                {/* postcode field */}
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userData.postcode}
                    value={userData.postcode}
                    onChange={(e) => setUserData({ ...userData, postcode: e.target.value})}  />
                </div>
              </div>

              <div className="row mt-3">
                {/* Address country field */}
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userData.country}
                    value={userData.country}
                    onChange={(e) => setUserData({ ...userData, country: e.target.value})} />
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={(e) => handleSubmit(e)} >
                    Save Profile
                </button>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>

  )
}

export default User
