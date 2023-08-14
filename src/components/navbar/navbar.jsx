import { useNavigate } from 'react-router-dom';
import './navbar.css';
import thumbimage from '../../assets/thumbimage.jpg';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/');
    };

    return (
        <div className="navbar">
            <div className="bank-logo-name">
                <img alt="Logo" className="logo" src={thumbimage}></img>
                <span className="bank-name">BNT</span>
            </div>
            <div className="paths">
                <Link to="/acasa" className="open-account">
                    Acasa
                </Link>
                <Link to="/plati" className="open-account">
                    Plati
                </Link>
                <Link to="/schimb" className="open-account">
                    Exchange
                </Link>
                <Link to="/credit" className="open-account">
                    Credite
                </Link>

                <div>
                    <p className="welcome-message">You rock, Stefan</p>
                </div>
                <button className="log-out" onClick={logout}>
                    Log Out
                </button>
            </div>
        </div>
    );
}
