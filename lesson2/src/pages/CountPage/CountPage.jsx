import React, {useState} from 'react';
import Button from "../../Components/button/Button";

const CountPage = () => {
    const [count, setCount]=useState(0)
    const handleIncrement=()=>setCount(count+1)
    const handleDecrement=()=>{
        if (count>0){
            setCount(count-1)
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <Button label={'Increment'} onClick={handleIncrement}/>
            <Button label={'Decrement'} onClick={handleDecrement}/>
        </div>
    );
};

export default CountPage;