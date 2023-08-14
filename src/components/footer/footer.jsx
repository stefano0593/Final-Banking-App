import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="row">
                        <a href="https://www.facebook.com">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com">
                            <FaTwitter />
                        </a>
                        <a href="https://www.whatsapp.com/">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.gmail.com">
                            <FaMailBulk />
                        </a>
                    </div>
                    <div class="row">
                        <ul>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/termeni">Termeni si conditii</Link>
                            </li>
                            <li>
                                <Link to="/desprenoi">Despre noi</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="row">||Copyright © 2023 Toate drepturile rezervate||</div>
                </div>
            </footer>
        </div>
    );
}
