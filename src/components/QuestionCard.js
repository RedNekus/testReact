import { StyledTest } from '@/components/styles'
import { useEffect, useRef, useState } from 'react'

export default function ({question, trueAnswer, num, func}) {
    //const [isActive, setActive] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [activeId, setActiveId] = useState();

    const listAnswers = useRef(null)

    useEffect(() => {
        const listAnswersElements = Array.from(listAnswers.current.children)
        const checkTrue = (e) => {
            //setActive(true);
            setDisabled(true);
            setActiveId(e.target.value);

            if(e.target.value == trueAnswer) {
                listAnswersElements[e.target.value].classList.add('correct');
            } else {
                listAnswersElements[e.target.value].classList.add('error');

                listAnswersElements[trueAnswer].classList.add('correct');
                listAnswersElements[trueAnswer].classList.add('is-checked');
            }
        }
        listAnswersElements.forEach(answer => answer.addEventListener('change', checkTrue))
        
    }, [listAnswers])

    return (
        <StyledTest.Item>
            <h3>{question.question}</h3>
            {question.answers ? (
            <StyledTest.Answers data-num={num} ref={listAnswers}>
                {question.answers && question.answers.map((item, i)=> (
                    <StyledTest.Answer className={activeId == i ? "is-checked" : ""} key={`answer-${num}-${i}`}>
                        <input type="radio" name={num} id={num} value={i} disabled = {disabled} onChange={func} />
                        <span>{item}</span>
                    </StyledTest.Answer>
                ))}
            </StyledTest.Answers>
            ) : ('')}
        </StyledTest.Item>
    )
}