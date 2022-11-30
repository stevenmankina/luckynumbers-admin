import { useContext, useEffect } from "react";
import { redirect } from "react-router-dom";
import "./App.css";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Layout from "./pages/Layout";

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </div>
  );
}

export default App;
