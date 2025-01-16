import {
  MainView,
  Home,
  Chat,
  Signup,
  Login,
  Email,
  ForgotPassword,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { NavProvider } from "./context/NavContext.jsx";

function App() {
  return (
    <div className="urbanist">
      <NavProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/email-confirmation" element={<Email />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route element={<MainView />}>
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </NavProvider>
    </div>
  );
}

export default App;
