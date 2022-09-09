/* sample props
import React from 'react';
import Button from './Components/Button';

function App() {
  return (
    <div>
    <h2>App Component</h2>
    <Button title='welcome'/>
    </div>
  );
}

export default App;
*/

/*State in React- to use state we useState
import React, {useState} from 'react';
import Button from './Components/Button';

function App() {
  const [title]=useState('App state here');
  return(
    <div>
      <button>{title}</button>
      <Button/>
    </div>
  );
}
export default App;
*/

//useState
/*
import React, {useState} from 'react';


const App = () => {
  const [name, setName]=useState("name here is useState");
  return (
    <div>
      <center>
        <h1>{name}</h1>
        {/* <button>Change</button> */
        /*
        <button onClick={()=> 
          setName("using onclick on button, changing using setName")}>Change</button>
      </center>
      </div>
  );
}


export default App;
//using onclick event handler to change the name */


// using useState increment
import React, {useState} from 'react';

const App =() => {
  const [count,setCount]= useState(0);
  const [sample,setSample]=useState(0);
  const [multi,setMulti]=useState(0);

  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
      </center>
      <center>
        <h1>{sample}</h1>
        <button onClick={()=>setSample(sample+5)}>Increased 5</button>
        <button onClick={()=>setSample(sample-5)}>Decreased 5</button>
      </center>
      <center>
        <h1>{multi}</h1>
        <button onClick={()=>setMulti(multi*5)}>multiple5</button>
        <button onClick={()=>setMulti(multi*10)}>multiple10 </button>
      </center>
    </div>
  )
}

export default App;




































