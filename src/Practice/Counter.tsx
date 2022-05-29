import React, { FormEvent, MouseEvent, MouseEventHandler, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    const increaseCounter = (e:MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
       
        setCounter(counter + 1)

    }
    return (
        <div>
            <h2>Counter</h2>
            <h3>{counter}</h3>
            <button onClick={increaseCounter} >+</button>
        </div>
    );
};

export default Counter;