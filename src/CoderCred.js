import React from "react";
import "./CoderCred.css";

export default function CoderCred() {
  return (
    <footer className="CoderCred">
      <a
        href="https://github.com/meageliz/totally-radical-weather-app"
        target="_blank"
        rel="noreferrer"
        className="gitLink"
      >
        Open-source code{" "}
      </a>
      created by{" "}
      <a
        href="https://www.linkedin.com/in/meagangardner/"
        target="_blank"
        rel="noreferrer"
        className="Linkedin"
      >
        Meag Gardner
      </a>
    </footer>
  );
}
