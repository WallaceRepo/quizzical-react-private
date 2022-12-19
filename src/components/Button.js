import React from 'react';

const BUTTON_TYPE = {
    start: 'start-btn',
    result: 'result-btn',
    play: 'play-again-btn'
}

export default function Button({children, buttonType, ...otherPtops}) {
  return (
    <button className= {`button-container ${BUTTON_TYPE[buttonType]}`}
    {...otherPtops}
    >{children}</button>
  )
}
