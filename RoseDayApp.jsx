import React, { useState, useEffect } from "react";
import bouquetImage from "./assets/rose-bouquet.png";

/* Floating petal */
const Petal = ({ delay, duration, left, size }) => (
  <div
    className="petal"
    style={{
      left: `${left}%`,
      width: size,
      height: size,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  />
);

/* Typewriter */
const TypewriterText = ({ text, speed = 40 }) => {
  const [output, setOutput] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setOutput(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {output}
      <span className="cursor">|</span>
    </>
  );
};

/* PAGE 1 */
const Page1 = ({ onNext }) => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 12 + Math.random() * 8,
        size: 12 + Math.random() * 8,
      }))
    );
  }, []);

  return (
    <div className="page">
      <div className="petals-container">
        {petals.map((p) => (
          <Petal key={p.id} {...p} />
        ))}
      </div>

      <div className="card">
        <h1 className="title">Hey sweetheart,</h1>
        <p className="subtitle">
          a special rose for you, just because you’re you 🌹
        </p>

        <div className="divider" />

        <button className="cta" onClick={onNext}>
          Click here for your surprise →
        </button>
      </div>
    </div>
  );
};

/* PAGE 2 */
const Page2 = () => (
  <div className="page">
    <div className="card">
      <img
        src={bouquetImage}
        alt="Rose bouquet"
        className="bouquet"
        loading="eager"
      />

      <h2 className="title small">
        <TypewriterText text="Here’s something rosy for my sunshine" />
      </h2>

      <p className="note">
        <TypewriterText
          text="Just like these roses, my love for you blooms more beautifully each day. You make my world softer, brighter, and warmer. 💕"
          speed={30}
        />
      </p>
    </div>
  </div>
);

export default function RoseDayApp() {
  const [page, setPage] = useState(1);
  return page === 1 ? <Page1 onNext={() => setPage(2)} /> : <Page2 />;
}
