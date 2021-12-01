import React, { useState,useEffect} from "react";
import Header from './header'
import classes from './form.module.css';
import { useNavigate,Routes,Route } from "react-router-dom";
import Question from "./question";

const Form = ({ questions,setQuestions,  numberOfQuestions, activeQuestion, setActiveQuestion}) => {

    const [error, setError] = useState('')

    let navigate = useNavigate();
    // let param=useParams();

   useEffect(()=>{
    navigate(`/:${questions[activeQuestion].id}`)
   },[navigate,activeQuestion,questions])
   const changeHandler = (e) => {

    const updatedAnswer = questions.map((x, i) => {
        if (i === activeQuestion) {
            x.a = Number(e.target.value)
        }
        return x
    })
    setQuestions(updatedAnswer)
    if (error) {
        setError('')
    }
}

    function nextClickHandler(e) {
        if (questions[activeQuestion].a === 0) {
            setError('Please Select One Option!')
        }
        if (activeQuestion < numberOfQuestions - 1) {
            setActiveQuestion(activeQuestion + 1)
        }
        else {
            navigate("/quiz_result");
        }
    }

    function previousClickHandler() {
        if (activeQuestion > 0) {
            setActiveQuestion(activeQuestion - 1)

        }

    }

    console.log(questions[activeQuestion], questions, activeQuestion)
    return (
        <>
            
            <div className={classes.container}>
                <Header />
                {/* <Routes>
                    <Route element={<Question
                    questions={questions}
                    activeQuestion={activeQuestion}
                    changeHandler={changeHandler}
                />}>
                    </Route>
                </Routes> */}
            
                {error && alert(error)}
                <div className={classes.buttons} >
                    {activeQuestion > 0 && <button className={classes.button} value="previous" onClick={previousClickHandler}>Prev </button>}
                    <button className={classes.button} value="Next" onClick={nextClickHandler}>Next </button>
                </div>
            </div>
        </>
    )
}



export default Form