import { useState } from "react";

const sections = [
  {
    title: "Bio",
    content:
      "Ethan Spann is a Salesforce consultant and client-facing professional with a background in account management, education, and operations.",
  },
  {
    title: "Curriculum Design",
    content: "Designing structured learning experiences aligned with outcomes.",
  },
  {
    title: "Learning Design Activities",
    content: "Interactive and engaging exercises that reinforce learning.",
  },
  {
    title: "Instructional Media",
    content: "Creating visuals and content to enhance understanding.",
  },
  {
    title: "Quality Assurance & Evaluation",
    content: "Ensuring learning solutions meet high standards.",
  },
  {
    title: "Online Courses",
    content: "Developing and managing digital learning environments.",
  },
  {
    title: "Resume",
    content: "View my professional experience.",
  },
  {
    title: "Contact Me",
    content: "Let’s connect and build something impactful.",
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

const openResume = () => {
  window.open(`${import.meta.env.BASE_URL}the-ethan-resume.pdf`, "_blank");
};
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#0a0a0a",
        color: "white",
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* HERO */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          scrollSnapAlign: "start",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
          Ethan Spann
        </h1>
        <p style={{ opacity: 0.7, fontSize: "1.2rem" }}>
          Portfolio • Salesforce Consultant • Problem Solver
        </p>
        <p style={{ marginTop: "20px", opacity: 0.6 }}>
          ↓ Scroll to explore ↓
        </p>
      </section>

      {/* SCROLL SECTIONS */}
      {sections.map((section, index) => (
        <section
          key={index}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            scrollSnapAlign: "start",
            transition: "all 0.6s ease",
            opacity: activeIndex === index ? 1 : 0.2,
          }}
          onMouseEnter={() => setActiveIndex(index)}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            {section.title}
          </h2>

          <div
            style={{
              maxWidth: "700px",
              fontSize: "1.2rem",
              opacity: 0.8,
            }}
          >
            {section.title === "Resume" ? (
              <button
                onClick={openResume}
                style={{
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,150,255,0.6)",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                View Resume
              </button>
            ) : (
              section.content
            )}
          </div>
        </section>
      ))}

      {/* GRID AT BOTTOM */}
      <section
        style={{
          minHeight: "100vh",
          padding: "80px 40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {sections.map((section, index) => {
          const isHovered = hoveredCard === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                if (section.title === "Resume") {
                  openResume();
                }
              }}
              style={{
                width: "280px",
                height: isHovered ? "220px" : "140px",
                padding: "20px",
                borderRadius: "16px",
                background: "#111",
                border: isHovered
                  ? "1px solid rgba(0,150,255,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovered
                  ? "0 10px 30px rgba(0,150,255,0.2)"
                  : "none",
                cursor: "pointer",
              }}
            >
              <h3 style={{ marginBottom: "10px", fontSize: "1.3rem" }}>
                {section.title}
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  opacity: isHovered ? 0.8 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                {section.title === "Resume"
                  ? "Click to view my resume"
                  : section.content}
              </p>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "0.8rem",
                  opacity: 0.4,
                }}
              >
                {section.title === "Resume"
                  ? "Click to open →"
                  : "Hover to explore →"}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}