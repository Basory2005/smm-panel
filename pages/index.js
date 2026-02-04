import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  async function login() {
    if (!email) {
      alert("Entre ton email");
      return;
    }

    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    router.push("/dashboard");
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Panel SMM – Boostage Réseaux Sociaux</h2>

      <input
        placeholder="Entre ton email"
        onChange={e => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Entrer</button>

      <p>Inscription automatique • FCFA • Orange Money</p>
    </div>
  );
}
