const flashCards = [
    { question: "What does 'pay yourself first' mean?", answer: "Save money before spending on anything else." },
    { question: "What is a budget?", answer: "A plan for how you spend and save money." },
    { question: "What is compound interest?", answer: "Interest on your interest. Your money grows faster over time." },
    { question: "What’s a credit score?", answer: "A number showing how reliable you are with borrowed money." },
    { question: "What’s the 50/30/20 rule?", answer: "50% needs, 30% wants, 20% savings/debt." }
  ];
  
  const container = document.getElementById("cardContainer");
  
  flashCards.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "flash-card";
  
    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="card-front">${card.question}</div>
        <div class="card-back">${card.answer}</div>
      </div>
    `;
  
    cardEl.addEventListener("click", () => {
      cardEl.classList.toggle("flipped");
    });
  
    container.appendChild(cardEl);
  });
  