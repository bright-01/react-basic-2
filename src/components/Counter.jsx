import React, {useState} from 'react';

export default function Counter({totalCount, onClick}) {

    const [count, setCount] = useState(0)

    return (
        <div className='counter'>
            <span className='number'>{count}/{totalCount}</span>
            <button className='button' onClick={()=>{
                setCount((prevState) => prevState +1);
                onClick()
            }}>ADD+</button>
        </div>
    );
}

