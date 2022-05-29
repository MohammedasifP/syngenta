import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [circle,setCircle]=useState(0)
const [c1,setC1]=useState('circle1')
const [c2,setC2]=useState('circle2')
const [c3,setC3]=useState('circle3')
const [c4,setC4]=useState('circle4')
const [c5,setC5]=useState('circle5')

 const setcircle=()=>{
    if(circle==1){
        setC1('circle11')
        
    }
    if(circle==2){
       setC2('circle22')
    }
    if(circle==3){
      setC3('circle33')
    }
    if(circle==4){
      setC4('circle44')
    }
    if(circle==5){
      setC5('circle55')
    }
 }

 const takevalue=(e)=>{
  const {value}=e.target;
    setCircle(value);
 }
  return (
    <div className="App">
       <div className='container'>
         <div>
            <div className='left-sqaure'></div><br/>
            <input className='input-taker' type="number" onChange={takevalue}/>
            <button onClick={setcircle}>shoot</button>
         </div>
         <div className='right-sqaure'>
           <div className={c1}></div>
           <div className={c2}></div>
           <div className={c3}></div>
           <div className={c4}></div>
           <div className={c5}></div>
         </div>
       </div>
    </div>
  );
}

export default App;
