
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
// import "./app.scss";
import { useState } from "react";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function handelUser(user) {
    setCurrentUser(user);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              currentUser ? (
                <div className="app">
                  
                  <Dashboard />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="login"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignIn handelUser={handelUser} />
              )
            }
          />
          <Route
            path="register"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <Register handelUser={handelUser} />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
