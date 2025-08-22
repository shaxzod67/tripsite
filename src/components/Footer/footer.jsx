import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import ContactForm from "../Navbar/contact";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        
        {/* Logo */}
        <div className="footer-logo">
          <h1>
            <span className="logo-icon">🚲</span> trip<span className="light">site</span>
          </h1>
        </div>

        {/* About Us & Blog */}
        <div className="footer-section">
          <h2>ABOUT US</h2>
          <ul>
            <li>About Us</li>
            <li>What Makes Us Different</li>
            <li>Our People</li>
            <li>Giving Back</li>
            <li>Contact Us</li>
          </ul>

          <h2>BLOG</h2>
          <p>
            Florence to Rome: A Challenging but Tremendously Satisfying Bike Tour
            Through Italy’s Umbria Region
          </p>
        </div>

        {/* Collections */}
        <div className="footer-section">
          <h2>COLLECTIONS</h2>
          <ul>
            <li>Discounts/Specials</li>
            <li>Private + Tailor-Made</li>
            <li>Luxury Tours</li>
            <li>Tulip Tours</li>
            <li>Our Favorites</li>
            <li>Traveler Favorites</li>
            <li>Electric Bike Tours</li>
            <li>Multi-Adventure Tours</li>
            <li>Food + Drink Tours</li>
            <li>Family Friendly Tours</li>
            <li>Road Bike Tours</li>
            <li>Birding Tours</li>
            <li>Single Hotel Tours</li>
            <li>New Tours</li>
          </ul>
        </div>

        {/* Subscribe + Contact */}
        <div className="footer-section">
          <h2>SUBSCRIBE</h2>
          <p>Get the Tripsite Newsletter!</p>
          <ContactForm/>
          {/* <div className="subscribe-inputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="subscribe-email">
            <input type="email" placeholder="your@email.com" />
            <button>→</button>
          </div> */}

          <h2>CONTACT US</h2>
          <p>📞 833-220-8648</p>
          <p>✉️ info@tripsite.com</p>

          <h2>FOLLOW US</h2>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
}
