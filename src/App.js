import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import End from './components/end';
import { Routes, Route } from 'react-router-dom';

// import QuestionPage from './components/question';

const Questions = [{
  id: 1,
  question: "What is 2*5?",
  choices: [2, 5, 10, 15, 20],
  correctAnswer: 10,
  a: 0
}, {
  id: 2,
  question: "What is 3*6?",
  choices: [3, 6, 9, 12, 18],
  correctAnswer: 18,
  a: 0
}, {
  id: 3,
  question: "What is 8*9?",
  choices: [72, 99, 108, 134, 156],
  correctAnswer: 72,
  a: 0
}, {
  id: 4,
  question: "What is 1*7?",
  choices: [4, 5, 6, 7, 8],
  correctAnswer: 7,
  a: 0
}, {
  id: 5,
  question: "What is 8*8?",
  choices: [20, 30, 40, 50, 64],
  correctAnswer: 64,
  a: 0
}];


function App() {
  const [step, SetStep] = useState(1)
  const [questions, setQuestions] = useState(Questions)
  const [activeQuestion, setActiveQuestion] = useState(0)


  const resetClickHandler = () => {
    setActiveQuestion(0)
    setQuestions(Questions);
    SetStep(1)
    questions.forEach((data) => data.a = 0);
  }
  return (
    <div className="App">
      {/* <div>
        <nav>
          <ul>
            <li><NavLink to="/quiz">Quiz</NavLink></li>
            <li><NavLink to="/quiz_result">Quiz_result</NavLink></li>
          </ul>
        </nav>
      </div> */}
      <Routes>

        <Route path="/" element={
          <Form
            questions={questions}
            setQuestions={setQuestions}
            numberOfQuestions={questions.length}
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
            onsetStep={SetStep}
            step={step}
          />} />
        {/* <Route path="question" element={<QuestionPage questions={questions}
          activeQuestion={activeQuestion}
          setQuestions={setQuestions} />} /> */}
        <Route path="/quiz_result"
          element={<End
            data={questions}
            onReset={resetClickHandler}
          />} />

      </Routes>

    </div>
  );
}

export default App;
