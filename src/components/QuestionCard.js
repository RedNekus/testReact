import { StyledText } from '@/components/styles'
export default function ({question, num, trueAnswer}) {

    const checkTrue = (e) => {
        console.log(e.target);
        if(e.target.value == trueAnswer) {
            console.log('ответ правильный');
        } else {
            console.log(`Fail!! ${e.target.value} ${trueAnswer}`);
        }
        console.log('check');
    }

    return (
        <StyledText>
            <h3>{question.question}</h3>
            {question.answers ? (
            <ul data-num={num}>
                {question.answers && question.answers.map((item, key)=> (
                    <li>
                        <input type="radio" name={num} id={num} value={key} onChange={checkTrue} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            ) : ('')}
        </StyledText>
    )
}