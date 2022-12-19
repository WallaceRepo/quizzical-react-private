import React, { useState, useEffect} from 'react';
import Quiz from './components/Quiz';
import Start from './components/Start';
import Loading from './components/Loading';

function App() {
  
  const [show, setShow] = useState(false)
  const [category, setCategory] = useState([]);
   const [loading, setLoading] = useState(false)
   const [dataQuestion, setDataQuestion] = useState({
        amount: 2,
        category: 17,
        difficulty: 'easy',
      });

    function handleChange(event) {
      const {value, name } = event.target;
      setDataQuestion(prev => {
          return {
             ...prev,
             [name]: value
          }
      })}
    const fetchCategory = async () => {
      setLoading(true);
      try {
         const response = await fetch('https://opentdb.com/api_category.php');
         const data = await response.json();
         setLoading(false);
         setCategory(data.trivia_categories);
       } catch (error) {
       console.log(error)  
      }
 }
   
   useEffect(()=>{
    
      fetchCategory();
   },[])
   
   function startQuiz(e){
      e.preventDefault();
      setShow(prev => !prev)
   }

 return (
   <div className='container'> 
     { !show && !loading && <Start handleChange = {handleChange } 
            startQuiz = {startQuiz }
            dataQuestion = {dataQuestion}
            category = {category }
          
              /> }
     { show && !loading && <Quiz 
           dataQuestion = {dataQuestion}  
           startQuiz = {startQuiz }
          
           /> } 
     { loading &&  <Loading />  }
  <div className="shape-blob"></div>
	<div className="shape-blob one"></div>
	<div className="shape-blob two"></div>
</div>
  );
}

export default App;
