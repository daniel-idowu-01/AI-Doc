import { createContext, useState } from "react";

const NavContext = createContext({})

export function NavProvider({ children }) {
  const [sideBar, setSideBar] = useState(false)

  return (
    <NavContext.Provider value={{sideBar, setSideBar}}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext;