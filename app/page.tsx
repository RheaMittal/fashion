"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    setLoading(true);
    // This is where the magic happens - calling our backend
    setResponse("I'm checking your calendar and the weather now...");
    // Mocking for now to show the UI
    setTimeout(() => {
      setResponse("Since you have a meeting at 2pm and it's 70°F, wear a light blazer!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>👗 Fashion AI Planner</h1>
      <p>Log in to get personalized outfit advice based on your real day.</p>
      
      <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Log in with Google
      </button>

      <div style={{ marginTop: '40px' }}>
        <button 
          onClick={handleAsk}
          style={{ padding: '15px 30px', background: 'blue', color: 'white', border: 'none', borderRadius: '8px' }}
        >
          {loading ? "Thinking..." : "What should I wear today?"}
        </button>
      </div>

      {response && (
        <div style={{ marginTop: '20px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
          {response}
        </div>
      )}
    </div>
  );
}
