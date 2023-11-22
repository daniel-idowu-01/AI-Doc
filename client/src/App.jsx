import { SideBar } from "./components"
import { MainView, Home, Chat } from "./pages";
import Signup from "./pages/SignUp";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="urbanist">
      <Routes>
      <Route path='/' element={<Signup />} />
        <Route element={<MainView />}>
          <Route path='/chat' element={<Chat />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
