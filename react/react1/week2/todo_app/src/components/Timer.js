import { useEffect, useState } from 'react';

const Timer = () =>{
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        setTimeout(() =>{
            setSeconds((prev) => prev + 1);
        }, 1000);
        
    }, [seconds]);
    return <p>You have used {seconds} seconds on this website.</p>
};
export default Timer;