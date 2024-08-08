import '../Questions/AddQuestions.css';
import { useState } from 'react';
import axios from 'axios';

export function AddQuestions() {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({});

  function handleChange(index, event) {
    const { name, value } = event.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  }

  function handleSubmit() {
    const data = questions.map(question => ({
      question: question.question,
      answers: [question.answer1, question.answer2, question.answer3, question.answer4]
    }));
    setFormData(data);
  }

  async function sendData() {
    try {
      const res = await axios.post('http://127.0.0.1:5000/admin/dashbored/addExam', JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  function addQuestion() {
    setQuestions([...questions, { question: "", answer1: "", answer2: "", answer3: "", answer4: ""}]);
  }

  return (
    <div className="form-control boredr">
      <div className="upper mt-5">
        <h1 className="text-center examcolor">Create Your Exam</h1>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button className='btn btn-outline-danger w-75 mb-3 mt-5' onClick={addQuestion}>Add Question</button>
        </div>
      </div>

      {/* Container to hold dynamically added questions */}
      <div id="question-container">
        {questions.map((question, index) => (
          <div className="form-control mb-3" key={index}>
            <form>
              <label htmlFor={`question-${index}`} className="mt-4">Enter Your Question</label>
              <textarea
                className="form-control mt-3"
                placeholder="Enter your question"
                name="question"
                id={`question-${index}`}
                required
                rows="10"
                cols="30"
                value={question.question}
                onChange={(event) => handleChange(index, event)}
              ></textarea>

              {[1, 2, 3, 4].map((answerNum) => (
                <div key={`answer${answerNum}`}>
                  <label htmlFor={`answer${answerNum}-${index}`} className="mt-3">Enter The {answerNum === 1 ? 'Correct' : `Option ${answerNum}`} Answer</label>
                  <input
                    id={`answer${answerNum}-${index}`}
                    className="form-control mb-2"
                    type="text"
                    name={`answer${answerNum}`}
                    required
                    value={question[`answer${answerNum}`]}
                    onChange={(event) => handleChange(index, event)}
                  />
                  
                </div>
              ))}
            </form>
          </div>
        ))}
      </div>

      {/* Submit button */}
      {questions.length > 0 && (
        <div className="btnn d-flex justify-content-center align-items-center ">
          <button
            className="btn btn-outline-primary w-75 mt-5 text-center mb-5"
            onClick={() => {
              handleSubmit();
              sendData();
            }}
          >
            Submit All Questions
          </button>
        </div>
      )}
    </div>
  );
}
