const listaMateriais = [
  "Óculos de Proteção",
  "Desinfetante Hospitalar",
  "Hipoclorito de Sódio",
  "Luva de Procedimentos Tam. G",
  "Luva de Procedimentos Tam. M",
  "Pano para Limpeza Tipo Rolo",
  "Sabonete líquido",
  "Invólucro para Transporte de Cadáver",
  "Lençol Descartável",
  "Máscara semifacial N95/PFF2",
  "Máscara Cirúrgica",
  "Avental Descartável TNT",
  "Macacão com capuz tipo TYVEK",
  "Sobrebotas",
  "Avental impermeável",
  "Rolo de fita adesiva",
  "Álcool em Gel",
  "Álcool líquido 70 INPM",
  "Barreira Facial",
  "Atadura de Crepe 15 cm",
  "Bandagem Triangular",
  "Cânula de Ponta para Aspiração",
  "Cânula orofaríngea n 0",
  "Cânula orofaríngea n 1",
  "Cânula orofaríngea n 2",
  "Cânula orofaríngea n 3",
  "Cânula orofaríngea n 4",
  "Cânula orofaríngea n 5",
  "Cartão de Triagem de Vítima (START)",
  "Colar Cervical Regulável Tam. Adulto",
  "Colar Cervical Regulável Tam. Infantil",
  "Colar Cervical Tam. G",
  "Colar Cervical Tam. Infantil",
  "Colar Cervical Tam. M",
  "Colar Cervical Tam. P",
  "Colete Imobilizador de Coluna Adulto-KED",
  "Colete Imobilizador de Coluna Pediátrico",
  "Compressa de Gaze 7,5 x 7,5",
  "Compressa de Hidrogel p/ queimadura",
  "Compressa de Manta de Algodão 10 X 15 cm",
  "Envelope para Pertences",
  "Esfigmomanômetro Tam. Adulto",
  "Esfigmomanômetro Tam. Infantil",
  "Esparadrapo",
  "Estetoscópio",
  "Extensão de Silicone n 203",
  "Ficha de Relação de Pertences",
  "Fita de Isolamento",
  "Imobilizador Lateral de Cabeça",
  "Kit Parto",
  "Lanterna Pupilar",
  "Luva de Borracha Tam. G",
  "Luva de Borracha Tam. GG",
  "Luva de Borracha Tam. M",
  "Manta Aluminizada",
  "Máscara de O2 com Bag Tam. Adulto",
  "Máscara de O2 com Bag Tam. Infantil",
  "Máscara para RCP tipo Pocket Mask",
  "Mochila de O2 para MOB",
  "Mochila de O2 para UR",
  "Mochila de Resgate para MOB",
  "Mochila de Resgate para UR",
  "Oxímetro de Pulso/DEDO",
  "Prancha Longa Completa",
  "Protetor para Queimaduras e Eviscerações",
  "Reanimador Manual com Bag Tam. Adulto",
  "Reanimador Manual com Bag Tam. Infantil",
  "Reanimador Manual com Bag Tam. Neo Natal",
  "Saco de lixo (15) litros",
  "Soro Fisiológico",
  "Tala Moldável Aramada Tam. G",
  "Tala Moldável Aramada Tam. GG",
  "Tala Moldável Aramada Tam. M",
  "Tala Moldável Aramada Tam. P",
  "Tala Moldável Aramada Tam. PP",
  "Tala Rígida Fibra de Vidro Tam. G",
  "Tesoura para Vestes",
  "Tirante de Prancha",
  "Eletrodos DEA existentes na VTR e Reserva"
];

const tbody = document.getElementById('materials-table-body');

listaMateriais.forEach(material => {
  const tr = document.createElement('tr');

  const tdMaterial = document.createElement('td');
  tdMaterial.textContent = material;
  tr.appendChild(tdMaterial);

  const tdQuantidade = document.createElement('td');
  
  const inputQuantidade = document.createElement('input');
  inputQuantidade.type = 'number';
  inputQuantidade.value = 0;
  inputQuantidade.min = 0;
  tdQuantidade.appendChild(inputQuantidade);

  const incrementButton = document.createElement('button');
  incrementButton.textContent = '+';
  incrementButton.classList.add('increment');
  incrementButton.onclick = () => {
    inputQuantidade.value = parseInt(inputQuantidade.value) + 1;
  };

  const decrementButton = document.createElement('button');
  decrementButton.textContent = '-';
  decrementButton.classList.add('decrement');
  decrementButton.onclick = () => {
    if (inputQuantidade.value > 0) {
      inputQuantidade.value = parseInt(inputQuantidade.value) - 1;
    }
  };

  tdQuantidade.appendChild(decrementButton);
  tdQuantidade.appendChild(incrementButton);
  tr.appendChild(tdQuantidade);

  tbody.appendChild(tr);
});
