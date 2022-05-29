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

 const backc1=()=>{
   setC1('circle1')
 }
 const backc2=()=>{
  setC2('circle2')
}
const backc3=()=>{
  setC3('circle3')
}
const backc4=()=>{
  setC4('circle4')
}
const backc5=()=>{
  setC5('circle5')
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
           <div onClick={backc1} className={c1}></div>
           <div onClick={backc2} className={c2}></div>
           <div onClick={backc3} className={c3}></div>
           <div onClick={backc4} className={c4}></div>
           <div onClick={backc5} className={c5}></div>
         </div>
       </div>
    </div>
  );
}

export default App;
