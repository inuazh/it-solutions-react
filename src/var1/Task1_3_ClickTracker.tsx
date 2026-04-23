import { useEffect, useState } from "react";


function ClickTracker() {
  const [count, setCount] = useState(0);
  // баг в том что рендер должен быть чистой функцией
  // в строгом режиме рендер происходит дважды + если реакт прервет и перезапустит рендер тоже несколько раз произойдет ++
  // fix переносим в эфект. эфекты производятся только после рендера 
    

  useEffect (()=> {
     console.log("renders:", count);
  }, [count])
 
  return (
    <div>
      <p>Кликов: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

export default ClickTracker;