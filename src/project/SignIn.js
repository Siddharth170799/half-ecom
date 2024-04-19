import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [error,setError]=useState("")
  console.log(input);
  console.log(input2);
  const details = useSelector((state) => state.New.userDetails);
  console.log(details);
  const navigate = useNavigate();
  // console.log(details[0].username)
  // const verify=(e)=>{
  //     e.preventDefault()
  //     if(details[0].email==input && details[0].password==input2){
  //         navigate("/dashboard")
  //     }
  //     else{
  //         console.log("error")
  //     }
  // }
  const verify = (e) => {
    e.preventDefault();
    const user = details.find(
      (user) => user.email === input && user.password === input2
    );
    if (user) {
      navigate("/dashboard");
    } else {
      console.log("Invalid email or password");
    //   let g=
      alert("Wrong Email or Wrong Password")
    //   setError(g)
    }
  };
 
  return (
    <div>
      <div class="container">
        <form class="signin-form">
          <h2>Sign In</h2>
          <div class="form-group">
            <label for="username">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={input}
              required
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={input2}
              required
              onChange={(e) => {
                setInput2(e.target.value);
              }}
            />
          </div>
          <button type="submit" onClick={verify}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
