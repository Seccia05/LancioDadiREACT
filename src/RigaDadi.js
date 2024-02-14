// RigaDadi.js
import React, {useRef, useState} from 'react';
import Dado from "./Dado";

function RigaDadi() {

    const [ngenerato1, useUno] = useState(0);
    const [ngenerato2, useDue] = useState(0);
    const [count, useCount] = useState(0);

    function muoviDado() {
        let n = Math.round(Math.random() * 6) + 1;
        useUno(n);
        let s = Math.round(Math.random() * 6) + 1;
        useDue(s);

        setTimeout(() => {
            useCount(count => count + s + n);
        }, 5000);
    }

    function reset() {
        useCount(0);
        useUno(7);
        useDue(7);
    }

    return (
        <div>
            <h1 style={{color: 'white', textAlign: 'center', fontSize: '45px'}}>Lancio dei Dadi</h1>
            <br/>
            <br/>
            <h3 style={{color: 'white', fontWeight: 'bold', fontSize: '25px', textAlign: 'right'}}>
                {count}
            </h3>
            <br/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Dado val={ngenerato1} style={{marginRight: '200px'}}></Dado>
                <div style={{height: '20px', width: '20px'}}></div>
                <Dado val={ngenerato2}></Dado>
            </div>
            <button className="roll" onClick={muoviDado}>
                Ruota Dado
            </button>
            <button className="roll" onClick={reset}>
                Reset
            </button>

        </div>
    )
        ;
}

export default RigaDadi;
