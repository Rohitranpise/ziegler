import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route for the login page */}
          <Route exact path="/" element={<LoginPage />} />

          {/* Route for the product page */}
          <Route exact path="/product" element={<Product />} />

          <Route exact path="/register" element={<RegisterPage />} />

          {/* Uncomment the following line if you want a separate route for the register page */}
          {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>

        {/* LoginPage outside of Routes will not be rendered when inside a specific route */}
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
