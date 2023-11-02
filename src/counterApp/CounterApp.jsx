
import React, { useState } from 'react';


export const CounterApp = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((count) => count + 1);
    }

    console.log('first CounterApp')

  return (
    
    <>
        <p>CounterApp</p>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
    </>
  )
}

const MyButton = ({count, onClick}) => {
    
    console.log('Second MyButton');

    return(
        <button onClick={ onClick }>
            Clicked { count } times
        </button>
    )

}
