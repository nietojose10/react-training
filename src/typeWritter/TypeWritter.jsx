import React, { useCallback, useEffect, useState } from 'react';

export const TypeWritter = () => {

    const titles = ['Web Developer', 'Machine Learning Engineer', 'Software Engineer'];
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      
        let ticker = setInterval(() => {
            tick();
    
        }, 1000);
      return () => { clearInterval(ticker)};
    }, [text]);
    

    const tick = () => {
        console.log(text.length);
        let i = loopNum % titles.length; //Wrapping the value technique, it means that the value is gonna repeating from 0 to 2.
        let fullText = titles[i];
        let updatedText = isDeleting ? fullText.substring( 0, text.length - 1 ) : fullText.substring( 0, text.length + 1 ) ;

        setText(updatedText);

        if( !isDeleting && (updatedText === fullText) ){
            setIsDeleting(true);
        }else if( isDeleting && (updatedText === '') ){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
        console.log(i);
    }



  return (
    <>
        <div>TypeWritter</div>
        <p>{text}</p>
        <button onClick={tick}>Active Tick</button>
    </>
    
  )
}
