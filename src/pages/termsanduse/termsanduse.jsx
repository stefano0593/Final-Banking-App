import './termsanduse.css';
import banktermsimg from '../../assets/terms and conditions.png';
import termsimg from '../../assets/bankterms.jpg';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { terms } from '../../components/textvariables/aboutus';
export default function Terms() {
    return (
        <div>
            <Navbar />
            <div className="container-terms">
                <div className="firstimg-terms">
                    <img className="imgterms-use" src={banktermsimg}></img>
                    <img className="imgterms-use" src={termsimg}></img>
                </div>
                <div className="text-terms">
                    <h1 className="terms-title">Termeni si conditii</h1>
                    <p className="terms-text">{terms}</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
