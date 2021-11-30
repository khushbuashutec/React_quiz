import React, { useEffect, useState } from "react";
import Header from "./header";
import classes from './form.module.css';


const End = ({ data, onReset }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0)
    console.log(data)
    useEffect(() => {
        let correct = 0;
        data.forEach((result, index) => {
            if (Number(result.a) === data[index].correctAnswer) {
                correct++;

            }
            console.log(result.a);
        });
        setCorrectAnswers(correct);

    }, [data])


    return (
        <div className={classes.container}>
            <Header />
            <div>
                <h3>Your Result</h3>
                <p>{correctAnswers} Outof {data.length}</p>
            </div>
            <div className={classes.buttons} >
                <button className={classes.button} value="Start Again" onClick={onReset}>Start Again </button>
            </div>
        </div>
    )
}
export default End