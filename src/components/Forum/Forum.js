import React from 'react'
import './Forum.scss'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'




export default function Forum() {
  return (
    <div className="calss">
        <div className='form-part'>
      <div className='d-flex '>
        <div>
          <img className='form-img' src="https://reac-badiyat.netlify.app/static/media/form1-img.5b1e8930749c0ae8a972.png" alt="formImg" />
        </div>

        <div className='col-6 form-right-part'>
          <Link to='/'>
            <p className='form-back d-flex align-items-center'><i className='bx me-1 bxs-left-arrow'></i>Back to Home</p>
          </Link>

          <div className='left-text'>
            <h2 className='form-title'>Sign up</h2>
            <span className='form-info me-2'>Already have an account?</span>
            <Link to="/SignIn">
              <span>Sign in</span>
            </Link>

          </div>
          
          <form className='d-flex form-group  flex-column'>
            <TextField
              className='form-inputs'
              id="demo-helper-text-aligned"
              label="First name"
            />

            <TextField
              className='form-inputs'
              id="demo-helper-text-aligned-no-helper"
              label="Last name"
            />
         
            <TextField
              className='form-inputs'
              id="demo-helper-text-misaligned"
              label="Phone"
              type='number'
            />

            <TextField
              className='form-inputs'
              id="demo-helper-text-misaligned"
              label="Email"
              type='email'
            />

            <TextField
              className='form-inputs mb-4'
              id="demo-helper-text-misaligned"
              label="Password"
              type='password'
            />

           <Button className='form-btn' variant="contained">Next step</Button>

          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
