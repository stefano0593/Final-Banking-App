import './App.css';
import Button from './components/button/button';
import Login from './pages/login/login';
import Navbar from './components/navbar/navbar';
import Payments from './pages/plati/plati';
import WelcomeBack from './pages/welomeback/welcomeback';
import Credit from './pages/credite/credit';
import Exchange from './pages/exchange/exchange';
import Footer from './components/footer/footer';
import Aboutus from './pages/aboutus/aboutus';
import Terms from './pages/termsanduse/termsanduse';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/plati" element={<Payments />} />
                <Route path="/schimb" element={<Exchange />} />
                <Route path="/credit" element={<Credit />} />
                <Route path="/desprenoi" element={<Aboutus />} />
                <Route path="/termeni" element={<Terms />} />
                <Route path="/acasa" element={<WelcomeBack />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={<WelcomeBack />} />
            </Routes>
        </Router>
    );
}

export default App;
