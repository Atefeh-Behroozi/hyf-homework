import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatSeconds = (totalSeconds) => {
    const duration = DateTime.fromObject({ seconds: totalSeconds });
    return duration.toFormat('ss');
  };

  return (
    <p>You have used {formatSeconds(seconds)} seconds</p>
  );
};

export default Timer;