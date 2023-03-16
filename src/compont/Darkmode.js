import React, {useState, useEffect} from "react";



function Darkmode() {
 
  const [mode, setMode] = useState("light")
  useEffect(() => {
    const mode1= localStorage.getItem("theme") || "light"
    setMode(mode1)

  }, [ ]);
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
      <button type="button" onClick={() => {setMode("light"); localStorage.setItem("theme", "light")}}>
        ☀ lightttttt 
      </button>
      <div> Hiiiii</div>
      
      <button type="button" onClick={() => {setMode("dark"); localStorage.setItem("theme", "dark")}}>
        ☾ darkkkkk
      </button>
    </div>
    </div>
  );
}

export default Darkmode;
