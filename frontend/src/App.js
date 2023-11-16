import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer';
import CardDetails from './components/CardDetails/CardDetails';


function App() {
  return (
    <>
      <Product />
      {/* <CardDetails /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />

          <Route exact path="/product" element={<Product />} />

          <Route exact path="/register" element={<RegisterPage />} />

        </Routes>

      </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
