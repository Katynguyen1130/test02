import React, {useState, useEffect} from "react";



function Darkmode() {
 
  const [mode, setMode] = useState("light")
  useEffect(() => {
    if (mode ==='dark') {
      document.body.classList.add("dark");
      
    } else {
      document.body.classList.remove("dark");
    }
  }, [ mode]);
  return (

    <div>
      <div>
      <button type="button" onClick={() => {setMode("light")}}>
        ☀ lightttttt 
      </button>
      <div> Hiiiii</div>
      
      <button type="button" onClick={() => {setMode("dark")}}>
        ☾ darkkkkk
      </button>
    </div>
    </div>
  );
}

export default Darkmode;
