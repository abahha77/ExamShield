import {Link} from "react-router-dom";
import image from "../../images/shield.png";
import "../Studient/Studient.css";
import { useNavigate } from "react-router-dom";
import image1 from "../../images/exam.png";
import image2 from "../../images/id.png";
import image3 from "../../images/view.png";
import image4 from "../../images/exam-results.png";
import myimage from "../../images/IMG_0758.jpg";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import "../Studient/Studient.css"

export function Studient()
{
    const { id } = useParams();
    let navigate=useNavigate();

    const [userData,setUserData]=useState({fname:"",lname:"",email:"",image:""})


    let data={
        id
    }
    async function getUserData()
    {
        let response=await axios.post('http://127.0.0.1:5000//students/login/data',data)
        console.log(response.data)
        let userdata={
            fname:response.data.fname,
            lname:response.data.lname,
            email:response.data.email,
            image:response.data.image,
        }
        setUserData(userdata)
    }
    function cliked()
    {
        navigate('/Register');
    }

    function cliked2()
    {
        navigate(`/Exam/${id}`);
    }

    function cliked3()
    {
        navigate(`/Score/${id}`);
    }

    useEffect(() => {
        getUserData();
    }, []);

    return<>
     <ssection className="studient">

        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="left">

                         <div className="info infocolor vh-100 d-block pt-4">

                         <h2 className="text-white  text-center ">Features</h2>
                         <hr className="w-100 border-5"/>
                            
                             <div className="account d-flex mt-3">
                                <i className="fa-solid  fa-3x ps-2 fa-user ms-4"></i>
                                
                                <button className="btn btn-outline-transparent w-75 me-5 pe-5 d-block hovs" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"><h3 className="text-light pe-5 me-5 ms-2 hovs">
                                Account</h3>
                                </button>
                             </div>
                             

                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                             
                                <div div className="offcanvas-header backcolor1">
                                    <h2 className="offcanvas-title text-center mx-auto text-white hovs" id="staticBackdropLabel">Account</h2>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>

                                 <div className="offcanvas-body form-control border bg-body-secondary">


                                 <div className="card" >
                                      {/*<img src={userData.image} className="card-img-top w-100" alt="studient Iamge"></img>*/}
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item">image:<img src={userData.image} alt="userImage"></img></li>
                                         <li className="list-group-item">First Name: {userData.fname}</li>
                                         <li className="list-group-item">Second Name:{userData.lname}</li>
                                         <li className="list-group-item">Id:{id}</li>
                                         <li className="list-group-item">Email:{userData.email}</li>
                                    </ul>
                                </div>
                                              
                                </div>
                            </div>


                            <div className="exams d-flex mt-3">
                                <img src={image4} alt="exam" className="width w-25 ms-4"></img>
                                <button className="btn btn-outline-transparent d-block rounded-pill hovs" onClick={cliked2}><h3 className="text-light hovs">My Exams</h3></button>
                             </div>

                             <div className="exams d-flex mt-3">
                                <i class="fa-solid fa-square-poll-vertical ps-3 fa-3x ms-3"></i>
                                <button className="btn btn-outline-transparent d-block rounded-pill hovs" onClick={cliked3}><h3 className="text-light hovs">Results</h3></button>
                             </div>

                             <div className="logout d-flex mt-3">
                                <i className="fa-solid fa-right-from-bracket ps-3 fa-3x ms-3"></i>
                                <button className="btn btn-outline-transparent d-block hovs" onClick={cliked}><h3 className="text-light hovs">Log Out</h3></button>
                             </div>

                         
                         
                        </div>

                    </div>
                </div>

                <div className="col-9 col-col-sm-7">
                    <div className="right">
                        <div className="upper backimage">
                            <div className="border">
                                
                                <h1 className="pt-3 ps-3 text-center linecolor">Welcome To Your Account</h1>
                                <hr className="linecolor w-100 border-5"/>
                                <h5 className="pt-2 ps-3 text-center linecolor">Welcome to your account! Here, you have access to a range of essential features</h5>

                                <div id="carouselExampleAutoplaying" className="carousel slide mt-5 d-flex justify-content-center align-items-center"  data-bs-ride="carousel">
                                <div className="carousel-inner">

                                    <div className="carousel-item active" data-bs-interval="1000">

                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src={image1} className="d-block w-25" alt="..."></img>
                                        </div>
                                        <h5 className="text-center pt-3 linecolor">Exam Schedule</h5>
                                        <div className="textback mt-2">
                                            <p className="pt-3 ps-3 text-white text-center pb-4">Exam Schedule: Access your exam schedule and view upcoming exams along with their dates, times, and duration.</p>
                                        </div>
                                       
                                    </div>

                                    <div className="carousel-item" data-bs-interval="2000">

                                         <div className="d-flex justify-content-center align-items-center">
                                            <img src={image2} className="d-block w-25" alt="..."></img>
                                        </div>
                                        <h5 className="text-center pt-3 linecolor">Identity Verification</h5>
                                        
                                        <div className="textback mt-2">
                                             
                                                <p className="pt-3 ps-2 pb-2 text-white text-center">The system verifies your identity using various methods, such as facial recognition or photo ID submission, 
                                                 to ensure that the correct student is taking the exam.</p>
                                        </div>
                                        
                                    </div>

                                    <div className="carousel-item" data-bs-interval="3000">

                                         <div className="d-flex justify-content-center align-items-center">
                                            <img src={image3} className="d-block w-25" alt="..."></img>
                                        </div>
                                        <h5 className="text-center pt-3 linecolor">View Results</h5>
                                        <div className="textback mt-2">
                                           
                                             <p className="pt-3 ps-3 pb-2 text-white text-center">After completing an exam, you can view your results and feedback provided by instructors or proctors.
                                              Results may include scores, performance analytics, and comments.</p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>

                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>

                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

     </ssection>
    </>
}