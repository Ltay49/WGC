import "../Membership.css";
import { useState } from "react";
import awardsImage from "/Awards.png?url";
import sportsmenImage from "/sportsmen.png?url"
import WGC from "../assets/WGC.png";

function Membership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const memberships = [
    {
      title: "All Tee Member",
      price: "£972.00 per annum",
      info: "Access to the course all week.",
    },
    {
      title: "Five Day Member",
      price: "£852.00",
      info: "Weekday play + 6 Sundays per year for £10 per round.",
    },
    {
      title: "Red Tee Member",
      price: "£720.00 per annum",
      info: "Plays from red tees, full-week access.",
    },
    {
      title: "Red Tee Five Day Member",
      price: "£636.00",
      info: "Weekday red tee play + 6 Sundays for £10/round.",
    },
    {
      title: "Junior Membership",
      price: "From £60.00",
      info: "Affordable youth membership for under 18s.",
    },
    {
      title: "All Tee Intermediate",
      price: "From £384.00",
      info: "For young adults; all tee access.",
    },
    {
      title: "Red Tee Intermediate",
      price: "From £366.00",
      info: "Red tee option for young adults.",
    },
  ];

  const openModal = (membership) => {
    setSelectedMembership(membership);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", {
      ...formData,
      membership: selectedMembership,
    });
    closeModal();
  };

  return (
    <div className="membership-container">
      <h2 className="membership-title">Memberships</h2>
      <div className="why-join-collapsible">
        <details>
          <summary>Why Join Werneth Golf Club?</summary>
          <div className="why-join-content">
            <div className="social-highlight-overlay">
              <img
                src={WGC}
                alt="ariel View of the course"
                className="social-image"
              />
              <div className="social-text-overlay">
                <h4>Golf</h4>
                <p>
                  We boast a scenic course as well as host our club professional
                  who is reasdily abvailable for all levels.
                </p>
              </div>
              <span className="social-award-tag">Ariel view of the course</span>
            </div>
            <div className="social-highlight-overlay">
              <img
                src={awardsImage}
                alt="Awards Evening"
                className="social-image"
              />
              <img
                src={sportsmenImage}
                alt="Sportsmen"
                className="social-image secondary-img"
              />
              <div className="social-text-overlay">
                <h4>Social Events</h4>
                <p>
                  Join our vibrant calendar of events and community gatherings —
                  from competitions to themed evenings in the clubhouse.
                </p>
              </div>
              <span className="social-award-tag">Awards Evening</span>
            </div>

            {/* You can add more highlights here if needed */}
          </div>
        </details>
      </div>

      <p className="membership-discount">🎉 Discounts are now available!</p>
      <div className="membership-grid">
        {memberships.map((m, index) => (
          <div key={index} className="membership-card">
            <h3>{m.title}</h3>
            <p className="membership-price">{m.price}</p>
            <p className="membership-info">{m.info}</p>
            <button
              className="enquire-button"
              onClick={() => openModal(m.title)}
            >
              Enquire Here
            </button>
          </div>
        ))}
      </div>

      <p className="membership-note">
        <strong>Annual fees:</strong> 1st January – 31st December.
        <br />
        Please apply to the <strong>Secretary</strong> or{" "}
        <strong>Professional</strong> for further details.
      </p>

      <p className="membership-note">
        If fees are a barrier to joining, please contact the Secretary about
        special membership packages.
      </p>

      <a
        href="https://www.englandgolf.org/club-support/membership-growth-retention/get-into-golf-clubs/"
        target="_blank"
        rel="noopener noreferrer"
        className="get-into-golf"
      >
        Visit the Get Into Golf Website →
      </a>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Enquire about {selectedMembership}</h3>
            <form onSubmit={handleSubmit} className="enquiry-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div className="form-buttons">
                <button type="submit" className="submit-button">
                  Submit
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Membership;
