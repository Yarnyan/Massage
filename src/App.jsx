import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import AppointmentPage from "./pages/AppointmentPage"
import IsNotBanned from "./views/AuthRequired";
import ModelPage from "./pages/ModelPage"
import ErrorPage from "./pages/error.page";
window.global = window;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IsNotBanned><MainPage /></IsNotBanned>} />
        <Route path="/vacancy" element={<IsNotBanned><AppointmentPage /></IsNotBanned>} />
        <Route path="/models/:model" element={<IsNotBanned><ModelPage /></IsNotBanned>} />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
