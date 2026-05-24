var _M3 =     {
      id: 3,
      icon: '🔌',
      title: 'Instalações Residenciais — Teoria',
      description: 'Circuitos, dimensionamento, tomadas, interruptores e NBR 5410 na prática.',
      lessons: [
        {
          id: 1,
          title: 'Circuitos de iluminação vs. tomadas',
          duration: '~10 min',
          content: `
<p class="lesson-intro">Uma das primeiras decisões na instalação residencial é separar os circuitos corretamente. A NBR 5410 exige que iluminação e tomadas estejam em circuitos independentes — e por boas razões.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">💡 Por que separar circuitos?</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🔦</span><div><strong>Segurança durante manutenção</strong><p>Se o disjuntor de tomadas disparar, as luzes continuam funcionando. Você não fica no escuro durante a manutenção.</p></div></div>
<div class="key-point"><span class="key-point__icon">⚡</span><div><strong>Proteção adequada por tipo de carga</strong><p>Iluminação usa 1,5 mm² com disjuntor 10A. Tomadas usam 2,5 mm² com disjuntor 20A. Circuitos diferentes, proteções diferentes.</p></div></div>
<div class="key-point"><span class="key-point__icon">🏠</span><div><strong>Exigência da NBR 5410</strong><p>A norma limita: máximo 1000 W por circuito de iluminação e máximo 1500 W por circuito de tomadas gerais.</p></div></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📊 Regras de Dimensionamento de Circuitos</h2>
<table><thead><tr><th>Tipo</th><th>Cabo</th><th>Disjuntor</th><th>Carga máx./circuito</th></tr></thead><tbody>
<tr><td>Iluminação</td><td>1,5 mm²</td><td>10A</td><td>1000 W</td></tr>
<tr><td>Tomadas gerais (TUG)</td><td>2,5 mm²</td><td>20A</td><td>1500 W</td></tr>
<tr><td>Tomadas uso específico</td><td>Conforme carga</td><td>Conforme carga</td><td>Uma tomada/circuito</td></tr>
</tbody></table>
</div>
<div class="alert alert-success"><strong>✅ Tomadas de Uso Específico (TUE):</strong> Chuveiro, ar-condicionado, forno e outros equipamentos de alta potência devem ter cada um seu próprio circuito exclusivo — cabo e disjuntor dimensionados para a carga específica.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Iluminação e tomadas em circuitos separados — obrigatório</li><li>Iluminação: máximo 1000 W por circuito</li><li>Tomadas gerais: máximo 1500 W por circuito</li><li>Equipamentos de alta potência: circuito exclusivo (TUE)</li><li>Separação facilita manutenção e protege adequadamente</li></ul></div>`
        },
        {
          id: 2,
          title: 'Dimensionamento: carga, bitola e disjuntor',
          duration: '~12 min',
          content: `
<p class="lesson-intro">Dimensionar corretamente significa escolher a combinação certa de cabo e disjuntor para cada circuito. Erro aqui causa superaquecimento dos cabos, disparos constantes do disjuntor e risco de incêndio.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🔢 A Lógica do Dimensionamento</h2>
<p>O princípio básico é: <strong>o disjuntor deve proteger o cabo</strong>. A corrente máxima que o disjuntor deixa passar deve ser menor ou igual à corrente máxima que o cabo suporta.</p>
<div class="multimedida">
<h3>Capacidade de condução — cabos de cobre em eletroduto</h3>
<div class="multimedida-row"><span>1,5 mm²</span><span>até 15,5 A → disjuntor 10A</span></div>
<div class="multimedida-row"><span>2,5 mm²</span><span>até 21 A → disjuntor 16A ou 20A</span></div>
<div class="multimedida-row"><span>4,0 mm²</span><span>até 28 A → disjuntor 25A</span></div>
<div class="multimedida-row"><span>6,0 mm²</span><span>até 36 A → disjuntor 32A ou 40A</span></div>
<div class="multimedida-row"><span>10 mm²</span><span>até 50 A → disjuntor 50A</span></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📐 Calculando a Carga de um Circuito</h2>
<p>Fórmula básica: <strong>Corrente (A) = Potência (W) ÷ Tensão (V)</strong></p>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🚿</span><div><strong>Chuveiro 5500 W em 220V</strong><p>I = 5500 ÷ 220 = 25 A → cabo 6 mm² + disjuntor 32A (ou 40A para folga)</p></div></div>
<div class="key-point"><span class="key-point__icon">❄️</span><div><strong>Ar-condicionado 9000 BTU em 220V</strong><p>~900 W → I = 900 ÷ 220 ≈ 4,1 A → cabo 2,5 mm² + disjuntor 20A</p></div></div>
<div class="key-point"><span class="key-point__icon">🍳</span><div><strong>Forno elétrico 2000 W em 127V</strong><p>I = 2000 ÷ 127 ≈ 15,7 A → cabo 2,5 mm² + disjuntor 20A</p></div></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚡ Nunca:</strong> Colocar um disjuntor maior para "parar de disparar". Se o disjuntor dispara com frequência, o circuito está sobrecarregado. A solução é redistribuir cargas ou aumentar o cabo — nunca apenas o disjuntor.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Corrente (A) = Potência (W) ÷ Tensão (V)</li><li>Disjuntor deve proteger o cabo — nunca ultrapassar sua capacidade</li><li>Cabo subdimensionado aquece e causa incêndio</li><li>Disjuntor disparando = circuito sobrecarregado (não troque por um maior)</li><li>Sempre use cabo de cobre — alumínio é proibido em instalações novas</li></ul></div>`
        },
        {
          id: 3,
          title: 'Tomadas — alturas, padrões e NBR 14136',
          duration: '~8 min',
          content: `
<p class="lesson-intro">Tomadas parecem simples, mas a NBR 5410 define regras precisas de altura, padrão e tipo que garantem segurança e conforto para quem vai usar a instalação.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📏 Alturas Padrão — NBR 5410</h2>
<table><thead><tr><th>Componente</th><th>Altura do piso</th><th>Observação</th></tr></thead><tbody>
<tr><td>Tomadas (adultos)</td><td>1,10 m</td><td>Padrão residencial</td></tr>
<tr><td>Tomadas (bancada/cozinha)</td><td>1,40 m</td><td>Acima da bancada</td></tr>
<tr><td>Tomadas (áreas molhadas)</td><td>1,50 m (mínimo)</td><td>Com proteção IPX4 ou superior</td></tr>
<tr><td>Interruptores</td><td>1,00 m</td><td>Padrão residencial</td></tr>
<tr><td>Quadro de distribuição</td><td>1,50 m (centro)</td><td>Parte superior máx. 2,0 m</td></tr>
</tbody></table>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">⚡ Padrão de Tomadas — NBR 14136</h2>
<p>O Brasil usa o padrão <strong>NBR 14136</strong> com pinos cilíndricos redondos, obrigatório desde 2011:</p>
<ul class="lesson-list">
<li><strong>2P+T de 10A</strong> — tomadas gerais (carregadores, televisores, eletrodomésticos pequenos)</li>
<li><strong>2P+T de 20A</strong> — equipamentos maiores (geladeira, máquina de lavar, microondas)</li>
<li>Todas as tomadas <em>novas</em> devem ter o pino central de terra (T)</li>
<li>O padrão antigo (pinos achatados) não pode ser instalado em obras novas</li>
</ul>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔌 Como se Conecta uma Tomada 2P+T</h2>
<p>Dentro de toda tomada 2P+T existem três bornes. Nunca inverta as conexões:</p>
<div class="wiring-diagram">
<div class="wire-row"><div class="wire-dot" style="background:#22c55e"></div><div class="wire-name">Terra (PE)</div><div class="wire-desc">Cabo verde/amarelo → pino central (T)</div></div>
<div class="wire-row"><div class="wire-dot" style="background:#60a5fa"></div><div class="wire-name">Neutro (N)</div><div class="wire-desc">Cabo azul claro → pino superior esquerdo</div></div>
<div class="wire-row"><div class="wire-dot" style="background:#f87171"></div><div class="wire-name">Fase (L)</div><div class="wire-desc">Cabo preto/vermelho → pino superior direito</div></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚡ Atenção:</strong> Tomada sem o fio terra não protege contra choque em equipamentos com carcarsa metálica (geladeira, máquina de lavar). O terra é obrigatório — não é opcional.</div>
<div class="alert alert-info"><strong>💡 Tomadas em banheiros:</strong> Devem ser instaladas a no mínimo 60 cm do chuveiro, com DR obrigatório no circuito. Nunca instale tomada dentro do box.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Tomadas padrão: 1,10 m do piso acabado</li><li>Padrão NBR 14136 — pinos redondos — obrigatório em obras novas</li><li>Toda tomada nova: 2P+T com fio terra conectado</li><li>10A para uso geral; 20A para equipamentos maiores</li><li>Banheiro: DR obrigatório, tomada a ≥ 60 cm do chuveiro</li></ul></div>`
        },
        {
          id: 4,
          title: 'Interruptores — simples, paralelo e intermediário',
          duration: '~9 min',
          content: `
<p class="lesson-intro">Escolher e instalar o tipo certo de interruptor é parte essencial do projeto elétrico. Um interruptor errado não quebra nada, mas cria incômodo permanente para quem usa o espaço.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">💡 Tipos de Interruptores</h2>
<div class="concept-grid">
<div class="concept-card panel"><span class="concept-card__icon">🔵</span><h3>Simples (1 via)</h3><p>Liga e desliga de um único ponto. Usado na maioria dos quartos, salas e banheiros.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🔄</span><h3>Paralelo (3 vias)</h3><p>Liga e desliga do mesmo ponto de luz a partir de dois locais. Indispensável em corredores, escadas e entradas duplas.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🔀</span><h3>Intermediário (4 vias)</h3><p>Complementa o paralelo para adicionar um terceiro (ou mais) ponto de controle. Sempre instalado entre dois interruptores paralelos.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🌙</span><h3>Dimmer</h3><p>Regula a intensidade da luz. Use somente com lâmpadas compatíveis (LED regulável). Nunca com fluorescentes comuns.</p></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📍 Quando Usar Cada Tipo</h2>
<table><thead><tr><th>Situação</th><th>Solução</th></tr></thead><tbody>
<tr><td>Quarto com uma entrada</td><td>1 interruptor simples</td></tr>
<tr><td>Corredor com duas saídas</td><td>2 interruptores paralelos (3 vias)</td></tr>
<tr><td>Escada com 3 andares</td><td>2 paralelos (extremos) + 1 intermediário (meio)</td></tr>
<tr><td>Sala com entrada e corredor</td><td>2 interruptores paralelos</td></tr>
<tr><td>Ambiente com luz regulável</td><td>1 dimmer compatível</td></tr>
</tbody></table>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔧 Ligação do Interruptor Simples</h2>
<p>O interruptor <strong>sempre interrompe a fase</strong>, nunca o neutro. O neutro vai direto para a luminária:</p>
<div class="wiring-diagram">
<div class="wire-row"><div class="wire-dot" style="background:#f87171"></div><div class="wire-name">Fase → Interruptor → Luminária</div><div class="wire-desc">Cabo de fase passa pelo interruptor antes da luminária</div></div>
<div class="wire-row"><div class="wire-dot" style="background:#60a5fa"></div><div class="wire-name">Neutro → direto para Luminária</div><div class="wire-desc">Não passa pelo interruptor</div></div>
<div class="wire-row"><div class="wire-dot" style="background:#22c55e"></div><div class="wire-name">Terra → carcarsa da Luminária</div><div class="wire-desc">Se a luminária tiver borne de terra</div></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚡ Erro grave:</strong> Instalar o interruptor no neutro. A luminária parece desligada, mas a fase continua presente no porta-lâmpada. Quem trocar a lâmpada pode levar um choque. <strong>Interruptor SEMPRE na fase.</strong></div>
<div class="alert alert-info"><strong>💡 Interruptor paralelo:</strong> Cada paralelo (3 vias) tem 3 bornes — 1 comum e 2 travessões. Os dois travessões se cruzam entre os dois interruptores. O circuito fecha quando os dois interruptores apontam para o mesmo travessão.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Simples: um ponto de controle. Paralelo: dois pontos. Intermediário: três ou mais</li><li>Interruptor sempre interrompe a FASE — nunca o neutro</li><li>Corredor/escada: paralelo nos dois extremos</li><li>Dimmer só com lâmpadas compatíveis — nunca fluorescente comum</li><li>Intermediário sempre entre dois paralelos, nunca isolado</li></ul></div>`
        },
        {
          id: 5,
          title: 'NBR 5410 na prática residencial',
          duration: '~12 min',
          content: `
<p class="lesson-intro">A NBR 5410 é a norma brasileira para instalações elétricas de baixa tensão. Conhecer seus pontos principais não é diferencial — é obrigação de qualquer eletricista predial.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📋 Exigências Fundamentais para Residências</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🔵</span><div><strong>Circuitos separados por função</strong><p>Iluminação, tomadas gerais (TUG) e tomadas de uso específico (TUE) devem ser circuitos independentes.</p></div></div>
<div class="key-point"><span class="key-point__icon">🌿</span><div><strong>Condutor terra (PE) em toda a instalação</strong><p>Todas as tomadas e quadros devem ter o terra conectado ao eletrodo de aterramento. Nunca omita.</p></div></div>
<div class="key-point"><span class="key-point__icon">🛡️</span><div><strong>DR obrigatório em áreas úmidas</strong><p>Banheiros, áreas externas, garagem, piscina e sauna exigem proteção DR (diferencial residual).</p></div></div>
<div class="key-point"><span class="key-point__icon">📦</span><div><strong>Eletrodutos e caixas</strong><p>Toda fiação em eletroduto. Emendas somente dentro de caixas de passagem — nunca dentro do eletroduto.</p></div></div>
<div class="key-point"><span class="key-point__icon">🔒</span><div><strong>Quadro acessível mas protegido</strong><p>O QDC deve ser acessível para manutenção, fora do alcance de crianças e protegido contra umidade.</p></div></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🌩️ DPS — Dispositivo de Proteção contra Surtos</h2>
<p>O DPS protege os equipamentos elétricos contra <strong>surtos de tensão</strong> causados por raios, chaveamentos da rede ou descargas atmosféricas próximas:</p>
<ul class="lesson-list">
<li><strong>Tipo 2</strong> (Classe II) — o mais comum em residências, instalado no QDC entre fase e terra</li>
<li>Tem vida útil — após absorver surtos intensos, pode precisar de substituição</li>
<li>A NBR 5410 recomenda DPS em instalações com ramal aéreo de alimentação</li>
<li>Custo baixo (R$ 50–150) comparado ao prejuízo de queimar eletrodomésticos</li>
<li>Em regiões com muitas tempestades (Centro-Oeste, Norte), é indispensável</li>
</ul>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">⚡ Aterramento — O Que Está Enterrado no Chão</h2>
<p>O sistema de aterramento é composto pelo eletrodo (haste de cobre) conectado ao barramento de terra do QDC:</p>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🪠</span><div><strong>Haste de aterramento</strong><p>Haste de aço cobreado, mínimo 2,40 m de comprimento, cravada verticalmente no solo. Em solos de alta resistividade, podem ser necessárias mais de uma haste em paralelo.</p></div></div>
<div class="key-point"><span class="key-point__icon">📏</span><div><strong>Resistência de aterramento</strong><p>Deve ser medida com terrômetro e registrada. O valor exigido para residências é <strong>≤ 100 Ω</strong>. Valores maiores exigem hastes adicionais ou tratamento do solo.</p></div></div>
<div class="key-point"><span class="key-point__icon">🔗</span><div><strong>Cabo de aterramento</strong><p>Liga a haste ao barramento de terra do QDC. Bitola mínima: 16 mm² de cobre (nu ou com isolamento verde-amarelo).</p></div></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📁 Prontuário da Instalação</h2>
<p>A NR-10 (item 10.2.4) exige que toda instalação elétrica tenha um <strong>prontuário</strong> acessível aos trabalhadores. Para residências, isso significa documentar:</p>
<ul class="lesson-list">
<li>Diagrama unifilar atualizado dos circuitos</li>
<li>Especificações dos condutores e proteções (bitola, disjuntores, DR, DPS)</li>
<li>Localização dos eletrodutos (planta baixa ou croqui)</li>
<li>Resultado da medição de aterramento (resistência em Ω)</li>
<li>Data da última inspeção e nome do responsável técnico</li>
</ul>
<div class="alert alert-warning"><strong>⚠️ Obrigação legal:</strong> A ausência de prontuário em instalações inspecionadas pelo MTE pode resultar em autuação. Mesmo em residências, o prontuário protege o eletricista em caso de acidentes futuros — documenta que a instalação foi feita corretamente.</div>
</div>
<div class="alert alert-danger"><strong>⚡ Proibido pela NBR 5410:</strong> Emendas fora de caixas de passagem. Emendas enterradas na parede ou dentro de eletrodutos são irregulares — aquecem, oxidam e causam falhas graves.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Circuitos separados: iluminação, TUG e TUE — obrigatório</li><li>DR obrigatório em banheiros, área externa e garagem</li><li>DPS tipo 2 no QDC protege equipamentos contra raios</li><li>Haste de aterramento: mínimo 2,40 m, resistência ≤ 100 Ω</li><li>Prontuário da instalação: exigido pela NR-10</li></ul></div>`
        }
      ],
      quiz: {
        questions: [
          { text: 'Qual é a altura padrão de tomadas em residências?', options: [{ text: '0,30 m', correct: false }, { text: '1,10 m', correct: true }, { text: '1,50 m', correct: false }, { text: '2,00 m', correct: false }], explanation: 'A NBR 5410 estabelece 1,10 m do piso acabado como altura padrão para tomadas residenciais, facilitando o uso e reduzindo riscos para crianças.' },
          { text: 'Um chuveiro elétrico de 5500 W em 220V requer qual bitola mínima de cabo?', options: [{ text: '2,5 mm²', correct: false }, { text: '4,0 mm²', correct: false }, { text: '6,0 mm²', correct: true }, { text: '10 mm²', correct: false }], explanation: 'I = 5500W ÷ 220V = 25A. A bitola 6,0 mm² suporta até 36A, sendo a mínima adequada para esse circuito.' },
          { text: 'Onde é obrigatório instalar DR em residências?', options: [{ text: 'Apenas no quarto principal', correct: false }, { text: 'Em toda a instalação sem exceção', correct: false }, { text: 'Banheiros, áreas externas, garagem e piscina', correct: true }, { text: 'Apenas na cozinha e banheiro', correct: false }], explanation: 'A NBR 5410 exige DR especificamente em ambientes com risco de umidade e contato com água: banheiros, áreas externas, garagem, piscinas e saunas.' },
          { text: 'Onde as emendas de cabos podem ser feitas?', options: [{ text: 'Dentro do eletroduto, bem enroladas com fita', correct: false }, { text: 'Enterradas na parede com massa corrida por cima', correct: false }, { text: 'Somente dentro de caixas de passagem', correct: true }, { text: 'Em qualquer ponto acessível da instalação', correct: false }], explanation: 'A NBR 5410 proíbe emendas fora de caixas de passagem. Emendas enterradas na parede ou dentro de eletrodutos são irregulares e perigosas.' },
          { text: 'Qual é a carga máxima permitida por circuito de tomadas gerais (TUG)?', options: [{ text: '1000 W', correct: false }, { text: '1500 W', correct: true }, { text: '2000 W', correct: false }, { text: '3000 W', correct: false }], explanation: 'A NBR 5410 limita cada circuito TUG a 1500 W. Acima disso, deve-se criar um novo circuito de tomadas ou um circuito de uso específico (TUE).' },
          { text: 'Se um disjuntor dispara com frequência, qual é a solução correta?', options: [{ text: 'Substituir por um disjuntor de amperagem maior', correct: false }, { text: 'Redistribuir cargas ou aumentar o cabo do circuito', correct: true }, { text: 'Apertar as conexões do disjuntor', correct: false }, { text: 'Usar um estabilizador para reduzir variações de tensão', correct: false }], explanation: 'Disjuntor que dispara frequentemente indica sobrecarga no circuito. Aumentar apenas o disjuntor sem aumentar o cabo deixa o cabo desprotegido e pode causar incêndio.' }
        ]
      }
    };
