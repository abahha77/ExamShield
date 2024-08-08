import logIn from "../../images/log-in.png";
import "../LogIn/Login.css";
import Joi from "joi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export function LogIn() {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  
  const [listErrors, setListErrors] = useState([]);
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
  
    const schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
      password: Joi.string().required(),
    });
  
    const { error } = schema.validate(userData, { abortEarly: false });
  
    if (error) {
      setListErrors(error.details.map(err => err.message));
      return;
    }
  
      const response = await axios.post('http://127.0.0.1:5000/students/login', userData);
  
      if (response.status == 200) {
        console.log(response)
  
        if (response.data.userType == "Studient") {
          const id = response.data.id;
          console.log(id)
          navigate(`/Studient/${id}`);
        } else if (response.data.userType == "Admin") {
          navigate('/AdminDash');
        }
      } else {
        setListErrors([response.data.error]);
      }
     
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  function navigateToRegister() {
    navigate('/Register');
  }

  return (
    <div className="backColor">
      <div className="w-50 d-flex justify-content-center align-items-md-center container mt-3 border-3">
        <div className="form-control mt-4 mb-5">
          <div className="d-flex justify-content-center align-items-center imageBackColor">
            <img
              src={logIn}
              alt="Log In Image"
              className="w-25 rounded me-4"
            ></img>
          </div>

          <h1 className="text-center color ps-3">Log In</h1>

          <div className="alert alert-danger Alert mt-3" id="alert" role="alert">
            <h6>Error : {listErrors}</h6>
          </div>

          <form onSubmit={handleLogin}>
            <i className="fa-solid fa-user ms-2"></i>
            <label htmlFor="email" className="mt-3 ms-2">
              Email
            </label>

            <input
              onChange={handleInputChange}
              id="email"
              className="form-control"
              type="email"
              required
              placeholder="Email"
            ></input>

            <i className="fa-solid fa-lock ms-1"></i>
            <label htmlFor="password" className="mt-3 ms-2">
              Password
            </label>

            <input
              onChange={handleInputChange}
              id="password"
              className="form-control"
              type="password"
              required
              placeholder="Password"
            ></input>

            <div className="d-flex justify-content-center mt-4 align-items-center">
              <button className="btn btn-outline-primary w-75 rounded-pill">Log In</button>
            </div>
          </form>

          <div className="mt-3 d-block">
            <label htmlFor="reg" className="d-block text-center color pb-2">
              Don't Have An Account?
            </label>
            <div className="d-flex justify-content-center align-items-center">
              <button onClick={navigateToRegister} className="btn btn-outline-primary w-75 rounded-pill mb-4">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
