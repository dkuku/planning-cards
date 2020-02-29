import React, {useState, useEffect, useFocusEffect} from 'react';
import './App.css';

function App() {
  const [currentNumber, nextPage] = useState(null);
  const numbers = [...Array(11).keys(), "?", "0"].slice(1)
  useEffect(() => {
    console.log(currentNumber)
  })
  return (
    <div className="flex justify-center">
      {currentNumber ? 
       <Card number={currentNumber} nextPage={nextPage} />
       :
       <Keyboard numbers={numbers} nextPage={nextPage} />
      }
    </div>
  );
}
function Card(props) {
  const {number, nextPage} = props
  return (
    <div className="flex flex-col justify-center">
      <a className="justify-center h-16 p-4 m-auto text-2xl" onClick={()=> nextPage(null)}>Go Back</a>
      <p className="justify-center h-screen align-center" style={{fontSize: "60vh"}}>
        {number}
      </p>
    </div>
  )
}
function Keyboard(props) {
  const {numbers, nextPage} = props
  return (
    <div className="flex flex-col justify-center">
      <p className="justify-center h-16 p-4 m-auto text-2xl">Choose points</p>
      <div className="flex flex-wrap">
        {numbers.map(n=>{return <Button key={n} number={n} nextPage={nextPage}/>})}
      </div>
    </div>
  )
}

function Button(props) {
const {number, nextPage} = props
  return (<>
  <button  onClick={()=> nextPage(number)} 
    className="w-32 w-1/3 h-32 px-4 py-2 text-3xl font-bold text-black bg-blue-100 hover:bg-blue-300">
    {number}
  </button>
  </>)
}

export default App;
