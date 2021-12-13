import { useState } from "react";
import TelaFlashCards from "./TelaFlashCards";

export default function TelaInicio() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <div class="tela-inicio">
          <img class="logo" src="./assets/logo.png" />
          <div
            class="inicia-rodada"
            data-identifier="start-zap-recall"
            onClick={() => setShow(false)}
          >
            <p>Praticar React</p>
            <img class="next" src="./assets/next.png" />
          </div>
        </div>
      ) : (
        <TelaFlashCards />
      )}
    </>
  );
}
