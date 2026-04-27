const lojas = [
  { nome: "Box A1 - Capinhas", categoria: "Celular", contato: "75999999999" },
  { nome: "Box A2 - Roupas", categoria: "Moda", contato: "75888888888" },
  { nome: "Box A3 - Eletrônicos", categoria: "Tech", contato: "75777777777" }
];

const container = document.getElementById("lojas");

function render(lista) {
  container.innerHTML = "";
  lista.forEach(loja => {
    container.innerHTML += `
      <div class="loja">
        <h3>${loja.nome}</h3>
        <p>${loja.categoria}</p>
        <a href="https://wa.me/55${loja.contato}" target="_blank">WhatsApp</a>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  const filtro = e.target.value.toLowerCase();
  const filtradas = lojas.filter(l => l.nome.toLowerCase().includes(filtro));
  render(filtradas);
});

render(lojas);