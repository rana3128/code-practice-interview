import { useState } from 'react'


function App() {
  const [time, setTime] = useState(0)

  const [timer, setTimer] = useState(null)

  const start = () => {
    const newTimer = setInterval(() => {
      setTime(preTime => preTime + 1);
    }, 1000)

    setTimer(newTimer)
  }

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  }

  const reset = () => {
    clearInterval(timer);
    setTimer(null);
    setTime(0);
  }

  const getTimerString = () => {
    let str = ""
    const hrs = Math.floor(time / 3600)
    const mins = Math.floor((time - hrs*3600) / 60)
    const sec = Math.floor(time - hrs*3600 - mins*60)

    if(hrs > 9 ) str +=hrs;
    else str +="0"+hrs;

    if(mins > 9 ) str +=":"+mins;
    else str +=":0"+mins;

    if(sec > 9 ) str +=":"+sec;
    else str +=":0"+sec;

    return str;
  }

  return (
    <>
    <h2>{getTimerString()}</h2>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
