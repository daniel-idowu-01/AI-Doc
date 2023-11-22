import { SideBar } from "./components"
import { MainView, Home, Chat } from "./pages";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="urbanist">
      <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
        <Route element={<MainView />}>
          <Route path="/home" element={<Home />}/>
          <Route path='/chat' element={<Chat />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
