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
  
    return (
      <div class="tela-flashcards">
        <div class="topo">
          <img class="logo-mini" src="./assets/logo-mini.png" />
        </div>
        <div class="container">
          <div class="flashcard" data-identifier="flashcard"></div>
        </div>
      </div>
    );
  }
  