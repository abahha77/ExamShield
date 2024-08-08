import image from "../../images/New-Age-Remote-Proctoring-Features-To-Ensure-Fair-Examinationsfb-06.png";
import '../About/About.css'
import image2 from "../../images/Blog-Image-4-Ways-Online-Proctoring-Can-Scale-Your-Certification-Program.png";
import image3 from "../../images/face-scan.png";
import image4 from "../../images/4680377.png";
import image5 from "../../images/eye-tracking.png";
import image6 from "../../images/video-record.png";
import image7 from "../../images/facial-recognition.png";
import image8 from "../../images/online-resume.png";
import image9 from "../../images/responsibility.png";
import image10 from "../../images/advantage.png";
import {Link} from "react-router-dom";

export function About()
{
    return<>

    <div className="about mt-5 backx">
        <h1 className="text-center textcolor pt-3">Exam Shield</h1>
        <p className="text-center pt-3 mb-3 pb-5 font">Exam Shield is a sophisticated and secure examination monitoring solution<br/>
         designed to uphold the integrity of online assessments.
         the proctoring system ensures a fair<br/> and transparent examination environment in virtual settings.<br/>
         By leveraging advanced technologies.</p>
         </div>
     
     <div className="container mt-4">
        <div className="row">
            <div className="col-6 mt-5">
                <div className="left">
                    <img src={image} className="w-100 rounded-pill" alt="studient set on a desk"></img>
                </div>
            </div>

            <div className="col-6 mt-5">
                <div className="right ms-4 mt-4">
                    <h2 className="textcolor">Human Proctor</h2>
                    <p className="pt-3">A Human proctor is a person who takes charge of, or acts for, another. 
                    The word proctor is frequently used to describe someone who oversees an exam. 
                    In today’s testing environment, a proctor will typically verify a student’s identity
                     by checking a photo ID and then ensures academic integrity guidelines are followed during the exam.</p>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-6">
            <div className="left2 mt-5">
                <h2 className="textcolor">What Is Exam Shield ?</h2>
                <p className="pt-3">Exam Shield is an automated, helps to prevent cheating by monitoring the test-taker's 
                behavior and detecting any suspicious activity, such as looking away from the screen or having someone else in the room.
                This technology can also help to ensure the integrity and fairness of the exam process by providing
                 a standardized and objective assessment for all test-takers.
                                                                                </p>
            </div>
            </div>

            <div className="col-6">
                <div className="right2">
                    <img src={image2} className="w-100 rounded-pill" alt="online proctoring"></img>
                </div>
            </div>
        </div>
     </div>

        <div className="display mt-5 backx">
            <h2 className="text-center textcolor pt-5">Exam Shield Features</h2>
            <div className="container mb-5">
                <div className="row">

                    <div className="col-4  mb-5 d-flex flex-fill">
                        <div className="face border form-control mt-5 ho d-flex flex-column align-items-stretch">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={image3} className="w-25 mt-3" alt="image verfication"></img>
                            </div>
                            <h3 className="text-center textcolor pt-3 tex">Face Verfication</h3>
                            <p className="text-center pt-3">
                            The student is recognized and if the face matches with the stored face image then the student is verified
                             and allowed to give the exam. During the exam the image of the student is continuously
                            </p>
                        </div>
                    </div>

                    <div className="col-4 mb-5 d-flex flex-fill">
                        <div className="voice border form-control mt-5 ho d-flex flex-column align-items-stretch">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={image4} className="w-25 mt-3" alt="speech verfication"></img>
                            </div>
                            <h3 className="text-center textcolor pt-3 tex">Speech Detection</h3>
                            <p className="text-center pt-3">Speech Detection is a technology that automates the monitoring of sound around the candidate by comparing sample input from microphone to pre-saved voice print of the candidate.    </p>
                        </div>
                    </div>


                    <div className="col-4 h-50 d-flex flex-fill">
                        <div className="voice border form-control mt-5 ho d-flex flex-column align-items-stretch">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={image5} className="w-25 mt-3" alt="eye tracking"></img>
                            </div>
                            <h3 className="text-center textcolor pt-3 tex">Eye Tracking</h3>
                            <p className="text-center pt-3">Eye tracking refers to the use of artificial intelligence (AI) technology to monitor 
                            and analyze the movement and behavior of a test-taker's eyes during an examination conducted
                             through a exam shield system.  </p>
                        </div>
                    </div>

              
            </div>

            <div className="row">

                <div className="col-4 mb-5  d-flex flex-fill">
                        <div className="Recording border form-control ho d-flex flex-column align-items-stretch">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={image6} className="w-25 mt-3" alt="Real Time Recording"></img>
                            </div>
                            <h3 className="text-center textcolor pt-3 tex">Real Time video Recording</h3>
                            <p className="text-center pt-3">
                            Real-time video recording is to monitor the test-taker's
                             behavior and ensure the integrity of the assessment process.
                            </p>
                        </div>
                </div>

                <div className="col-4 mb-5 d-flex flex-fill">
                        <div className="Head border form-control ho d-flex flex-column align-items-stretch">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={image7} className="w-25 mt-3" alt="Real Time Recording"></img>
                            </div>
                            <h3 className="text-center textcolor pt-3 tex">Head Pose Estimation</h3>
                            <p className="text-center pt-3">
                            This technology detects and tracks the position and movement of the head in real-time, 
                            providing additional insights into the test-taker's behavior .
                            </p>
                        </div>
                </div>


                <div className="col-4 mb-5 d-flex flex-fill">
                        <div className="Head border form-control ho d-flex flex-column align-items-stretch">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={image8} className="w-25 mt-3" alt="Real Time Recording"></img>
                            </div>
                            <h3 className="text-center textcolor pt-3 tex">Admin Dashbored</h3>
                            <p className="text-center pt-3">
                            An admin dashboard in a proctoring system serves as a centralized interface for administrators, instructors, or proctors
                             to monitor and manage online exams and assessments. 
                            </p>
                        </div>
                </div>


            </div>

        </div>
     </div>


    <div className="benifits mt-5">
        <div className="container">
            <div className="row">

                <div className="col-6">

                    <div className="leftbenifits">
                        <img src={image9} className="w-50 ms-5"></img>
                    </div>

                    <ul className="mt-4">
                        
                    <li>
                            <h4>Data and Insights:</h4>
                            <p>Proctoring systems generate data and insights into test-taker behavior during exams. This information can be valuable for analyzing patterns, identifying potential issues, 
                            and improving the overall exam-taking experience.</p>
                        </li>

                        <li>
                            <h4>Security Measures:</h4>
                            <p>Identity verification and monitoring enhance the security of exams, making sure the right person 
                            is taking the test.</p>
                        </li>
                    </ul>

                </div>

                <div className="col-6 pt-4">

                    <div className="rightbenifits me-4">
                     <h2 className="text-center textcolor pe-5 me-2">Benifits of Using Exam Shield</h2>
                     <ul className="pt-3 ">
                        <li>
                            <h4>Maintaining Academic Integrity:</h4>
                            <p>Proctoring helps prevent cheating and academic dishonesty during exams, ensuring that the assessment
                                 accurately reflects a student's knowledge and skills.</p>
                        </li>

                        <li>
                            <h4>Remote Assessment:</h4>
                            <p>Proctoring facilitates remote assessments, allowing students to take exams from the comfort of their homes or any location with an internet connection. 
                            This is especially valuable for online courses and distance education.</p>

                        </li>
                     </ul>
                     <img src={image10} alt="advantage" className="w-50 ms-5"></img>
                    </div>

                </div>

            </div>
        </div>
    </div>

    </>
}