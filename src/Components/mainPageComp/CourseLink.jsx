import WGC from "../../assets/WGC.png";
import "../../quickCourseLink.css";

function QuickCourseLink() {
  return (
    <div
      className="course-banner split-banner"
      style={{ backgroundImage: `url(${WGC})` }}
    >
      <div className="overlay split-content">
        <div className="left">
          <div className="cta-buttons">
            <a href="/course/card" className="course-button">
              ⛳ Explore Our Course
            </a>
            <a
              href="https://visitors.brsgolf.com/werneth#/course/1"
              target="_blank"
              rel="noopener noreferrer"
              className="tee-time-button"
            >
              🕒 Book a Tee Time
            </a>
          </div>
        </div>
        <div className="right">
          <div className="membership-offer">
            <h2>New to Golf?</h2>
            <p>Join now and get 20% off your first year’s membership!</p>
            <a
              href="https://www.wernethgolfclub.co.uk/images/wgcimages/Advert2024SeptemberNew.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="join-button"
            >
              View Here!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickCourseLink;


