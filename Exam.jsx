import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client'; // Import Socket.IO client library
import '../Exam/Exam.css';
import { useNavigate } from 'react-router-dom';
import { data } from 'jquery';
import axios from 'axios';


export  function Exam() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isExamStarted, setIsExamStarted] = useState(false);
    const [examData, setExamData] = useState([]);
    const [showRules, setShowRules] = useState(true);
    const { id } = useParams();
    const [answers, setAnswers] = useState({});
    const [socket, setSocket] = useState(null);
    const [intervalId, setIntervalId] = useState(null); // State to store interval ID
    let navigate=useNavigate()

    useEffect(() => {
        startCamera();
        const newSocket = io('http://127.0.0.1:5000'); // Connect to the Socket.IO server
        setSocket(newSocket);
        return () => {
            newSocket.close(); // Disconnect the socket when the component unmounts
            clearInterval(intervalId); // Clear the interval when the component unmounts
        };
    }, []);

    // Function to start capturing frames at the specified interval
    function startCapturingFrames() {
        const id = setInterval(() => captureFrame(), 3000);
        setIntervalId(id); // Store the interval ID in state
    }

    function startCamera() {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing webcam:', error);
            });
    }

    function startExam() {
        setShowRules(false);
        fetchExamData();
        setIsExamStarted(true);
        startCapturingFrames(); // Start capturing frames when the exam starts
        document.getElementById("button").style.display = 'block';
        let response=axios.post('http://127.0.0.1:5000/students/login')
    
        // Send the id through the socket
        // if (socket) {
        //    socket.emit('Photo', JSON.stringify({ id })); // Emit the id along with the 'Photo' event
        //    socket.emit('Photo');
        // }
    }

    async function fetchExamData() {
        try {
            const response = await fetch('http://127.0.0.1:5000/studient/dashbored/Exam');
            const data = await response.json();
            setExamData(data);
        } catch (error) {
            console.error('Error fetching exam data:', error);
        }
    }

    async function stopExam() {
        setIsExamStarted(false);
        clearInterval(intervalId);
        document.getElementById("button").style.display = 'none';
        document.getElementById("showbutton").style.display = 'block';
        try {
            const response = await fetch(`http://127.0.0.1:5000/studient/dashbored/Exam/Answers/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(answers)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    }

    function captureFrame() {
        console.log(id)
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const base64Data = canvasRef.current.toDataURL('image/jpeg');
        if (socket) {
            socket.emit('Photo', base64Data, id);
            //socket.emit('Id',  JSON.stringify({ id }));// Emit the base64-encoded image to the server
        }
    }

    function changedData(event) {
        const data = event.target.value;
        const newAnswer = { ...answers };
        newAnswer[event.target.id] = data;
        setAnswers(newAnswer);
    }

    function viewResults()
    {
        navigate(`/Score/${id}`)
    }



    return (
        <>
            <video ref={videoRef} autoPlay className='d-none' />
            <canvas ref={canvasRef} className='' style={{ display: 'none' }} />

            {showRules && (
                <section className="rules border pt-5 d-flex justify-content-center align-items-center" id='rules'>
                    <div className="container">
                        <h2 className="text-center mb-4 rules">Exam Rules</h2>
                        <ul>
                        <div className="d-flex justify-content-center align-items-center">
                            <li className='me-2'>Keep your webcam on during the entire duration of the exam.</li>
                        </div>

                        <div className="d-flex justify-content-center align-items-center ps-3">
                            <li className='me-1'>Ensure that your microphone is enabled for proctoring purposes.</li>
                        </div>

                        <div className="d-flex justify-content-center align-items-center ps-5 ms-5">
                            <li className=''>Do not leave the exam page or switch to other applications during the exam.</li>
                        </div>

                        <div className="d-flex justify-content-center align-items-center ps-5 ms-5">
                            
                            <li className='ms-2'>Do not attempt to communicate with others or access unauthorized materials.</li>
                        </div>
                        </ul>
                        <div className="d-flex justify-content-center align-items-center">
                            {!isExamStarted && <button onClick={startExam} className='btn btn-outline-primary mb-5 mt-5 w-50'>Start Exam</button>}
                        </div>
                    </div>
                </section>
            )}

            {isExamStarted && (
                <section className="exam mb-5">
                    <div className="form-control border-3 d-block">
                        <div className='exambackcolor'>
                            <h3 className='text-center pb-4 pt-3 text-light'>Choose One option from below questions</h3>
                        </div>
                        {examData.map((element, index) => (
                            <form key={index}>
                                <label htmlFor={`question${index}`} className='mt-3'>Q:{index} {element.question}</label>
                                <select id={`q${index}`} name="answers" size="4" className='d-block form-control mb-3 mt-2' required onChange={changedData}>
                                    <option value={element.answer2}>{element.answer1}</option>
                                    <option value={element.answer1}>{element.answer2}</option>
                                    <option value={element.answer3}>{element.answer3}</option>
                                    <option value={element.answer4}>{element.answer4}</option>
                                </select>
                            </form>
                        ))}
                    </div>
                </section>
            )}

            <div className="d-flex justify-content-center align-items-center">
                <button className='btn btn-outline-primary mt-3 w-50 mb-4 buttonc' id="button" type='submit' onClick={stopExam}>Submit</button>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <button className='btn btn-outline-primary mt-3 w-50 mb-4 exit' id="showbutton" type='submit' onClick={viewResults}>View Results</button>
            </div>


            
        </>
    );
}
