import { useState } from "react";

export default function TelaFlashCards() {
  const flashcards = [
    {
      questao: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript"
    },
    {
      questao: "O React é __",
      resposta: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
      questao: "Componentes devem iniciar com __",
      resposta: "letra maiúscula"
    },
    { questao: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    {
      questao: "O ReactDOM nos ajuda __",
      resposta: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
      questao: "Usamos o npm para __",
      resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {
      questao: "Usamos props para __",
      resposta: "passar diferentes informações para componentes"
    },
    {
      questao: "Usamos estado (state) para __",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
  ];

  const [turn, setTurn] = useState(false);


  return (
    <>
    {turn ? (

    <div class="tela-flashcards">
      <div class="topo">
        <img class="logo-mini" src="./assets/logo-mini.png" />
      </div>
      <div class="container">
        <div class="flashcard flashcard-virada" data-identifier="flashcard">
          <div class="thefront">
            <div>1/8</div>
            <div>{flashcards[0].questao}</div>
            <div><img src="./assets/turn.png" onClick={() => setTurn(true)} data-identifier="arrow"/></div>
          </div>
          <div class="theback">
            <div>{flashcards[0].questao}</div>
            <div>{flashcards[0].resposta}</div>
            <div class="caixa-botoes">
              <div class="botao-neutro">Aprendi agora</div>
              <div class="botao-incorreto">Não lembrei</div>
              <div class="botao-esforço">Lembrei com esforço</div>
              <div class="botao-zap">Zap!</div>
            </div>
          </div>
        </div>
      </div>
    </div> )
    :
    (<div class="tela-flashcards">
      <div class="topo">
        <img class="logo-mini" src="./assets/logo-mini.png" />
      </div>
      <div class="container">
        <div class="flashcard " data-identifier="flashcard">
          <div class="thefront">
            <div>1/8</div>
            <div>{flashcards[0].questao}</div>
            <div><img src="./assets/turn.png" onClick={() => setTurn(true)} data-identifier="arrow"/></div>
          </div>
          <div class="theback">Traseira</div>
        </div>
      </div>
    </div>)

    }
    </>
    )
}