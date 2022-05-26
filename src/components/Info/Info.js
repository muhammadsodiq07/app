import React from 'react'
import "./Info.scss"

function Info({name,lastname,email,number,country}) {
  return (
   <div className="info container">
      <div className="info__div">
        <div className="info__main-div d-flex align-items-center">
        <div className="info__avatar-div">
          <img className="info__avatar" src="https://imgur.com/VjgEdz3.png" alt="" />
        </div>
        <div className="info__users-info">
          <h2 className="info__name">
              Name: {name}  {lastname}
          </h2>
          <p className="info__email">
            Email: {email}
          </p>
          <p className="info__phone">
            Phone: +998{number}
          </p>
          <p className="info__country">
            Country: {country}
          </p>
        </div>
        </div>
          <div className="info__img-div">
            <img className="info__img" src="https://imgur.com/Z9C19xG.png" alt="" />
          </div>
      </div>  
   </div> 
  )
}

export default Info
