import React, { useState } from "react";
import "./mix.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const Register = () => {
  const [passShow, setpassShow] = useState(false);
  const [cpassShow, csetpassShow] = useState(false);
  const [inpval, setinpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setinpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  //Form Validation
  const addUserData = async (e) => {
    e.preventDefault();
    const { fname, email, password, cpassword } = inpval;
    if (fname === "") {
      alert("Please Enter Your Name");
    } else if (email === "") {
      alert("Please Enter your Email");
    } else if (!email.includes("@")) {
      alert("Enter Valid email");
    } else if (password === "") {
      alert("Please Enter Password");
    } else if (password.length < 6) {
      alert("Password must be 6 Charecter");
    } else if (cpassword === "") {
      alert("Please Enter confirm password");
    } else if (password !== cpassword) {
      alert("Password Doesn't Match");
    } else {
      // const data = await axios.post("http://localhost:8009/register", {
      //   method: "POST",
      //   headers: {
      //     "Conect-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     fname,
      //     email,
      //     password,
      //     cpassword,
      //   }),
      // });

      const res= await axios.post("http://localhost:8009/register",inpval);
      // console.log(res.status);
      if(res.status === 201){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        setVal({...inpval, fname: "", email:"", password:"", cpassword : ""})
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ color: "black" }}>
              Hey we are glad you are back. Sign Up
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Enter your Name"
                onChange={setVal}
                value={inpval.fname}
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                name="email"
                id="email"
                placeholder="Enter your Email Address"
                value={inpval.email}
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  value={inpval.password}
                  id="password"
                  placeholder="Enter your Password"
                  onChange={setVal}
                />
                <div
                  className="showpass"
                  onClick={() => setpassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            {/* ConfirmPas */}
            <div className="form_input">
              <label htmlFor="Confirm_password">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.cpassword}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Enter your Confirm Password"
                />
                <div
                  className="showpass"
                  onClick={() => csetpassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={addUserData}>
              Sign Up
            </button>
            <p>
              All Ready Have an Account?{" "}
              <Link to={"/"} style={{ color: "black" }}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
