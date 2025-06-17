import Cell from "./components/Cell";
import './App.css';
import { useState } from "react";

const config = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]; //scalable user can just edit this array if they want other UI


function App() {

  const [order, setOrder] = useState([]);
  const [deactivating, setDeactivating] = useState(false);

  const deactivateCells = ()=>{
    setDeactivating(true);
    const timer = setInterval(()=>{
      setOrder((originalOrder)=>{
        const newOrder = originalOrder.slice();
        newOrder.pop();
        if(newOrder.length == 0){
          clearInterval(timer);
          setDeactivating(false);
        }
        return newOrder;
      })
    },300)
  }

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if(newOrder.length === config.flat(1).filter(Boolean).length){
      deactivateCells();
    }
  }

  return (
    <div className="Wrapper">
      <div className="Grid" style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}>
        {config.flat(1).map((value, index) => {
          return (
            value ? <Cell key={index} filled={order.includes(index)} isDisabled={order.includes(index) || deactivating} onClick={() => activateCells(index)} /> : <span />
          )
        })}
      </div>
    </div>
  )
}

export default App
