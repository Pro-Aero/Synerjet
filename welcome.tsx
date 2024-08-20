import React, { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = "Bem-vindo ao meu site!";
  }, []); // A lista de dependências vazia [] indica que o efeito só será executado na montagem

  return (
    <div>
      <h1>Bem-vindo ao meu site!</h1>
      <p>Confira as novidades e divirta-se explorando!</p>
    </div>
  );
}
