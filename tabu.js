import React, { StrictMode, useState } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

// Componente para as casas individuais do tabuleiro
const Celula = () => {
  return (
    <button className="grid-cell">
      O
    </button>
  );
};

// Componente principal do tabuleiro
const Tabuleiro = () => {
  return (
    <div className="game-container">
      <div className="grid-row">
        <Celula />
        <Celula />
        <Celula />
        <Celula />
      </div>
    </div>
  );
};

// Inicialização e renderização do App
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Tabuleiro />
  </StrictMode>
);
