import React from 'react';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Counter(props) {

    let [count,setCount] = useState(0)
    return (
        <div className={'App'}>
            <div className="counter">
                <h1>Counters:</h1>
                <button onClick={setCount(count+1)}>+</button>
                <h2>counter = {count}</h2>
                <button onClick={setCount(count+1)}>-</button>

            </div>
            <div className="addCounter">

            </div>
        </div>
    );
}

export default Counter;