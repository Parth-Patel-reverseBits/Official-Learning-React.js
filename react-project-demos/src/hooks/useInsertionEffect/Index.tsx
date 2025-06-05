// App.tsx
import { useState, useInsertionEffect } from "react";

const lightTheme = `
  body {
    background-color: white;
    color: black;
    transition: all 0.3s ease;
  }
`;

const darkTheme = `
  body {
    background-color: black;
    color: white;
    transition: all 0.3s ease;
  }
`;

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useInsertionEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.setAttribute("data-theme", theme);
    styleTag.innerHTML = theme === "light" ? lightTheme : darkTheme;

    document.head.appendChild(styleTag);

    return () => {
      const prevTag = document.head.querySelector(`[data-theme="${theme}"]`);
      if (prevTag) {
        document.head.removeChild(prevTag);
      }
    };
  }, [theme]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Theme Switcher (useInsertionEffect)</h1>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        style={{
          padding: "1rem 2rem",
          fontSize: "16px",
          marginTop: "2rem",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
};

export default Index;
