var _M4 =     {
      id: 4,
      icon: '⚒️',
      title: 'Execução Prática (com energia desligada)',
      description: 'Passagem de cabos, emendas corretas, montagem do QDC e instalação de pontos.',
      lessons: [
        {
          id: 1,
          title: 'Passagem de cabos em eletrodutos',
          duration: '~10 min',
          content: `
<p class="lesson-intro">A passagem de cabos em eletrodutos é uma das atividades mais comuns na obra elétrica. Feita corretamente, protege os cabos e facilita futuras manutenções. Feita errada, pode danificar o isolamento dos condutores.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📏 Tipos de Eletrodutos</h2>
<div class="concept-grid">
<div class="concept-card panel"><span class="concept-card__icon">🟠</span><h3>PVC Corrugado (flexível)</h3><p>Para embutir na laje ou contrapiso. Não use aparente — amassa facilmente.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">⬜</span><h3>PVC Rígido</h3><p>Para paredes, tetos e instalações aparentes. Resistente a impactos.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">⚫</span><h3>Aço Galvanizado (EMT)</h3><p>Para áreas externas e industriais. Resistente a impactos e UV.</p></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔧 Passando Cabos no Eletroduto</h2>
<ol class="steps-list">
<li>Verifique se o eletroduto está limpo e sem rebarbas nas extremidades</li>
<li>Use <strong>guia de aço</strong> (peixe) ou mola passafio para percorrer o percurso</li>
<li>Amarre os cabos na guia usando fita isolante — não faça nó nos cabos</li>
<li>Passe os cabos devagar, sem forçar — torções danificam o isolamento</li>
<li>Mantenha <strong>folga de 20-30 cm</strong> em cada extremidade para as conexões</li>
<li>Identifique cada cabo na extremidade (fase, neutro, terra) com fita colorida</li>
</ol>
</div>
<div class="duct-diagram">
<h3>📊 Visualização da Taxa de Ocupação</h3>
<div class="duct-row">
  <span class="duct-label">20% — Ok</span>
  <div class="duct-track"><div class="duct-fill ok" style="width:20%">20%</div></div>
  <span class="duct-note">✅ Ideal</span>
</div>
<div class="duct-row">
  <span class="duct-label">40% — Máx</span>
  <div class="duct-track"><div class="duct-fill warn" style="width:40%">40%</div></div>
  <span class="duct-note">⚠️ Limite</span>
</div>
<div class="duct-row">
  <span class="duct-label">70% — Erro</span>
  <div class="duct-track"><div class="duct-fill bad" style="width:70%">70%</div></div>
  <span class="duct-note">❌ Irregular</span>
</div>
</div>
<div class="alert alert-warning"><strong>⚠️ Taxa de ocupação:</strong> O eletroduto não pode ser completamente cheio de cabos. A NBR 5410 limita a ocupação a <strong>40% da área interna</strong> (seção transversal) do eletroduto para facilitar a troca de cabos no futuro.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>PVC corrugado: embutido em laje. PVC rígido: paredes e tetos</li><li>Use guia de aço para percursos longos</li><li>Não force — torção danifica o isolamento</li><li>Deixe 20-30 cm de folga em cada extremidade</li><li>Máximo 40% de ocupação do eletroduto</li></ul></div>`
        },
        {
          id: 2,
          title: 'Emendas e conexões corretas',
          duration: '~10 min',
          content: `
<p class="lesson-intro">Uma emenda mal feita é uma das causas mais comuns de falhas elétricas em residências. Superaquecimento, faíscas e incêndios frequentemente têm origem em conexões precárias ou improvisadas.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">✂️ Preparando o Cabo</h2>
<ol class="steps-list">
<li>Use <strong>alicate decapador</strong> ou estilete para remover o isolamento — nunca dente ou faca</li>
<li>Remova apenas o necessário: cerca de 1 cm para conexões em borne, 2-3 cm para emendas</li>
<li>Verifique se não cortou nenhum fio do condutor — cabo torcido perde capacidade</li>
<li>Para cabos multifilares: torça os fios entre si antes de conectar</li>
</ol>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔗 Tipos de Conexão</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🔩</span><div><strong>Borne de pressão (parafuso)</strong><p>Insira o cabo desencapado até o fim, aperte o parafuso com chave de fenda. Puxe levemente para testar a fixação. Parafuso frouxo = resistência = calor.</p></div></div>
<div class="key-point"><span class="key-point__icon">🔌</span><div><strong>Conector Wago (push-in)</strong><p>Empurre o cabo desencapado até travar. Puxe para confirmar. Mais rápido e confiável que parafuso em muitas aplicações.</p></div></div>
<div class="key-point"><span class="key-point__icon">🔄</span><div><strong>Emenda torcida</strong><p>Torça os fios e use conector de emenda (tipo porca de porcelana ou Wago). Nunca deixe emenda sem isolamento adequado.</p></div></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚡ PROIBIDO:</strong> Emenda com apenas fita isolante em volta dos fios sem conector. A fita pode soltar com o calor, deixando os fios expostos. Use sempre conector adequado, depois proteja com fita.</div>
<div class="alert alert-warning"><strong>⚠️ Atenção:</strong> Toda emenda deve ser feita dentro de uma caixa de passagem (octogonal ou retangular), nunca dentro do eletroduto ou enterrada na parede.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Use decapador — nunca dente ou faca para remover isolamento</li><li>Parafuso frouxo causa aquecimento — aperte bem e teste</li><li>Wago é confiável e rápido para emendas</li><li>Nunca deixe emenda sem conector adequado</li><li>Toda emenda: dentro de caixa de passagem</li></ul></div>`
        },
        {
          id: 3,
          title: 'Montagem do quadro de distribuição',
          duration: '~12 min',
          content: `
<p class="lesson-intro">A montagem do quadro de distribuição é o trabalho mais técnico da instalação residencial. Uma montagem correta garante segurança e facilita futuras manutenções.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📋 Antes de Começar — Checklist</h2>
<ul class="lesson-list">
<li>Confirmar que a entrada de energia está desenergizada (LOTO aplicado)</li>
<li>Ter em mãos o diagrama dos circuitos</li>
<li>Todos os cabos identificados com etiquetas nos dois extremos</li>
<li>Disjuntores, DR e DPS dimensionados e separados por circuito</li>
</ul>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔧 Sequência de Montagem</h2>
<ol class="steps-list">
<li>Instale o disjuntor geral (DR ou termomagnético) no primeiro espaço</li>
<li>Instale os disjuntores dos circuitos — agrupe por área (quartos, cozinha, etc.)</li>
<li>Instale o barramento de neutro (borne azul) e conecte todos os neutros</li>
<li>Instale o barramento de terra (borne verde) e conecte todos os terras</li>
<li>Passe os cabos de fase de cada circuito aos respectivos disjuntores</li>
<li>Conecte a saída do disjuntor geral às entradas dos circuitos</li>
<li>Organize os cabos com amarras — deixe organizado como vieram da parede</li>
<li>Identifique cada disjuntor com etiqueta ("Quarto 1", "Cozinha Tomadas", etc.)</li>
</ol>
</div>
<div class="alert alert-success"><strong>✅ Identificação é lei:</strong> Todo quadro deve ter um diagrama unifilar com a identificação de cada circuito. Mesmo em obras simples, etiquete cada disjuntor. Isso salva horas de trabalho na próxima manutenção.</div>
<div class="alert alert-danger"><strong>⚡ Não misture:</strong> Neutro e terra têm barramentos separados. Nunca conecte o neutro no barramento de terra ou vice-versa. Essa confusão gera falhas intermitentes difíceis de diagnosticar.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>LOTO antes de qualquer conexão — sem exceção</li><li>Neutro e terra: barramentos separados, nunca misture</li><li>Etiquete cada disjuntor com o circuito que protege</li><li>Organize os cabos com amarras dentro do quadro</li><li>Diagrama unifilar é obrigatório e deve estar no quadro</li></ul></div>`
        },
        {
          id: 4,
          title: 'Instalação de tomadas e interruptores',
          duration: '~10 min',
          content: `
<p class="lesson-intro">Com a energia desligada e verificada, a instalação de tomadas e interruptores é trabalho limpo e seguro. Atenção às cores e ao aperto correto das conexões é o que faz a diferença.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🔌 Instalando uma Tomada 2P+T</h2>
<div class="wiring-diagram">
<h3>Diagrama de ligação — Tomada 2P+T</h3>
<div class="wire-row">
  <div class="wire-dot" style="background:#22c55e;"></div>
  <span class="wire-name">Terra (PE)</span>
  <span class="wire-desc">Fio verde/amarelo → pino central (redondo, superior)</span>
  <span class="wire-borne">Borne ⏚</span>
</div>
<div class="wire-row">
  <div class="wire-dot" style="background:#3b82f6;"></div>
  <span class="wire-name">Neutro (N)</span>
  <span class="wire-desc">Fio azul → borne marcado "N"</span>
  <span class="wire-borne">Borne N</span>
</div>
<div class="wire-row">
  <div class="wire-dot" style="background:#ef4444;"></div>
  <span class="wire-name">Fase (L)</span>
  <span class="wire-desc">Fio preto/vermelho → borne marcado "L"</span>
  <span class="wire-borne">Borne L</span>
</div>
</div>
<ol class="steps-list">
<li>Confirme ausência de tensão com multímetro nos 3 pontos</li>
<li>Identifique os fios: <em>preto/vermelho = fase, azul = neutro, verde/amarelo = terra</em></li>
<li>Conecte o terra no borne superior (pino central da tomada)</li>
<li>Conecte o neutro no borne marcado com "N" ou cor azul</li>
<li>Conecte a fase no borne marcado com "L" ou sem marcação específica</li>
<li>Aperte todos os parafusos firmemente — puxe cada cabo para testar</li>
<li>Afunde a tomada na caixa, prenda com os parafusos e instale a placa</li>
</ol>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">💡 Instalando um Interruptor Simples</h2>
<ol class="steps-list">
<li>Confirme ausência de tensão</li>
<li>O interruptor interrompe apenas a <strong>fase</strong> — nunca o neutro</li>
<li>Conecte a fase que vem da caixa no borne de entrada do interruptor</li>
<li>Conecte a fase que vai para a luminária no borne de saída</li>
<li>Aperte os parafusos e teste o funcionamento após re-energização</li>
</ol>
</div>
<div class="alert alert-warning"><strong>⚠️ Interruptor no neutro:</strong> Interromper o neutro em vez da fase é erro grave. A lâmpada apaga normalmente, mas a base fica energizada com a fase — risco de choque ao trocar a lâmpada.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Sempre: confirmar ausência de tensão antes de conectar</li><li>Terra (verde): borne superior da tomada</li><li>Interruptor: interrompe a fase — nunca o neutro</li><li>Aperte os bornes e puxe os cabos para testar a fixação</li><li>Após instalar: re-energize e teste o funcionamento</li></ul></div>`
        }
      ],
      quiz: {
        questions: [
          { text: 'Qual é a taxa máxima de ocupação de cabos dentro de um eletroduto?', options: [{ text: '25%', correct: false }, { text: '40%', correct: true }, { text: '60%', correct: false }, { text: '80%', correct: false }], explanation: 'A NBR 5410 limita a ocupação dos eletrodutos a 40% da área da seção transversal interna, facilitando futuras substituições de cabos e evitando superaquecimento.' },
          { text: 'Onde devem ser feitas as emendas de cabos elétricos?', options: [{ text: 'Dentro do eletroduto, com fita isolante dupla', correct: false }, { text: 'Enterradas na parede com argamassa por cima', correct: false }, { text: 'Dentro de caixas de passagem, com conectores', correct: true }, { text: 'Em qualquer ponto, desde que bem isoladas', correct: false }], explanation: 'Emendas devem ser feitas dentro de caixas de passagem (octogonal ou retangular), usando conectores adequados (Wago, porca de porcelana) e protegidas com fita após.' },
          { text: 'Como preparar o cabo antes de conectar no borne de uma tomada?', options: [{ text: 'Usar os dentes para remover o isolamento', correct: false }, { text: 'Usar alicate decapador para remover apenas o necessário', correct: true }, { text: 'Cortar com estilete em diagonal com força', correct: false }, { text: 'Queimar levemente com isqueiro para amolecer o isolamento', correct: false }], explanation: 'O alicate decapador (ou pelador de cabo) é a ferramenta correta. Remove o isolamento sem cortar os fios condutores, preservando a capacidade do cabo.' },
          { text: 'Ao instalar um interruptor, qual condutor ele deve interromper?', options: [{ text: 'O neutro', correct: false }, { text: 'O terra', correct: false }, { text: 'A fase', correct: true }, { text: 'Qualquer um dos dois — neutro ou fase', correct: false }], explanation: 'O interruptor deve interromper a fase. Se interromper o neutro, a lâmpada apaga mas a base continua energizada (com a fase), criando risco de choque ao trocar a lâmpada.' },
          { text: 'O que fazer se o cabo não deslizar facilmente pelo eletroduto?', options: [{ text: 'Puxar com força máxima usando alicate', correct: false }, { text: 'Adicionar mais cabos para criar pressão conjunta', correct: false }, { text: 'Verificar a taxa de ocupação e usar óleo vegetal ou talco como lubrificante', correct: true }, { text: 'Cortar o eletroduto e refazer o trecho', correct: false }], explanation: 'Quando o cabo não desliza bem, primeiro verifique se a taxa de ocupação não ultrapassou 40%. Lubrificantes específicos (óleo vegetal ou talco) facilitam a passagem sem danificar os isolamentos.' },
          { text: 'Na montagem do quadro de distribuição, o que separa os barramentos de neutro e terra?', options: [{ text: 'Nada — eles podem ser conectados no mesmo ponto', correct: false }, { text: 'São barramentos distintos — nunca misture os condutores', correct: true }, { text: 'São separados apenas em instalações industriais, não residenciais', correct: false }, { text: 'O barramento de terra pode ser compartilhado com o neutro quando não há DPS', correct: false }], explanation: 'Neutro e terra são barramentos completamente separados, identificados por cores diferentes (azul para neutro, verde para terra). Misturá-los causa falhas intermitentes e compromete a proteção.' }
        ]
      }
    };
var _M5 =     {
      id: 5,
      icon: '🔍',
      title: 'Identificação e Rastreamento de Circuitos',
      description: 'Mapeamento com multímetro, teste de continuidade e rastreamento de fios.',
      lessons: [
        {
          id: 1,
          title: 'Mapeamento de circuitos com multímetro',
          duration: '~10 min',
          content: `
<p class="lesson-intro">Em obras prontas ou reformas, muitas vezes não existe diagrama dos circuitos. Saber mapear a instalação existente é uma habilidade essencial para o eletricista predial.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🗺️ Por que mapear os circuitos?</h2>
<ul class="lesson-list">
<li>Identificar qual disjuntor protege qual área antes de iniciar o serviço</li>
<li>Garantir que o circuito correto está desligado antes de trabalhar</li>
<li>Descobrir circuitos que alimentam mais de uma área do que o esperado</li>
<li>Encontrar circuitos sem proteção ou com proteção subdimensionada</li>
</ul>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔧 Método de Mapeamento</h2>
<ol class="steps-list">
<li>Ligue todos os equipamentos (luzes e tomadas testadas com lâmpada) em cada ambiente</li>
<li>No quadro, desligue um disjuntor por vez</li>
<li>Identifique quais pontos apagaram ou pararam de funcionar</li>
<li>Anote no diagrama: "Disjuntor 3 → Sala iluminação + corredor"</li>
<li>Repita para todos os disjuntores</li>
<li>Transfira o mapeamento para uma etiqueta afixada dentro do quadro</li>
</ol>
</div>
<div class="alert alert-success"><strong>✅ Dica profissional:</strong> Use um testador de tomadas (plug tester) com LED. Plugue na tomada — se apagar quando desligar o disjuntor, está no mapeamento. Mais rápido do que precisar de uma segunda pessoa.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Nunca assuma que o circuito correto está desligado — mapeie primeiro</li><li>Desligue um disjuntor por vez para identificar cada circuito</li><li>Registre o mapeamento em etiqueta dentro do quadro</li><li>Testador de tomadas facilita o processo sem precisar de ajuda</li><li>Um circuito pode alimentar áreas diferentes do que o esperado</li></ul></div>`
        },
        {
          id: 2,
          title: 'Teste de continuidade passo a passo',
          duration: '~9 min',
          content: `
<p class="lesson-intro">O teste de continuidade verifica se um condutor está íntegro de ponta a ponta — sem rupturas, maus contatos ou cabos cortados dentro do eletroduto. É a ferramenta de diagnóstico mais básica e mais valiosa.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">⚡ Configurando o Multímetro para Continuidade</h2>
<ol class="steps-list">
<li>Selecione a função de continuidade (ícone de som/buzzer 🔊 ou Ω com símbolo de diodo)</li>
<li>Conecte as pontas: preta no COM, vermelha no VΩ</li>
<li>Toque as duas pontas entre si — o multímetro deve biper (confirma que está funcionando)</li>
<li>Afaste as pontas — o bipe para (confirma que o circuito está aberto)</li>
</ol>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔌 Testando um Cabo</h2>
<ol class="steps-list">
<li><strong>Importante: a instalação deve estar SEM TENSÃO</strong> (LOTO aplicado)</li>
<li>Coloque uma das pontas no início do cabo (ex: no quadro)</li>
<li>Coloque a outra ponta no final do cabo (ex: na caixa da tomada)</li>
<li>Bipe = continuidade (cabo íntegro)</li>
<li>Sem bipe = ruptura (cabo cortado, mau contato ou borne frouxo)</li>
</ol>
</div>
<div class="alert alert-danger"><strong>⚡ NUNCA teste continuidade com tensão no circuito.</strong> A função de continuidade usa tensão interna do multímetro (pilha). Se houver tensão externa, pode danificar o instrumento e causar acidente.</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔍 Identificando Cabos Sem Etiqueta</h2>
<p>Para identificar cabos não etiquetados em uma caixa:</p>
<ol class="steps-list">
<li>Curto-circuite os cabos no quadro (use um jumper entre fase e neutro do circuito desligado)</li>
<li>Teste continuidade nos cabos da caixa — o par que bipa é o par ligado a esse disjuntor</li>
<li>Remova o jumper após identificar</li>
</ol>
</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Continuidade só com energia desligada — obrigatório</li><li>Teste as pontas entre si antes de usar (confirmar funcionamento)</li><li>Bipe = condutor íntegro. Sem bipe = ruptura ou mau contato</li><li>Jumper no quadro ajuda a identificar pares de cabos</li><li>Borne frouxo pode dar leitura intermitente — apertar e retestar</li></ul></div>`
        },
        {
          id: 3,
          title: 'Identificação de fios sem tensão',
          duration: '~8 min',
          content: `
<p class="lesson-intro">Identificar corretamente fase, neutro e terra em uma instalação existente é fundamental para qualquer intervenção. Fios sem etiqueta e instalações antigas com cores erradas exigem método sistemático.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🎨 Quando as Cores Não São Confiáveis</h2>
<p>Em instalações antigas (antes de 2004), o padrão de cores era diferente. Em gambiarras, as cores podem ter sido ignoradas completamente. Nunca confie nas cores — sempre meça.</p>
<div class="alert alert-danger"><strong>⚡ PERIGO:</strong> Assume-se que verde = terra, azul = neutro, e os outros = fase. <strong>Não assuma nada em instalação desconhecida.</strong> Um fio verde pode estar como fase em uma instalação irregular, e isso pode ser fatal.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔧 Procedimento de Identificação Segura</h2>
<ol class="steps-list">
<li>Aplique o LOTO e verifique ausência de tensão (multímetro nos 3 pontos)</li>
<li>Com energia desligada, use o teste de continuidade para identificar pares</li>
<li>Re-energize momentaneamente APENAS para medir com o multímetro</li>
<li>Meça cada fio em relação ao terra conhecido: fase marca 127V ou 220V, neutro marca ~0V</li>
<li>Desligue novamente (LOTO) antes de tocar qualquer condutor</li>
<li>Identifique os fios com fita colorida conforme o padrão NBR 5410</li>
</ol>
</div>
<div class="alert alert-success"><strong>✅ Boa prática:</strong> Após identificar e corrigir as cores de uma instalação, documente o que foi feito. Deixe uma nota dentro da caixa do quadro: "Cores corrigidas para NBR 5410 em [data] por [seu nome]".</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Nunca confie nas cores de instalações desconhecidas</li><li>Meça antes de tocar — sempre</li><li>Identificação segura: LOTO → continuidade → medir com tensão → LOTO → marcar</li><li>Fase = 127V ou 220V em relação ao terra</li><li>Documente as correções feitas para o próximo eletricista</li></ul></div>`
        }
      ],
      quiz: {
        questions: [
          { text: 'Qual é o objetivo do teste de continuidade?', options: [{ text: 'Medir a tensão presente no cabo', correct: false }, { text: 'Verificar se o cabo está íntegro de ponta a ponta, sem rupturas', correct: true }, { text: 'Medir a resistência de isolamento do cabo', correct: false }, { text: 'Identificar a presença de corrente alternada no circuito', correct: false }], explanation: 'O teste de continuidade usa a pilha interna do multímetro para verificar se há caminho elétrico contínuo entre as duas pontas — detectando cabos cortados ou com mau contato.' },
          { text: 'Quando é seguro fazer o teste de continuidade?', options: [{ text: 'Com o circuito energizado em baixa tensão (127V)', correct: false }, { text: 'Somente com o circuito completamente sem tensão (LOTO aplicado)', correct: true }, { text: 'Com o disjuntor em posição intermediária', correct: false }, { text: 'Apenas com luvas isolantes — pode ser feito com tensão', correct: false }], explanation: 'O teste de continuidade NUNCA deve ser feito com tensão no circuito. A tensão externa pode danificar o multímetro e causar acidentes graves.' },
          { text: 'Por que não se deve confiar nas cores dos fios em instalações antigas?', options: [{ text: 'As cores desbotam com o tempo e ficam iguais', correct: false }, { text: 'O padrão de cores mudou com a NBR 5410 e instalações antigas podem ter cores diferentes ou incorretas', correct: true }, { text: 'As cores são apenas recomendações — nunca foram obrigatórias no Brasil', correct: false }, { text: 'Apenas instalações acima de 220V precisam seguir o código de cores', correct: false }], explanation: 'Antes de 2004, o Brasil usava um padrão de cores diferente. Além disso, instalações irregulares frequentemente ignoram as cores. Sempre meça antes de confiar nas cores.' },
          { text: 'O que indica o bipe contínuo do multímetro no teste de continuidade?', options: [{ text: 'Tensão presente no cabo — perigo', correct: false }, { text: 'Circuito aberto — cabo com ruptura', correct: false }, { text: 'Circuito fechado — cabo íntegro', correct: true }, { text: 'Curto-circuito entre fase e neutro', correct: false }], explanation: 'O bipe contínuo indica que há caminho elétrico completo entre as pontas — o cabo está íntegro. A ausência de bipe indica ruptura, mau contato ou borne frouxo.' },
          { text: 'Como identificar qual disjuntor alimenta uma tomada específica?', options: [{ text: 'Ligar um aparelho de alta potência e ver qual disjuntor dispara', correct: false }, { text: 'Plugar um testador de tomadas e desligar os disjuntores um por vez até apagar', correct: true }, { text: 'Medir a tensão na tomada — cada disjuntor fornece uma tensão diferente', correct: false }, { text: 'Verificar a bitola do cabo — circuitos diferentes usam bitolas diferentes', correct: false }], explanation: 'O método correto é: plugue um testador na tomada e desligue os disjuntores um a um. Quando o indicador apagar, você encontrou o disjuntor responsável por aquele circuito.' }
        ]
      }
    };
