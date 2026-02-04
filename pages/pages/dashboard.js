import { useEffect, useState } from "react";

export default function Dashboard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then(res => res.json())
      .then(setServices);
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h2>Tableau de bord</h2>

      <h3>Paiement Orange Money</h3>
      <p>
        Numéro : <b>07 XX XX XX</b><br />
        Nom : <b>TON NOM</b>
      </p>

      <h3>Services</h3>
      {services.map(s => (
        <div key={s.service}>
          {s.name} — {Math.round(s.rate * 650)} FCFA
        </div>
      ))}
    </div>
  );
}
