import { StyledTest } from '@/components/styles'
import { useEffect, useRef, useState } from 'react'

export default function ({question, trueAnswer, num, func,hiddenClass}) {
    const [disabled, setDisabled] = useState(false);
    const [activeId, setActiveId] = useState();

    const listAnswers = useRef(null)

    useEffect(() => {
        const listAnswersElements = Array.from(listAnswers.current.children)
        const checkTrue = (e) => {
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

    useEffect(() => {
        console.log('scroll');
        //listAnswersElements[num + 1].scrollIntoView(alignToTop);
    }, [disabled])

    return (
        <>
            <h3>{num + 1}. {question.question}</h3>
            {question.answers ? (
            <StyledTest.Answers data-num={num} ref={listAnswers}>
                {question.answers && question.answers.map((item, i)=> (
                    <StyledTest.Answer className={activeId == i ? "is-checked" : null} key={`answer-${num}-${i}`}>
                        <StyledTest.Label 
                            type="list"
                            checked={activeId == i}
                        >
                            <input 
                                type="radio"
                                name={num}
                                id={num}
                                value={i}
                                disabled = {disabled}
                                onChange={func}
                                checked={activeId == i}
                            />
                            {item}
                        </StyledTest.Label>
                    </StyledTest.Answer>
                ))}
            </StyledTest.Answers>
            ) : ('')}
        </>
    )
}