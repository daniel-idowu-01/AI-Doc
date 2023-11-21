import { SideBar } from "./components"
import { MainView, Home, Chat } from "./pages";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="urbanist">
      <Routes>
        <Route element={<MainView />}>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
