import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import VerifyOtp from "./components/Auth/VerifyOtp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/verifyotp" element={<VerifyOtp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
