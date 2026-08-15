import "./Stats.css";

function Stats() {
  return (
    <section className="stats-section">

      <div className="overlay">

        <div className="stats-container">

          <div className="stat-box">
            <h2>232</h2>
            <p>Clients</p>
          </div>

          <div className="stat-box">
            <h2>521</h2>
            <p>Projects</p>
          </div>

          <div className="stat-box">
            <h2>1453</h2>
            <p>Hours Of Support</p>
          </div>

          <div className="stat-box">
            <h2>32</h2>
            <p>Workers</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;