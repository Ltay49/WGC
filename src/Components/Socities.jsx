import '../Socities.css';
import clubImage from '../assets/WGCCLUB.png'; // Adjust path as needed

function Societies() {
  return (
    <div className="societies-container">
      <img src={clubImage} alt="Werneth Golf Club" className="societies-image" />
      <h2>Visiting Societies</h2>
      <p>
        Catered for on <strong>Wednesdays</strong> or <strong>Fridays</strong>: –<br />
        <strong>Coffee</strong>, 9 holes in the morning. <strong>Soup & Sandwiches</strong>.<br />
        <strong> Followed by 18 holes</strong> in the afternoon and a <strong>Three Course Evening Meal</strong>.<br /> Selection of other menus can be tailored.
      </p>
      <p><strong>Prices starting from £25.00 per person.</strong></p>
      <p><strong>Please contact the Secretary</strong> for more information.</p>
    </div>
  );
}

export default Societies;

