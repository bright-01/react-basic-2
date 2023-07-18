import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
import Counter from './components/Counter'
import {useState} from "react";
function AppCounter() {

    const [totalCount, setTotalCount] = useState(0)
    const addTotalCountHandle = () => {
        setTotalCount((prevState)=> prevState+1);
    }

  return (
      <div className='container'>

          <span> totalCount : {totalCount} {totalCount<10 ? '🦆' : '🔥'}</span>
          <Counter totalCount={totalCount} onClick={addTotalCountHandle}/>
          <Counter totalCount={totalCount} onClick={addTotalCountHandle}/>
      </div>
  );
}

export default AppCounter;
