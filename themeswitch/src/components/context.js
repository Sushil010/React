import React, { createContext, useContext } from "react";

 export const ThemeContext = createContext({
    themeMode:"light",

    lightMode:()=>{},

    darkMode: ()=>{}
})


// For Wrapping up main element use provider
export const ThemeProvider =ThemeContext.Provider 

//to use that ThemeContext external hook is needed
export default function useTheme(){
    return useContext(ThemeContext)
}