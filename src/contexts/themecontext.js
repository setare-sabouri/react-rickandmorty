import React, { useState } from "react";
const themeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [Theme, SetTheme] = useState(true);
    const ToggleTheme = () => {
        SetTheme(!Theme);
    }
    console.log(Theme);
    return (
        <themeContext.Provider value={{ Theme, ToggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}
export { ThemeProvider, themeContext }