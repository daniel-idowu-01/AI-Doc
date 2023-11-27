import { createContext, useState } from "react";

const NavContext = createContext({})

export function NavProvider({ children }) {

  const [query, setQuery] = useState([])
  const [sideBar, setSideBar] = useState(false)
  const [botResponse, setBotResponse] = useState([])

  return (
    <NavContext.Provider value={{sideBar, setSideBar, query, setQuery, botResponse, setBotResponse}}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext;