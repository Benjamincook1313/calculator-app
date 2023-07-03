import './App.css';
import styled from 'styled-components'; 
import { useState } from 'react';

const Operator = styled.button`
  height: 70px;
  width: 70px;
`;

const Num = styled.button`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;

function App() {

  const [calc, setCalc] = useState(['2', '+', '5']);
  const [total, setTotal] = useState();

  const handleNum = (num) => {
    let copy = [...calc];
    let last = copy.length-1;

    if(total) {
      setCalc([]);
      setTotal();
    };

    if(copy[last] === '+' || copy[last] === '-' || copy[last] === 'x' || copy[last] === '/'){
      copy.push(num);
    }else copy[last] += `${num}`;

    setCalc(copy);
  }

  const handleOp = (op) => {
    if(total) {
      setCalc([total, op]);
    }
    else setCalc([...calc, op]);
  }

  const handleClear = () => {
    setCalc([]);
    setTotal();
  }

  const handleCalc = () => {
    setTotal(eval(calc.join(' ')));
  }

  const createNumBtns = () => {
    const buttons = [];

    for(let i=0; i<10; i++){
      buttons.push(<Num key={i} onClick={() => handleNum(i)}>{i}</Num>)
    }

    buttons.push(buttons.shift());
    return buttons;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <section className='device'>
        <div className='display'>
          {calc}
          <div style={{color: 'lightgoldenrodyellow'}}>{total}</div>
        </div>
        <section className='operators'>
          <Operator onClick={() => handleOp('+')}>+</Operator>
          <Operator onClick={() => handleOp('-')}>-</Operator>
          <Operator onClick={() => handleOp('x')}>x</Operator>
          <Operator onClick={() => handleOp('/')}>/</Operator>
        </section>
        <section className='nums'>
          {createNumBtns()}
        </section>
        <button className='clear' onClick={handleClear}>Clear</button>
        <button className='enter' onClick={handleCalc}>Enter</button>
      </section>
    </div>
  );
}

export default App;
