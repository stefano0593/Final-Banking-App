import { getUser } from '../../functiireutilizabile/getuser';
import { users } from '../../data/users';
import { useLocation } from 'react-router-dom';
import './welcomeback.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import imaginegrafic from '.././../assets/paginaprincipala1.jpg';
import imaginepaginaprincipala from '../../assets/pagina principala.png';
export default function WelcomeBack() {
    const location = useLocation();
    // pt accesarea url-ului, sa iau chestii din el
    let account;
    const dataEmail = localStorage.getItem('email');
    console.log(dataEmail);
    const person = getUser(dataEmail, users);
    account = person.account;

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2 className="total">Total disponibil de cheltuit</h2>
                        <h2 className="totalsum">{account.sold} lei</h2>
                    </div>
                    <div className="col">
                        <img alt="image" className="firstimage" src={imaginegrafic}></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2 className="totalowed">Total datorat</h2>
                        <h2 className="totalowedsum">{account.owned} lei</h2>
                    </div>
                    <div className="col">
                        <img alt="image" className="firstimage" src={imaginepaginaprincipala}></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
