import React from 'react';

export default function Options({coloring, el, index, handleChange, ob}) {
  return (
    <span className='answers'>  
     <label htmlFor = {el + index } className = {`"label-option " + ${coloring}`}  >{el.replace(/&quot;|&#039;/g, "'").replace(/&amp;/g, '&')}
     <input type='radio' 
            id = {el + index } 
            className = "radio-option "
            name = "answer"
            value = {el}
            checked = {ob.answer === el ? true : false}
            onChange = {(event)=> handleChange(event, ob.questKey)}
            
       />
     </label>
    </span>
  )
}
