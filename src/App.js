import React, { lazy, Suspense, useState } from "react";
import "./App.css";

export default function App() {
  const [MyLazy, setMyLazy] = useState(null);
  
  function clickHandler(event){
    setMyLazy(
      lazy(() => import("./lazy"))
    );
  }

  return (
    <div className="App">
      <h1>Snehil's React Tool Chain</h1> 
      <button onClick={clickHandler}>
        Lazy Load
      </button>

      <Suspense fallback={<div>Loading Plz Wait...</div>}>
        {MyLazy && <MyLazy />}
      </Suspense>
    
    </div>
  );
}
