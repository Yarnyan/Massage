import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Error404 from "./pages/Error404"
import Error403 from "./pages/Error403"
import AppointmentPage from "./pages/AppointmentPage"
import IsNotBanned from "./views/AuthRequired";
import ModelPage from "./pages/ModelPage"
window.global = window;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IsNotBanned><MainPage /></IsNotBanned>} />
        <Route path="/vacancy" element={<IsNotBanned><AppointmentPage /></IsNotBanned>} />
        <Route path="/models/:model" element={<IsNotBanned><ModelPage /></IsNotBanned>} />
        <Route path="/403" element={<Error403 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
