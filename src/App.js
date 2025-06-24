//imports...
import { BrowserRouter } from 'react-router';
import { Navigate } from 'react-router';
import { Route } from 'react-router';
import { Routes } from 'react-router';
//pages
import Home from "./pages/home/Home"
import Layout from "./layout/Layout";
import Menu from "./pages/menu/Menu";
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/:id/menu" element={<Layout><Menu /></Layout>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
