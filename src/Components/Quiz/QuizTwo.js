import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { choose_correct } from './redux/Action'
function QuizTwo(props) {
    const { item, success, setsuccess, CountQest, setCountQest, setIndex, index_, setShow, show, setCount, Count } = props
    const dispatch = useDispatch();
    const stateCorrectAnswer = useSelector(state => state.Quizdata[CountQest].correctAnswer.map(i => i.id_correctAnswer));
    const state = useSelector(state => state.Quizdata);

    const handl = (index) => {
        dispatch(choose_correct(index))
        if (index_ == state.length - 2) {
            setShow(true)
            setIndex(0)
        }
        setCount(Count + 1);
        if (stateCorrectAnswer == index) {
            setIndex(index_ + 1);
            setsuccess(success + 1);
            setCountQest(CountQest + 1);
        } else {
            setCountQest(CountQest + 1);
            setIndex(index_ + 1);
        }
    }

    return (
        <Contanier>
            <Content>
                <button onClick={() => handl(item.id_answer)}>
                    {item.answer}
                </button>
            </Content>
        </Contanier>
    )
}

export default QuizTwo

const Contanier = styled.div`

`
const Content = styled.div`

   
`
