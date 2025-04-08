import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import MapPage from './pages/MapPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/aboutus"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />

        <Route
          path="/map"
          element={
            <MainLayout>
              <MapPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;