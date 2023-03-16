import React from "react";
import ThemeToggler from "./togglethem/Themtoggle";

function Darkmode() {
  return (
    
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input type="checkbox" onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} /> Dark mode
          </label>
        )}
      </ThemeToggler>
    </div>
  );
}

export default Darkmode;
