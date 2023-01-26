import React,{useState} from 'react'
import './App.css'
import Todo from './todo';
const App = () => {
  const[inputlist,setinputlist]=useState(" ");
  const[items,setitems]=useState([]);
  const Text = (event) => {
    setinputlist(event.target.value)
  }
  const Listofitems=()=>{
    setitems((olditems)=>{
      return [...olditems,inputlist];
    })
    setinputlist("")
  }
  const Deleteitem=(id)=>{
    console.log("deleted");
    setitems((olditems)=>{
      return olditems.filter((arrEle,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div className='Main-div'>
        <center>
        <div className='center-div'>
            <h1 className='h1'>Todo List</h1>
            <br/>
            <input type="text" placeholder="Add Text" className='input' value={inputlist} onChange={Text} ></input>
            <button className='button' onClick={Listofitems}>+</button>
          <ol>
           {
            items.map((itemval,index)=>{
              return <Todo key={index} id={index} text={itemval} onselect={Deleteitem} />
            })
           }
          </ol>
        </div>
        </center>
        
    </div>
  )
}

export default App