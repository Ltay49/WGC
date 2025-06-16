import React from "react";
import holes from "../data/holeData"; // hole number, name, yards, par
import "../Card.css";

function Card() {
  return (
    <div className="course-card">
      <h2 className="course-title">The Course Overview</h2>
      <p className="course-text">
        <strong>Werneth Golf Club</strong> offers a{" "}
        <strong>challenging and varied 18-hole course</strong> measuring
        <strong> 5,366 yards (white tees)</strong> with a{" "}
        <strong>par of 68 for men</strong> and
        <strong> 5,094 yards</strong> with a{" "}
        <strong>par of 70 for ladies</strong>.
      </p>

      <div className="card-grid">
        {holes.map((hole) => {
          const imageName = hole.name.replace(/[^a-z0-9]/gi, "_");
          const imageSrc = `/${imageName}.png`;

          return (
            <div key={`${hole.number}-${hole.name}`} className="hole-card">
              <img
                src={imageSrc}
                alt={hole.name}
                className="hole-image"
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3>
                Hole {hole.number}: {hole.name}
              </h3>
              <table className="tee-table">
                <thead>
                  <tr>
                    <th>Tee</th>
                    <th>Yards</th>
                    <th>Par</th>
                    <th>Stroke Index</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>White <span className="tee-circle white"></span></td>
                    <td>{hole.white.yards}</td>
                    <td>{hole.white.par}</td>
                    <td>{hole.white.strokeIndex}</td>
                  </tr>
                  <tr>
                    <td>Yellow<span className="tee-circle yellow"></span></td>
                    <td>{hole.yellow.yards}</td>
                    <td>{hole.yellow.par}</td>
                    <td>{hole.yellow.strokeIndex}</td>
                  </tr>
                  <tr>
                    <td>Ladies <span className="tee-circle ladies"></span></td>
                    <td>{hole.ladies.yards}</td>
                    <td>{hole.ladies.par}</td>
                    <td>{hole.ladies.strokeIndex}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
