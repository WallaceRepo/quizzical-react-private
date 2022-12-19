import React from 'react';
import Button from './Button';

export default function Start(props) {
     const { dataQuestion, handleChange, category} = props
//    const [category, setCategory] = useState([]);
//    const [loading, setLoading] = useState(false)
//    const [dataQuestion, setDataQuestion] = useState({
//         category: 17,
//         difficulty: 'easy',
//         amount: 4,
//     });
//     function handleChange(event) {
//       const {value, name } = event.target;
//       setDataQuestion(prev => {
//           return {
//              ...prev,
//              [name]: value
//           }
//       })}
//    function generateUrl(dataQuestion){
//       const url = "https://opentdb.com/api.php?";
//       let queryString = Object.keys(dataQuestion).map(key => key + '=' + dataQuestion[key]).join('&');
//     // console.log(queryString)
//       return url+queryString;
//    }
//    //generateUrl(dataQuestion);
//    const fetchCategory = async () => {
//       setLoading(true);
//       try {
//          const response = await fetch('https://opentdb.com/api_category.php');
//          const data = await response.json();
//          setLoading(false);
//          setCategory(data.trivia_categories);
//        } catch (error) {
//        console.log(error)  
//       }
//  }
   
//    useEffect(()=>{
//       fetchCategory();
//    },[])
   
//    function handleQuiz(e){
//       e.preventDefault();
//       console.log(dataQuestion)
//    }

   //https://gist.github.com/odewahn/5a5eeb23279eed6a80d7798fdb47fe91
 
 return (
  <div className='intro'>
    <h1>Quizzical</h1>
    <h3>&#127876;	Make fun quiz within minutes &#127877;</h3>
    <form onSubmit={props.startQuiz}>
 <fieldset>
   <legend>Select Quiz Category:</legend>
   <select id='category' 
           value={dataQuestion.category}  
           name = 'category'
           onChange={handleChange} 
      >
   <option value="" >Select Category</option> 
    { category.map( obj => { 
      return <option value= {obj.id} key = {obj.id}> {obj.name} </option> 
    })}
   </select>
 </fieldset>

 <fieldset >
    <legend>Number of Questions:</legend>
    <select  id='quest_number'
             value={dataQuestion.quest_number}
             name = "amount"
           onChange={handleChange}
         >
      <option value = "">Number</option>
     {/* { [...Array(10)].map((x, index) => <option value={index} key={index} >{index}</option>)} */}
     {(function (rows, i, len) {
    while (++i <= len) {
      rows.push(<option key={i} value = {i}>{i}</option>)
    }
    return rows;
   })([], 1, 10)}
    </select>
 </fieldset>
 <fieldset>
    <legend>Select Difficulty:</legend>
    <input type="radio" 
                 id = "easy"
                 onChange = {handleChange}
                 name = 'difficulty'
                 value='easy'
                 checked = {dataQuestion.difficulty === "easy"}
                 />
          <label htmlFor="easy">easy</label> <br />

          <input type="radio" id = "medium"
                 onChange = {handleChange}
                 name = 'difficulty'
                 value= "medium"
                 checked = {dataQuestion.difficulty === "medium"}
                 />
          <label htmlFor='medium'>medium</label> <br/>

          <input type="radio" id = "hard"
                 onChange = {handleChange}
                 name = 'difficulty'
                 value = "hard"
                 checked = {dataQuestion.difficulty === "hard"}
                 />
          <label htmlFor='hard'>hard</label> <br />
 </fieldset>
  <Button buttonType = 'start'>Start quiz</Button> 
 </form >
 
</div>
)
}
