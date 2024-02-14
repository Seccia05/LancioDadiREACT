import React, {useImperativeHandle, useRef, useEffect, useState} from 'react';
import './Dado.css';

function Dado(props) {
  const [count, useCount] = useState(0);

  const dadoRef = useRef(null);

  useEffect(() => {    // La funzione che vuoi eseguire quando il componente viene caricato
    ruotadado(props.val);
  }, [props.val]);

  function ruotadado(random) {
    if(random!=0) {
      dadoRef.current.style.animation = 'rolling 4s';
      setTimeout(() => {
        switch (random) {
          case 1:
            dadoRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
            break;

          case 6:
            dadoRef.current.style.transform = 'rotateX(180deg) rotateY(0deg)';
            break;

          case 2:
            dadoRef.current.style.transform = 'rotateX(-90deg) rotateY(0deg)';
            break;

          case 5:
            dadoRef.current.style.transform = 'rotateX(90deg) rotateY(0deg)';
            break;

          case 3:
            dadoRef.current.style.transform = 'rotateX(0deg) rotateY(90deg)';
            break;

          case 4:
            dadoRef.current.style.transform = 'rotateX(0deg) rotateY(-90deg)';
            break;

          default:
            break;
        }

        dadoRef.current.style.animation = 'none';
      }, 4050);
    }
    if(random==7) {
      dadoRef.current.style.animation = 'rolling 0s';
      dadoRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  }

  return (
      <div className="container">
        <div className="dado" ref={dadoRef}>
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
          <div className="face right"></div>
          <div className="face left"></div>
        </div>
      </div>
  );
}

export default Dado;
