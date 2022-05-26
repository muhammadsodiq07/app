import React from 'react'
import "./EditProfile.scss";
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';

function EditProfile(
  {
    setname,name,
    lastname, setlastname, 
    email, setemail,
    number,setnumber,
    password,setpassword,
    country, setcountry,
  }
) {
  const AddName = (e) => {
    setname(e.target.value);
    e.value('');
  }
  const AddLastName = (e) => {
    setlastname(e.target.value);
  }
  const AddEmail = (e) => {
    setemail(e.target.value);
  }
  const AddNumber= (e) => {
    setnumber(e.target.value);
  }
  const AddNPassword= (e) => {
    setpassword(e.target.value);
  }
  const AddCountry= (e) => {
    setcountry(e.target.value)
  }
  const FormSubmit = (e) => {
    e.target.reset();
  }
  return (
    <div className="backround">
      <div className="editProfile container d-flex">
        <div className="edit__left">
            <div className="edit__img-div">
                <img className="edit__img" src="https://imgur.com/VjgEdz3.png" alt="" />
            </div>
        </div>
        <div className="edit__right">
            <h2 className="edit__title">My profile</h2>

          <form onSubmit={FormSubmit}className='d-flex form-group  flex-column'>
            <TextField
              className='form-inputs'
              id="demo-helper-text-aligned"
              label="First name"
              value={name}  
              onChange={AddName}
            />

            <TextField
              className='form-inputs'
              id="demo-helper-text-aligned-no-helper"
              label="Last name"
              value={lastname}
              onChange={AddLastName}
            />
         
            <TextField
              className='form-inputs'
              id="demo-helper-text-aligned-no-helper"
              label="Country"
              value={country}
              onChange={AddCountry}
            />

            <TextField
              className='form-inputs'
              id="demo-helper-text-misaligned"
              label="Phone"
              type='number'
              value={number}
              onChange={AddNumber}
            />

            <TextField
              className='form-inputs'
              id="demo-helper-text-misaligned"
              label="Email"
              type='email'
              value={email}
              onChange={AddEmail}
            />

            <TextField
              className='form-inputs mb-4'
              id="demo-helper-text-misaligned"
              label="Password"
              type='password'
              value={password}
              onChange={AddNPassword}
            />

         <Link className="editLink"to="/Info">
         <Button className='form-btn' variant="contained">Save Changes</Button>
         </Link>
          </form>

        </div>
    </div>
    </div>
  )
}

export default EditProfile
