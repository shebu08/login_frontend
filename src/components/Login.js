import React, { useState } from "react";
import "./mix.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import Swal from "sweetalert2";
const Login = () => {
  const [passShow , setpassShow] = useState(false)
  const [inpval, setinpval] = useState({
    email: "",
    password: "",
    
  });
  // console.log(inpval)
  
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

  const loginuser = async (e)=>{
    e.preventDefault();
    const {email , password} = inpval;
    if (email === "") {
      alert("Please Enter your Email");
    } else if (!email.includes("@")) {
      alert("Enter Valid email");
    }else if(password === ''){
      alert('Please Enter Password')
    }else if(password.length <6){
      alert("Password must be 6 Charecter")
    }else{
      // console.log("User Registration Succesfully")
      const res= await axios.post("http://localhost:8009/login",inpval);
      console.log(res);
      // if(res.status === 201){
      //   Swal.fire({
      //     position: "center",
      //     icon: "success",
      //     title: "Your work has been saved",
      //     showConfirmButton: false,
      //     timer: 1500
      //   });
      //   setVal({...inpval, email:"", password:"",   })
      // }
    }
  }
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back To Login</h1>
            <p style={{ color: "black" }}>
              Hey we are glad you are back. Please Login
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={inpval.email}
                onChange={setVal}
                name="email"
                id="email"
                placeholder="Enter your Email Address"
              />
            </div>
            {/* PassWord */}
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text" }
                  name="password"
                  onChange={setVal}
                  value={inpval.password}
                  id="password"
                  placeholder="Enter your Password"
                />
                <div className="showpass" onClick={()=>setpassShow(!passShow)}>{!passShow ? "Show" : "Hide"}</div>
              </div>
            </div>
            <button className="btn" onClick={loginuser}>Login</button>
            <p>Dont't have an Account ? <Link to='/register' >Sign Up</Link></p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
