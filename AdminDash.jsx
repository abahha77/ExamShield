import {Link} from "react-router-dom";
import image from "../../images/shield.png";
import "../Studient/Studient.css";
import { useNavigate } from "react-router-dom";
import control from "../../images/control.png";
import image2 from "../../images/id.png";
import image3 from "../../images/view.png";
import image4 from "../../images/exam-results.png";
import myimage from "../../images/IMG_0758.jpg";
import ask from "../../images/ask.png";
import "../AdminDash/AdminDash.css"
import AddQuestion from "../../images/q-and-a.png";
import Control from "../../images/control-system.png";


export function AdminDash()
{
    let navigate=useNavigate();

    function cliked()
    {
        navigate('/Register');
    }

    function cliked1()
    {
        navigate('/questions');
    }

    function cliked2()
    {
        navigate('/view');
    }

    function cliked3()
    {
        navigate('/control')
    }

    return<>
     <ssection className="studient">

        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="left">

                         <div className="info infocolor vh-100 d-block pt-4">
                            
                         <h2 className="text-white  text-center ">Features</h2>
                         <hr className="w-100 border-5"/>
                           
                           <div className="exams d-flex mt-3">
                                <i class="fa-solid fa-question ps-3 fa-3x ms-3"></i>
                                <button className="btn btn-outline-transparent d-block rounded-pill ho" onClick={cliked1}><h3 className="text-light">Add Questions</h3></button>
                             </div>
                             

                            <div className="exams d-flex mt-3">
                                <img src={image4} alt="exam" className="width w-25 ms-4"></img>
                                <button className="btn btn-outline-transparent d-block rounded-pill ho" onClick={cliked2}><h3 className="text-light">View Results</h3></button>
                             </div>

                             <div className="exams d-flex mt-3">
                                <i class="fa-solid fa-gauge ps-3 fa-3x ms-2"></i>
                                <button className="btn btn-outline-transparent d-block rounded-pill ho" onClick={cliked3}><h3 className="text-light me-4">ControlExams</h3></button>
                             </div>

                             <div className="logout d-flex mt-3">
                                <i className="fa-solid fa-right-from-bracket ps-3 fa-3x ms-3"></i>
                                <button className="btn btn-outline-transparent rounded-pill d-block ho" onClick={cliked}><h3 className="text-light">Log Out</h3></button>
                             </div>

                         
                         
                        </div>

                    </div>
                </div>

                <div className="col-9 col-col-sm-7">
                    <div className="right">
                        <div className="upper backimage">
                            <div className="border">
                                
                                <h1 className="pt-3 ps-3 text-center linecolor">Welcome To The Dashboard</h1>
                                <hr className="linecolor w-100 border-5"/>
                                <h5 className="pt-2 ps-3 text-center linecolor">Welcome to your account! Here, you have access to a range of essential features</h5>

                                <div id="carouselExampleAutoplaying" className="carousel slide mt-5 d-flex justify-content-center align-items-center"  data-bs-ride="carousel">
                                <div className="carousel-inner">

                                    <div className="carousel-item active" data-bs-interval="1000">

                       

                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src={AddQuestion} className="d-block w-25" alt="..."></img>
                                        </div>
                                        <h5 className="text-center pt-3 linecolor">Add Questions</h5>
                                        <div className="textback mt-2">
                                            <p className="pt-3 ps-3 text-white text-center pb-4">Administrators have the ability to add new questions. 
                                            This feature allows them to expand the range of available questions for exams and quizzes</p>
                                        </div>
                                       
                                    </div>

                                    <div className="carousel-item" data-bs-interval="2000">

                                         <div className="d-flex justify-content-center align-items-center">
                                            <img src={Control} className="d-block w-25" alt="..."></img>
                                        </div>
                                        <h5 className="text-center pt-3 linecolor">Examination Control</h5>
                                        
                                        <div className="textback mt-2">
                                             
                                                <p className="pt-3 ps-2 pb-2 text-white text-center pb-3"> the proctor holds the authority to control exams, including the ability to end them</p>
                                        </div>
                                        
                                    </div>

                                    <div className="carousel-item" data-bs-interval="3000">

                                         <div className="d-flex justify-content-center align-items-center">
                                            <img src={image3} className="d-block w-25" alt="..."></img>
                                        </div>
                                        <h5 className="text-center pt-3 linecolor">View Results</h5>
                                        <div className="textback mt-2">
                                           
                                             <p className="pt-3 ps-3 pb-2 text-white text-center">After The Studient complete the exam, you can view his results and feedback where
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