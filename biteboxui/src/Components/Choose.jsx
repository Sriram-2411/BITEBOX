import "./Choose.css";

import {
  FaClipboardList,
  FaGem,
  FaInbox,
  FaArrowRight
} from "react-icons/fa";

function Choose() {
  return (
    <section className="choose">

      <div className="choose-container">

        {/* Left Card */}

        <div className="choose-left">

          <h2>
            Why Choose
            <br />
            BiteBox
          </h2>

          <p>
            Experience delicious food crafted with passion using
            fresh ingredients. We combine quality, hygiene and
            exceptional service to make every meal memorable.
          </p>

          <button>
            Learn More
            <FaArrowRight />
          </button>

        </div>

        {/* Card 1 */}

        <div className="choose-card">

          <div className="card-icon">
            <FaClipboardList />
          </div>

          <h3>
            Premium
            <br />
            Quality
          </h3>

          <p>
            Every ingredient is handpicked to ensure the highest
            quality and freshness.
          </p>

        </div>

        {/* Card 2 */}

        <div className="choose-card">

          <div className="card-icon">
            <FaGem />
          </div>

          <h3>
            Luxury
            <br />
            Experience
          </h3>

          <p>
            Elegant interiors and world-class dining that create
            unforgettable memories.
          </p>

        </div>

        {/* Card 3 */}

        <div className="choose-card">

          <div className="card-icon">
            <FaInbox />
          </div>

          <h3>
            Fast
            <br />
            Delivery
          </h3>

          <p>
            Freshly prepared meals delivered quickly while keeping
            every bite delicious.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Choose;