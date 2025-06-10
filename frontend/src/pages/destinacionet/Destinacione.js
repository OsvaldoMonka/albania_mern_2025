import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Destinacionet.css";

const Destinacionet = () => {
  const { qarkName } = useParams();
  const qarkNameNormalized =
    qarkName?.charAt(0).toUpperCase() + qarkName.slice(1).toLowerCase();

  const [destinacionetData, setDestinacionetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    const fetchDestinacionet = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/destinacionet");
        if (!response.ok) {
          throw new Error("Failed to fetch destinacionet");
        }
        const data = await response.json();
        setDestinacionetData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinacionet();
  }, []);

  // Toggle saved status, update backend & UI state
  const toggleSaved = async (id, currentSaved) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/destinacionet/${qarkNameNormalized}/${id}/save`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ saved: !currentSaved }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update saved status");
      }

      // Update UI locally
      setDestinacionetData((prevData) =>
        prevData.map((item) => {
          if (item.qark === qarkNameNormalized) {
            return {
              ...item,
              destinacionet: item.destinacionet.map((dest) =>
                dest.id === id ? { ...dest, saved: !currentSaved } : dest
              ),
            };
          }
          return item;
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const filteredData = destinacionetData.find(
    (item) => item.qark === qarkNameNormalized
  )?.destinacionet;

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!filteredData || filteredData.length === 0)
    return <div>Qarku "{qarkName}" nuk u gjet.</div>;

  return (
    <div>
      <h2>Destinacionet për {qarkNameNormalized}</h2>
      <div className="card-container">
        {filteredData.map(({ id, vendi, pershkrimi, saved }) => (
          <div key={id} className="cardDestinacionet">
            <h3 className="card-title">
              {vendi}{" "}
              <span
                onClick={() => toggleSaved(id, saved)}
                className="save-icon"
                style={{ cursor: "pointer" }}
                title={saved ? "Hiq nga të ruajturat" : "Ruaj destinacionin"}
              >
                {saved ? "⭐" : "☆"}
              </span>
            </h3>
            <p className="card-description">{pershkrimi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinacionet;
