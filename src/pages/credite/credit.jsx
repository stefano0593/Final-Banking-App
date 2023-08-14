import { useState } from 'react';
import { users } from '../../data/users';
import { getUser } from '../../functiireutilizabile/getuser';
import Navbar from '../../components/navbar/navbar';
import './credit.css';
import Footer from '../../components/footer/footer';
import loan from '../../assets/loan.jpg';
export default function Credit() {
    const dataEmail = localStorage.getItem('email');
    const person = getUser(dataEmail, users);
    // am adus accountul in pagina

    const [payNow, setPay] = useState('');
    const [payInterest, setInterest] = useState('');
    const [owned, setOwned] = useState(person.account.owned);

    //tin valorile pentru imputul din formular

    const getPay = (event) => {
        setPay(event.target.value);
    };
    const getInterest = (event) => {
        setInterest(event.target.value);
    };

    const makeLoan = () => {
        const payNumber = parseInt(payNow);
        const interestNumber = parseInt(payInterest);
        // convertit valorile in input din stringuri in numere

        if (payNumber <= 0) {
            alert('Nu poti imprumuta 0 lei');
        } else {
            console.log(payNumber, interestNumber);
            const interest = (payNumber * interestNumber) / 100;
            const fullSum = payNumber + interest;
            person.account.sold = fullSum + person.account.sold;
            person.account.owned = fullSum + person.account.owned;
            // calcul sold cu imprumutul efectuat
            setOwned(person.account.owned);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="loan-details">
                            <p>Calculeaza imprumutul dorit</p>
                            <div className="loan-detail">
                                <label className="label">Valoare imprumut ron</label>
                                <input
                                    clasName="input"
                                    placeholder="introdu suma..."
                                    onChange={getPay}
                                ></input>
                            </div>
                            <div className="loan-detail">
                                <label className="label">Dobanda %</label>
                                <input
                                    clasName="input"
                                    placeholder="valoare..."
                                    onChange={getInterest}
                                ></input>
                            </div>

                            <div className="submit-btn">
                                <button type="submit" class="pay-now-btn" onClick={makeLoan}>
                                    Calculeaza
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="colon2">
                        <div className="owedsum">
                            <h2 className="totalowed">Total datorat</h2>
                            <h2 className="totalowedsum">{owned} lei</h2>
                        </div>
                        <div className="col">
                            <img className="loan" src={loan}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
