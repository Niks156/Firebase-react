import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import { Userauthprovider } from "../context/Userauthcontext";
function App() {
  return (
    <>
      <Userauthprovider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Userauthprovider>
    </>
  );
}

export default App;
