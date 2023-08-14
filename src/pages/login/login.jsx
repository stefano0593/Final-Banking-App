import { useNavigate } from 'react-router-dom';
import { users } from '../../data/users';
import { useState } from 'react';
import thumbimage from '../../assets/thumbimage.jpg';
import Button from '../../components/button/button';
import './login.css';

export default function Login() {
    const navigate = useNavigate();
    // componenta de login
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    // stateuri folosite pt stocarea emailului si parolei venite din input
    const getemail = (event) => {
        setemail(event.target.value);
    };
    const getpassword = (event) => {
        setpassword(event.target.value);
    };
    // functii definite la stateuri(UNUL PREIA EMAILUL SI UNUL PAROLA)
    const login = () => {
        for (let user = 0; user < users.length; user++) {
            if (users[user].email === email && users[user].parola === password) {
                localStorage.setItem('email', users[user].email);
                navigate('/acasa');
                // iterez prin users, verifica mailul si parola introdusa, iara daca datele introduse sunt bune, imi setez mailul in local storage
            } else {
            }
        }
    };
    // iterareza ca sa treaca prin toti userii si verifica parola si mailul sa fie corecte

    return (
        <div className="login-background">
            <div>
                <img alt="Logo" className="logo1" src={thumbimage}></img>
                <p className="first-page">Banca nevoilor tale</p>
                <form className="login-form">
                    <input
                        className="input"
                        type="email"
                        placeholder="username@email.com"
                        onChange={getemail}
                    ></input>
                    <input
                        className="input"
                        type="password"
                        placeholder="password"
                        onChange={getpassword}
                    ></input>
                </form>
                <div className="login-button">
                    <Button onClick={login} />
                </div>
            </div>
        </div>
    );
}
