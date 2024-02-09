import { useState, useRef } from 'react'
import QuestionCard from '@components/QuestionCard'
export default function () {
    const props = {
        answers: Array(11).fill(null),
        currentQuestion: 0,
        lastIndex: 11

    }

    const handleClick = (i) => {
        if(props.lastIndex > props.currentQuestion) {
            props.answers[props.currentQuestion] = props.currentQuestion ** 2;
            props.currentQuestion += 1;
            console.log(props.answers)
        }
    }

    return (
        <>
        <h1>TEST TEST</h1>
        <button onClick={(i) => handleClick(i)} data-action="start">Пройти тест</button>
        </>
    )
}