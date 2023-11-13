import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Router>
        <LoginPage />
        <Routes>
          <Route exact path="/" component={LoginPage} />
          <Route path="/product" component={Product} />
          {/* <RegisterPage /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
