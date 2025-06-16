import "../Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-row">
        <p>&copy; {new Date().getFullYear()} Oldham Golf Club. All rights reserved.</p>
        <p>Located in the Garden Suburb, Oldham, Greater Manchester</p>
        <p>Visitors & New Members Always Welcome</p>
      </div>

      <div className="footer-row footer-socials">
        <a
          href="https://www.facebook.com/WernethGolfClub"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
        >
          <i className="fab fa-facebook-f"></i> @WernethGolfClub
        </a>

        <a
          href="https://twitter.com/WernethGolfClub"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon twitter"
        >
          <i className="fab fa-twitter"></i> @WernethGolfClub
        </a>
      </div>

      <div className="footer-row footer-certification">
        <img
          src="/images/safegolf.png"
          alt="SafeGolf - English Golf Union"
          className="safegolf-badge"
        />
        <p>English Golf Union SafeGolf Accredited</p>
      </div>

      <div className="footer-row footer-policies">
        <a href="/club-policies" className="policy-link">
          Club Policies
        </a>
      </div>
    </footer>
  );
}

export default Footer;
