import React, { useState } from "react";

const ClubForm = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClub = { name, province, logo };
    onCreate(newClub);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del Club"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={province} onChange={(e) => setProvince(e.target.value)}>
        <option value="Pichincha">Pichincha</option>
        <option value="Guayas">Guayas</option>
        {/* Más provincias */}
      </select>
      <input type="file" onChange={(e) => setLogo(e.target.files[0])} />
      <button type="submit">Crear Club</button>
    </form>
  );
};

export default ClubForm;