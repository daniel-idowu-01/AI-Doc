import { MainView, Home, Chat, SignUp, Login } from "./pages";
import { Routes, Route } from 'react-router-dom';
import { NavProvider } from "./context/NavContext.jsx";

function App() {

  return (
    <div className="urbanist">
      <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/email' element={<Email />} />
        <Route element={<MainView />}>
          <Route path="/home" element={<Home />}/>
          <Route path='/chat' element={<Chat />} />
        </Route>
      </Routes>
      <NavProvider>
        <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
          <Route element={<MainView />}>
            <Route path="/home" element={<Home />}/>
            <Route path='/chat' element={<Chat />} />
          </Route>
        </Routes>
      </NavProvider>
    </div>
  )
}

export default App
