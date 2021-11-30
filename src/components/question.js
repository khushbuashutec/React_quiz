import React, { useRef, useEffect } from "react";
import classes from './form.module.css';
import { Link } from 'react-router-dom'

const Question = ({ questions, activeQuestion, changeHandler }) => {

    const radiosWrapper = useRef('')
    console.log(questions);
    useEffect(() => {
        const findCheckInput = radiosWrapper.current.querySelector('input:checked');

        if (findCheckInput) {
            console.log(findCheckInput);
        }

    }, [activeQuestion])

    return (
        <>
            <div className={classes.main}>
                <Link to="/question" />
                <div>
                    <h2>Question {questions[activeQuestion].id}:</h2>
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
        </>
    )

}
export default Question