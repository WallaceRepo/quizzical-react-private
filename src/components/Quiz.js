import React, { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import Options from './Options';
import Button from './Button';
import Loading from './Loading';

export default function Quiz( props) {
const [quiz, setQuiz] = useState([]);
const [loading, setLoading] = useState(false);
const [answerCheck, setAnswerCheck] = useState(false);
  
useEffect(()=> {
  setLoading(true);
  const urlBase = "https://opentdb.com/api.php?";
  let queryString = Object.keys(props.dataQuestion).map(key => key + '=' + props.dataQuestion[key]).join('&');
 fetch(urlBase+queryString)
   .then(respo => {
       if(respo.status >= 400) {
        throw Error("Server responds with error!");
       }
      setLoading(false);
      return respo.json();

   })     
   .then(data => {setQuiz(dataQuiz(data.results))
          setLoading(false)
       } )
},[]);
function dataQuiz (arr){
      let ans = [];
    for ( let i = 0; i < arr.length; i++) {
        ans.push({
          quest: (arr[i].question).replace(/&quot;|&#039;/g, "'").replace(/&amp;/g, '&'),
          allAns: [arr[i].correct_answer, ...arr[i].incorrect_answers]
          .sort(()=> 0.5 - Math.random()),
          correct: arr[i].correct_answer,
          answer:'',
          questKey: nanoid(),
        })
    }
    return ans;
  }
 function handleChange(event, id) {
    const { name, value } = event.target;
     setQuiz( prev => prev.map (el => {
     const ans = el.questKey === id ? {...el, [name] : value } : el
     return ans
    }
  ))
 }
 function checkResult() {
     setAnswerCheck(prev => !prev);
  }
  
 function showAnswer(ob, el) {
    if(el === ob.correct) { return 'green' }
     else if(ob.correct !== ob.answer && ob.answer === el) {return 'pink' }
     else {
        return ''
     } 
    }
  return  ( <div className="container-quiz">

  { loading && <Loading /> }
  {!loading &&
   <div> 
     { quiz.map(ob => {
        return ( <form key={ob.questKey } >
                  <p className='question'>&#127849; { ob.quest }</p>
                <div className = "sub-container">
                {ob.allAns.map((el, index) => {
                  return (
                   <Options 
                    el = {el} 
                    key = {nanoid()} 
                    handleChange = {handleChange}
                    index = {index }
                    ob = {ob}
                    coloring = { answerCheck ? showAnswer(ob, el) : ''}
                   /> 
                  )
                 })}
               
                 </div>
              </form>
             
            )
         }) 
     } 
     { answerCheck && <p>{`You scored ${quiz.filter(el => el.correct === el.answer).length }/${quiz.length} correct answers`}</p>}
     <Button buttonType = { answerCheck ? 'play':'result' }
             onClick = {answerCheck ? props.startQuiz : checkResult }
         >{answerCheck ? 'Play again':'Check answers'}</Button>
</div> } 
</div>
 )
}
