import React from "react";
import "./Chefs.css";

import chef1 from "../assets/img-1.jpeg";
import chef2 from "../assets/img-2.jpeg";
import chef3 from "../assets/img-3.jpeg";

function Chef() {
  return (
    <div className="chef-section">
      <p className="chef-title">CHEFS</p>
      <h1>Our Professional Chefs</h1>

      <div className="chef-container">

        {/* Card 1 */}
        <div className="chef-card">
          <img src={chef1} alt="chef1" />
          <div className="chef-content">
            <h2>Walter White</h2>
            <p>Master Chef</p><br />
           <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="chef-card">
          <img src={chef2} alt="chef2" />
          <div className="chef-content">
            <h2>Sarah Jhonson</h2>
            <p>Patissier</p><br />
            <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="chef-card">
          <img src={chef3} alt="chef3" />
          <div className="chef-content">
            <h2>William Anderson</h2>
            <p>Cook</p><br />
            <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chef;