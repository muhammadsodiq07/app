import React, { useState } from "react";
import "./Forum.scss";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export default function Forum({
  setname,
  setlastname,
  setemail,
  setnumber,
  setpassword,
  setcountry,
}) {
  let [isValed, setValed] = useState(true)

  const AddName = (e) => {
    if(e.target.value.match(/[0-9]/)) {
      setValed(isValed = false)
    }else {
      setValed(isValed = true)
    }
    setname(e.target.value);
  };
  const AddLastName = (e) => {
    if(e.target.value.match(/[0-9]/)) {
      setValed(isValed = false)
    }else {
      setValed(isValed = true)
    }
    setlastname(e.target.value);
  };
  const AddEmail = (e) => {
    if(e.target.value.match(/[@]/)) {
      setValed(isValed = true)
    }else {
      setValed(isValed = false)
    }
    setemail(e.target.value);
  };
  const AddNumber = (e) => {
    if(e.target.value.length < 10) {
      setValed(isValed = false)
    }else {
      setValed(isValed = true)
    }
    setnumber(e.target.value);
  };
  const AddPassword = (e) => {
    if(e.target.value.length < 10) {
      setValed(isValed = false)
    }else {
      setValed(isValed = true)
    }
    setpassword(e.target.value);
  };
  const AddCountry = (e) => {
    if(e.target.value.match(/[0-9]/)) {
      setValed(isValed = false)
    }else {
      setValed(isValed = true)
    }
    setcountry(e.target.value);
  };
  const FormSubmit = (e) => {
    e.target.reset();
  };
  return (
    <div className="calss">
      <div className="form-part">
        <div className="d-flex ">
          <div>
            <img
              className="form-img"
              src="https://reac-badiyat.netlify.app/static/media/form1-img.5b1e8930749c0ae8a972.png"
              alt="formImg"
            />
          </div>

          <div className="col-6 form-right-part">
            <Link to="/">
              <p className="form-back d-flex align-items-center">
                <i className="bx me-1 bxs-left-arrow"></i>Back to Home
              </p>
            </Link>

            <div className="left-text">
              <h2 className="form-title">Sign up</h2>
              <span className="form-info me-2">Already have an account?</span>
              <Link to="/SignIn">
                <span>Sign in</span>
              </Link>
            </div>

            <form
              onSubmit={FormSubmit}
              className="d-flex form-group  flex-column"
            >
              <TextField
                className ={`form-inputs ${isValed === true ? 'corret' : 'error'}`}
                id="demo-helper-text-aligned"
                label="First name"
                onChange={AddName}
              />

              <TextField
                className={`form-inputs ${isValed === true ? 'corret' : 'error'}`}
                id="demo-helper-text-aligned-no-helper"
                label="Last name"
                onChange={AddLastName}
              />

              <TextField
                className={`form-inputs ${isValed === true ? 'corret' : 'error'}`}
                id="demo-helper-text-aligned-no-helper"
                label="Country"
                onChange={AddCountry}
              />

              <TextField
                className={`form-inputs ${isValed === true ? 'corret' : 'error'}`}
                id="demo-helper-text-misaligned"
                label="Phone"
                type="number"
                onChange={AddNumber}
              />

              <TextField
                className={`form-inputs ${isValed === true ? 'corret' : 'error'}`}
                id="demo-helper-text-misaligned"
                label="Email"
                type="email"
                onChange={AddEmail}
              />

              <TextField
                className={`form-inputs mb-4 ${isValed === true ? 'corret' : 'error'}`}
                id="demo-helper-text-misaligned"
                label="Password"
                type="password"
                onChange={AddPassword}
              />

              <Link className="singupLink" to="/">
                <Button className="form-btn" variant="contained">
                  Next step
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
