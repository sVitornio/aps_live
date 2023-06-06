// Obtém a referência do elemento <iframe>
const iframe = document.querySelector("#chartFrame");

// Função para atualizar o conteúdo do <iframe>
function atualizarIFrame() {
  // Gera um número aleatório para evitar cache
  const randomNumber = Math.floor(Math.random() * 30000);
  // Atualiza o atributo 'src' do <iframe> com o número aleatório
  iframe.src = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQrO4pB_Gnn8Uzsj314YDMvcz9S-HiJlkaND_Xy4RMrr3BP3L6fkhaTVnvV5IBD91dnoN2mE-I5D7O6/pubchart?oid=847607753&format=interactive&rand=${randomNumber}`;
}

// Chama a função 'atualizarIFrame' inicialmente
atualizarIFrame();

// Define o intervalo de atualização para 5 segundos (5000 milissegundos)
setInterval(atualizarIFrame, 5000);
