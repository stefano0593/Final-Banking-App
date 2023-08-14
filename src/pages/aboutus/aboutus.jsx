import Textabout from '../../components/textvariables/aboutus';
import './aboutus.css';
import aboutusimg from '../../assets/about us.webp';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { aboutus } from '../../components/textvariables/aboutus';
export default function Aboutus() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="aboutus-title">Despre noi</h1>
                <p className="aboutus-text">{aboutus}</p>
            </div>
            <div>
                <img className="imgaboutus" src={aboutusimg}></img>
            </div>
            <Footer />
        </div>
    );
}
