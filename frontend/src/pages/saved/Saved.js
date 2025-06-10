import React, { useEffect, useState } from "react";
import "./Saved.css"; // Import a CSS file for styling

const Saved = () => {
  const [savedDestinations, setSavedDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinacionet = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/destinacionet");
        if (!response.ok) {
          throw new Error("Failed to fetch destinacionet");
        }
        const data = await response.json();

        const filteredDestinations = [];
        // Iterate through each region and filter destinations with saved: true
        Object.entries(data).forEach(([regionName, regionData]) => {
          if (Array.isArray(regionData.destinacionet)) {
            regionData.destinacionet.forEach((destination) => {
              if (destination.saved) {
                filteredDestinations.push({
                  region: regionName,
                  vendi: destination.vendi,
                  pershkrimi: destination.pershkrimi,
                });
              }
            });
          }
        });

        setSavedDestinations(filteredDestinations);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinacionet();
  }, []);

  console.log("savedDestinations", savedDestinations);

  return (
    <div className="saved-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : savedDestinations.length > 0 ? (
        <div className="card-grid">
          {savedDestinations.map((destination, index) => (
            <div key={index} className="cardSaved">
              <h2>{destination.vendi}</h2>
              <p>
                <strong>Destinacioni:</strong> {destination.vendi}
              </p>
              <p>
                <strong>Description:</strong> {destination.pershkrimi}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No destinations saved.</p>
      )}
    </div>
  );
};

export default Saved;
