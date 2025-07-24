let amigos = [];

function adicionarAmigo(){
  let nome_amigo = document.getElementById('amigo').value;

  if (!nome_amigo){
    alert("Por favor, insira um nome");
    return;
  }

  amigos.push(nome_amigo)
  document.getElementById('amigo').value = "";
  atualizarLista();
}

function atualizarLista(){
  let lista_amigos = document.getElementById('listaAmigos');
  lista_amigos.innerHTML = "";

  for (let i=0; i < amigos.length; i++){
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista_amigos.appendChild(li);
  }
}

function sortearAmigo(){
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para o sorteio.");
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById('resultado').innerHTML = `O amigo sorteado foi: ${sorteado}`;
}