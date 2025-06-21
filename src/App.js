import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { AuthProvider ,useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    
      <AuthProvider>
        <BrowserRouter>
        <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/dashboard"  element={ <PrivateRoute>  <Dashboard /> </PrivateRoute> } />
         <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        </BrowserRouter>
      </AuthProvider>
    
  );
}

export default App;
