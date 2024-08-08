import { Component } from "react";
import "./Registeration.css";
import { useState, useEffect,useRef } from "react";
import Joi from "joi";
import image from "../../images/security.png";
import axios, { Axios } from "axios";
import { useNavigate ,Link, json} from "react-router-dom";

export function Registeration() {

  const [record,setRecord]=useState(false);
  const[listerror,setErrorList]=useState([])
  const[validationError,setValidationError]=useState([])
  const [audioURL, setAudioURL] = useState("");
  const recorder = useRef(null);
  const [userData, setUserData] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    Id: 0,
    password: " ",
    image: "",
  });

  let navigate = useNavigate();


 /* async function sendData(data)
  {
     let response= await axios.post('http://localhost:3000/studients/signup',{fname:data.fname,lname:data.lname,email:data.email,Id:data.Id,password:data.password,image:data.image})
     return response;
  }
 */ 
  
  async function Register(event) {
    event.preventDefault();

    let schema = Joi.object({
      fname: Joi.string().required().max(10),
      lname: Joi.string().required().max(10),
      email:  Joi.string().required(),
      Id: Joi.number().required(),
      password: Joi.string()  
        .required(),
      image:Joi.string(),
    });

    let result = schema.validate(userData, { abortEarly: false });

    if(result.error)
    {
      setErrorList(result.error.details.map(err => err.message));
      console.log("error in validation",result.error.details);
      
    }
    else
    {
      let data = {
        'fname': `${userData.fname}`,
        'lname': `${userData.lname}`,
        'email': `${userData.email}`,
        'password': `${userData.password}`,
        'Id': userData.Id,
        'image': `${userData.image}`
    }
       let response= await axios.post('http://127.0.0.1:5000/students/signup',JSON.stringify(data),{ headers: {
          'Content-Type': 'application/json'
      }})

      console.log(response)

     // if (response.status==200 && response.data.message=='regestered sucessfuly')
     if (response.status==200&&response.data.message=="regestered sucessfuly")
      {
          navigate('/LogIn')
      }
      else
      {
         let error=response.data.error
         setErrorList(error)
         document.getElementById("alert").style.display='block'
      }
    }
  }

  async function change(e) {
    let data = e.target.value;
    let newuser = { ...userData };
    console.log(data);
    newuser[`${e.target.id}`] = data;
    //sendData(newuser);
    setUserData(newuser);
  }

  
 
  const startRecording = () => {
    document.getElementById("stopRecord").style.display="none";
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        recorder.current = mediaRecorder;

        const chunks = [];
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          const url = URL.createObjectURL(blob);
          setAudioURL(url);
        };

        mediaRecorder.start();
        setRecord(true);

        setTimeout(() => {
          mediaRecorder.stop();
          setRecord(false);
        }, 10000); // Stop recording after 10 seconds
      })
      .catch((err) => console.error("Error accessing microphone:", err));
  };


  const stopRecording = () => {
    document.getElementById("startRecord").style="none";
    document.getElementById("stopRecord").style="block";

    if (recorder.current && recorder.current.state === "recording") {
      recorder.current.stop();
      setRecord(false);
    }
  };
 
 
    const recorderRef = useRef(null);
    const playerRef = useRef(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      playerRef.current.src = url;
    }

  
  return (
    <>
      <div className="">
        <div className="conatiner border form-control">
          <div className="row">
            <div className="col-6 contain">
              <div className="leftside mt-5">
                <h1 className="text-center pt-5 text-light">
                  Welcome To Exam Shield
                </h1>
                <h3 className="text-light pt-4 text-center mt-5">
                  Please Register to Start Your Exam
                </h3>
                <div className="d-flex justify-content-center align-items-center">
                  <img src={image} className="w-50 me-3 mt-5" alt="Registeration"></img>
                </div>
              </div>
            </div>

            <div className="col-6 bgx">
              <div className="left">
                <form onSubmit={Register} className="needs-validation" noValidate>

               
              {validationError.length > 0 && (
                <div className="alert-danger" style={{ display: 'block', color: 'red' }}>
                {validationError.map((err, index) => (
            <div key={index}>{err}</div>
          ))}
        </div>
      )}
  
 
                  

                  <label htmlfor="fname" className="pt-4 pb-3 form-label">
                    Please enter your first name
                  </label>
                  <input
                   onChange={change}
                    id="fname"
                    required
                    type="text"
                    min="3"
                    max="5"
                    className="w-100 form-control is-valid"
                    placeholder="First Name"
                  ></input>

                  <label htmlfor="lname" className="pt-4 pb-3">
                    Please enter your last name
                  </label>
                  <input
                    onChange={change}
                    id="lname"
                    required
                    type="text"
                    min="3"
                    max="5"
                    className="w-100 form-control is-valid"
                    placeholder="Second Name"
                  ></input>

                  <label htmlfor="email" className="pt-4 pb-3">
                    Please enter your email
                  </label>
                  <input
                    onChange={change}
                    id="email"
                    required
                    type="email"
                    className="w-100 form-control is-valid"
                    placeholder="Email"
                  ></input>

                  <label htmlfor="Id" className="pt-4 pb-3">
                    Please enter your Id
                  </label>
                  <input
                    onChange={change}
                    Id="Id"
                    required
                    type="number"
                    className="w-100 form-control is-valid"
                    placeholder="ID"
                  ></input>

                  <label htmlfor="password" className="pt-4 pb-3">
                    Please Enter Your Password
                  </label>
                  <input
                    onChange={change}
                    id="password"
                    className="w-100 form-control is-valid"
                    type="password"
                    required
                    placeholder="password"
                  ></input>

                  <label htmlfor="image" className="pt-4 pb-3">
                    Please upload your Image
                  </label>
                  <input
                    onChange={change}
                    id="image"
                    required
                    type="file"
                    accept="image/*"
                    className="w-100 form-control is-valid"
                    placeholder="Image"
                  ></input>

<label htmlfor="recorder" className="pt-3">Please upload your Voice </label>
<input type="file" id="recorder" accept="audio/*" ref={recorderRef} onChange={handleFileChange} className="mt-3 w-100 form-control is-valid "/>


                  <button
                    className="btn btn-outline-primary mt-4 w-100"
                    type="submit"
                  >
                    Register
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
