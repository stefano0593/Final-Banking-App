import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import contactbackground from '../../assets/contactbackground.jpg';
import './contact.css';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <h1 className="title-contact">Intra in legatura cu noi</h1>
            <div className="container-contact">
                <div className="row-container">
                    <div className="column-contact">
                        <div className="details">
                            <label className="text-labels">Nume</label>
                            <input className="input-text" placeholder="Ion Popescu"></input>
                        </div>
                        <div className="details">
                            <label className="text-labels">Telefon</label>
                            <input className="input-text" placeholder="07xxxxxxxx"></input>
                        </div>
                        <div className="details">
                            <label className="text-labels">Adresa email</label>
                            <input
                                className="input-text"
                                placeholder="ion.popescu@gmail.com"
                            ></input>
                        </div>
                        <div className="details">
                            <label className="text-labels">Mesaj</label>
                            <textarea
                                className="input-message"
                                placeholder="Introdu mesajul tau aici"
                            ></textarea>
                        </div>
                        <div className="send-btn">
                            <button type="submit" className="send-message">
                                Trimite mesajul
                            </button>
                        </div>
                    </div>
                    <img className="backgroundimg" src={contactbackground}></img>
                </div>
            </div>

            <Footer />
        </div>
    );
}
