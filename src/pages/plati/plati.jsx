import { useNavigate } from 'react-router-dom';
import { getUser } from '../../functiireutilizabile/getuser';
import { users } from '../../data/users';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import './plati.css';
import paymentspicture from '../../assets/payments2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card } from '../../data/card';
export default function Payments() {
    const navigate = useNavigate();

    const dataEmail = localStorage.getItem('email');
    const person = getUser(dataEmail, users);
    const card = person.card;
    // returnez emailul, returnez userul gasit cu functia getuser, extrag din userul returnat datele cardului

    const [cardNumber, setNumber] = useState('');
    const [personName, setName] = useState('');
    const [expiryDate, setExpiry] = useState('');
    const [civ, setCiv] = useState('');
    const [pay, setPay] = useState('');

    const getCardNumber = (event) => {
        setNumber(event.target.value);
    };
    const getName = (event) => {
        setName(event.target.value);
    };
    const getExpiryDate = (event) => {
        setExpiry(event.target.value);
    };
    const getCiv = (event) => {
        setCiv(event.target.value);
    };
    const getPay = (event) => {
        setPay(event.target.value);
    };
    // setup de salvat pentru fiecare field din formularul de plati
    const sendMoney = () => {
        if (
            newValidCard.cardNumber === card.cardNumber &&
            newValidCard.personName === card.personName &&
            newValidCard.expiryDate === card.expiryDate &&
            newValidCard.civ === card.civ
        ) {
            if (person.account.sold >= pay) {
                person.account.sold -= pay;
                navigate('/acasa');
            } else {
                alert('Sarakule');
            }
        } else {
            alert('Date incorecte');
        }
        // verificat daca cardul userului este cel completat in formular
    };

    const newValidCard = new Card(cardNumber, personName, expiryDate, civ);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="centre-content">
                    <p className="course">Plateste acum</p>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="last-content"></div>
                        <div className="card-details">
                            <p>Plateste folosind cardul de credit</p>
                            <div className="card-detail">
                                <label className="label">Numar card</label>
                                <input
                                    className="input"
                                    placeholder="xxxx-xxxx-xxxx-xxxx"
                                    onChange={getCardNumber}
                                ></input>
                            </div>
                            <div className="card-detail">
                                <label className="label">Detinator</label>
                                <input
                                    className="input"
                                    placeholder="Nume Prenume"
                                    onChange={getName}
                                ></input>
                            </div>
                            <div className="card-detail">
                                <label className="label">Data expirare</label>
                                <input
                                    className="input"
                                    placeholder="xx/xx"
                                    onChange={getExpiryDate}
                                ></input>
                            </div>
                            <div className="card-detail">
                                <label className="label">CIV</label>
                                <input
                                    className="input"
                                    placeholder="xxx"
                                    onChange={getCiv}
                                ></input>
                            </div>
                            <div className="card-detail">
                                <label className="label">Suma</label>
                                <input
                                    className="input"
                                    placeholder="Baga banii bo$$"
                                    onChange={getPay}
                                ></input>
                            </div>

                            <div className="submit-btn">
                                <button type="submit" className="pay-now-btn" onClick={sendMoney}>
                                    Trimite
                                </button>
                                <Link to="/credit">
                                    {' '}
                                    <button type="button" className="pay-now-btn">
                                        Cere imprumut
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img className="paymentimg" src={paymentspicture}></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
