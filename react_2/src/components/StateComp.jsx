import { useState } from "react";

function StateComp() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  };

  const counterStyle = {
    fontSize: "3rem",
    fontWeight: "600",
    marginBottom: "30px",
    textShadow: "0 0 15px rgba(255,255,255,0.6)",
  };

  const buttonBase = {
    padding: "12px 28px",
    margin: "10px",
    borderRadius: "30px",
    border: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 0 10px rgba(255,255,255,0.2)",
  };

  const incrementStyle = {
    ...buttonBase,
    background: "linear-gradient(45deg, #00c6ff, #0072ff)",
    color: "#fff",
  };

  const decrementStyle = {
    ...buttonBase,
    background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={counterStyle}>Counter: {count}</h1>
        <div>
          <button
            style={incrementStyle}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 20px #00c6ff, 0 0 40px #0072ff")
            }
            onMouseOut={(e) =>
              (e.target.style.boxShadow = "0 0 10px rgba(255,255,255,0.2)")
            }
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            style={decrementStyle}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 20px #ff416c, 0 0 40px #ff4b2b")
            }
            onMouseOut={(e) =>
              (e.target.style.boxShadow = "0 0 10px rgba(255,255,255,0.2)")
            }
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default StateComp;
