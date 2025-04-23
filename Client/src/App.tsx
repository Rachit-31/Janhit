import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import ContactUs from './pages/ContactUs';
import DashboardUser from './pages/DashboardUser';


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

        <Route
          path="/contactUs"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />

        <Route
          path="/dashboardUser"
          element={
            <MainLayout>
              <DashboardUser />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;