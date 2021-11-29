import React, { useState, useRef, useEffect } from "react";
import Header from './header'
import classes from './form.module.css';

const Form = ({ questions, setQuestions, numberOfQuestions, activeQuestion, setActiveQuestion, onsetStep, step, }) => {

    const [error, setError] = useState('')
    const radiosWrapper = useRef('')

    useEffect(() => {
        const findCheckInput = radiosWrapper.current.querySelector('input:checked');

        if (findCheckInput) {
            console.log(findCheckInput);
        }

    }, [activeQuestion])


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
            onsetStep(2)
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
                <div className={classes.main}>
                    <div>
                        <h2>Question {questions[activeQuestion]?.id}:</h2>
                    </div>
                    <div>
                        {questions[activeQuestion].question}
                    </div>
                    <div className={classes.radio} >
                        {questions[activeQuestion].choices.map((choice, i) => (
                            <label key={i} ref={radiosWrapper} >
                                <input type="radio" name='answer' value={choice} checked={Number(choice) === questions[activeQuestion]?.a} onChange={changeHandler} />
                                {choice} </label>
                        ))}
                    </div>

                </div>
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