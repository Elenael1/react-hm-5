import { useState } from 'react';
import { Notification } from '../notification/Notification';
import s from './test.module.css'

export const Test = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p className={s.number}>{count}</p>
        <button className={s.button} onClick={()=> setCount(count + 1)}>Increment number</button>
        <button className={s.button} onClick={()=> setCount(count - 1)}>Decrement number</button>

        {count < 0 &&
        <Notification/>
        }
    </div>
  )
}
