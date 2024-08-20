import React, { useState } from "react";

export function Contador() {
  const [count, setCount] = useState(0);

  const [string, setString] = useState("");
  const [array, setArray] = useState([]);
  const [boolean, setBoolean] = useState(false);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}
