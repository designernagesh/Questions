import { useState } from 'react';
import './App.css';
import data from './data/data';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function App() {
  const [ showInfo, setShowInfo ] = useState(null);

  // Alternate Way
  const toggleHandler = (id) => {
    if(showInfo === id){
      return setShowInfo(null)
     }
    setShowInfo(id);
  };

  return (
    <div className='wrapper'>
      <h1>Questions</h1>
      <ul>
        {
          data.map( question => {
            return (
              <li key={ question.id } className='card'>
                <h3>
                  {question.title}
                  <span onClick={ () => toggleHandler(question.id) }>{showInfo === question.id ? <FaAngleUp /> : <FaAngleDown />}</span>
                </h3>
                <p className={ showInfo === question.id ? "info show" : "info" }>{ question.info }</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
