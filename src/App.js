import "./App.css";
import { AuthProvider } from "./context/AuthContext";
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
