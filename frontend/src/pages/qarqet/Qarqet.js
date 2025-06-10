import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Qarqet.css";

const Qarqet = () => {
  const [qarqet, setQarqet] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQarqet = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/qarqet");
        const data = await response.json();
        setQarqet(data);
      } catch (error) {
        console.error("Error fetching qarqet:", error);
      }
    };

    fetchQarqet();
  }, []);

  const handleCardClick = (qark) => {
    navigate(`/qarqet/${qark.name}`, { state: qark });
  };

  return (
    <div className="qarqet-container">
      {qarqet.map((qark, index) => (
        <div key={index} className="card" onClick={() => handleCardClick(qark)}>
          <img src={qark.image} alt={qark.name} className="card-image" />
          <h3 className="card-title">{qark.name}</h3>
          <p className="card-description">{qark.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Qarqet;
