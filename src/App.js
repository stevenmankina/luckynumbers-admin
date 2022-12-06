import { useContext, useEffect } from "react";
import { redirect } from "react-router-dom";
import "./App.css";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <AuthProvider>
        <Layout />
      </AuthProvider>
    </div>
  );
}

export default App;
