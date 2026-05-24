const COURSE_DATA = {
  modules: [
    {
      id: 1,
      icon: '🛡️',
      title: 'Fundamentos de Segurança (NR-10)',
      description: 'Segurança antes de tudo: NR-10, EPIs, sinalização e procedimento LOTO.',
      lessons: [
        {
          id: 1,
          title: 'O que é NR-10 e por que ela existe',
          duration: '~8 min',
          content: `
<p class="lesson-intro">A NR-10 é a principal norma de segurança para quem trabalha com eletricidade no Brasil. Entender o que ela exige é o primeiro passo para trabalhar com segurança e dentro da lei.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📖 O que é a NR-10?</h2>
<p>A <strong>Norma Regulamentadora nº 10</strong> foi criada pelo Ministério do Trabalho e estabelece os requisitos mínimos para garantir a segurança e a saúde dos trabalhadores que interagem com instalações elétricas e serviços com eletricidade.</p>
<ul class="lesson-list"><li>Eletricistas profissionais e ajudantes de obra</li><li>Trabalhadores que operam próximos a instalações elétricas</li><li>Empresas de construção civil e manutenção predial</li><li>Qualquer pessoa que execute serviços em instalações elétricas</li></ul>
</div>
<div class="alert alert-danger"><strong>⚡ PERIGO:</strong> Trabalhar com eletricidade sem treinamento NR-10 é ilegal e extremamente perigoso. A corrente elétrica pode matar com apenas <strong>50 miliamperes</strong> — menos do que usa uma lâmpada LED.</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🎯 Por que a NR-10 existe?</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">1️⃣</span><div><strong>Proteger vidas</strong><p>Procedimentos que reduzem o risco de choque, arco elétrico e incêndio.</p></div></div>
<div class="key-point"><span class="key-point__icon">2️⃣</span><div><strong>Padronizar procedimentos</strong><p>Todo eletricista qualificado NR-10 aprende os mesmos procedimentos seguros.</p></div></div>
<div class="key-point"><span class="key-point__icon">3️⃣</span><div><strong>Responsabilizar empresas</strong><p>Empresas são obrigadas a garantir que seus funcionários sigam a norma.</p></div></div>
</div>
</div>
<div class="alert alert-info"><strong>💡 Saiba mais:</strong> A NR-10 exige treinamento de <strong>40 horas</strong> (módulo básico) para todo eletricista. Este curso cobre os fundamentos desse módulo.</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔑 Conceitos-chave da NR-10</h2>
<div class="concept-grid">
<div class="concept-card panel"><span class="concept-card__icon">⚡</span><h3>Zona de Risco</h3><p>Área ao redor de partes energizadas onde existe risco de contato acidental.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🔒</span><h3>Trabalho Desenergizado</h3><p>Serviço realizado com a instalação sem energia. É o procedimento mais seguro.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">📋</span><h3>Prontuário</h3><p>Documentação obrigatória de todas as instalações elétricas da edificação.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🦺</span><h3>EPI e EPC</h3><p>Equipamentos de Proteção Individual e Coletiva obrigatórios no trabalho.</p></div>
</div>
</div>
<div class="alert alert-success"><strong>✅ Na prática:</strong> Sempre que iniciar um trabalho elétrico, a primeira pergunta é: <em>"Esta instalação está desenergizada e verificada?"</em> Se a resposta não for um "sim" confirmado, pare e siga o procedimento correto.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>A NR-10 é <strong>obrigatória</strong> para todo eletricista no Brasil</li><li>Ela protege trabalhadores que interagem com instalações elétricas</li><li>Trabalho desenergizado é sempre o procedimento mais seguro</li><li>Empresas são responsáveis pelo cumprimento da norma</li><li>O treinamento NR-10 básico exige mínimo de 40 horas</li></ul></div>`
        },
        {
          id: 2,
          title: 'EPIs obrigatórios na obra elétrica',
          duration: '~10 min',
          content: `
<p class="lesson-intro">EPI — Equipamento de Proteção Individual — é o conjunto de dispositivos que protege o trabalhador de riscos que não podem ser eliminados. Na eletricidade, o EPI correto pode ser a diferença entre a vida e a morte.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🦺 EPIs Obrigatórios para Eletricista</h2>
<div class="epi-grid">
<div class="epi-card panel"><span class="epi-card__icon">⛑️</span><div><h3>Capacete Classe B</h3><p>Proteção contra impactos <strong>e tensões até 20.000 V</strong>. Identificado pela cor azul ou marcação "B".</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">🧤</span><div><h3>Luvas Isolantes</h3><p>Borracha isolante com luva de couro sobreposta. A borracha isola; o couro protege a borracha de rasgos.</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">🥾</span><div><h3>Botina Dielétrica</h3><p>Sola isolante, <strong>sem biqueira metálica</strong>. Isola o trabalhador do solo.</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">🥽</span><div><h3>Óculos de Proteção</h3><p>Proteção contra faíscas, arco elétrico e respingos. Lente incolor para ambientes fechados.</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">👕</span><div><h3>Vestimenta</h3><p>Manga longa de algodão ou fibra antichama. Nunca use sintético (pega fogo e derrete na pele).</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">🛡️</span><div><h3>Protetor Facial</h3><p>Obrigatório em trabalhos com risco de arco elétrico. Complementa os óculos.</p></div></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚠️ ATENÇÃO:</strong> Nunca use EPI com prazo de validade vencido, com defeito visível ou rachado. Descarte imediatamente e solicite substituição. Um EPI danificado é pior do que nenhum — dá falsa sensação de segurança.</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🧤 Como Verificar as Luvas Isolantes</h2>
<ol class="steps-list">
<li>Inspecione visualmente a luva inteira procurando cortes, furos ou rachados</li>
<li>Enrole a luva da ponta dos dedos em direção ao punho — pressione o ar para dentro</li>
<li>Se sentir ar saindo, há furo. <strong>Descarte imediatamente</strong></li>
<li>Verifique o prazo de validade gravado na luva (renove a cada 6 meses ou conforme fabricante)</li>
<li>Sempre coloque a luva de couro por cima da borracha antes de usar</li>
</ol>
</div>
<div class="alert alert-warning"><strong>⚠️ Atenção:</strong> As luvas isolantes têm <strong>classes de tensão</strong>. Para instalações residenciais (127V/220V), use no mínimo a Classe 00 (testada em 500V) ou Classe 0 (testada em 1000V).</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Capacete Classe B protege contra choque até 20.000 V</li><li>Luvas isolantes: sempre inspecionar antes de usar (teste do ar)</li><li>Botina dielétrica: sem biqueira metálica, sola isolante</li><li>Roupas de algodão ou antichama — nunca sintético</li><li>EPI com defeito = descarte imediato</li></ul></div>`
        },
        {
          id: 3,
          title: 'Sinalização e isolamento da área de trabalho',
          duration: '~8 min',
          content: `
<p class="lesson-intro">Isolar a área de trabalho é tão importante quanto desligar a energia. Um colega bem-intencionado que "só foi dar uma olhada" pode religar o disjuntor e causar um acidente fatal.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🚧 Por que isolar a área?</h2>
<p>Quando você desliga um circuito no quadro, outras pessoas na obra <strong>não sabem disso</strong>. A sinalização impede que alguém energize acidentalmente enquanto você trabalha.</p>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🔶</span><div><strong>Cones e fitas de segurança</strong><p>Delimite a área com cones e fita zebrada "RISCO ELÉTRICO — ÁREA RESTRITA". Posicione ao redor do ponto de trabalho e do quadro elétrico.</p></div></div>
<div class="key-point"><span class="key-point__icon">🪧</span><div><strong>Placa de aviso no quadro</strong><p>Afixe uma placa no disjuntor desligado: "NÃO LIGUE — TRABALHO EM ANDAMENTO" com seu nome e telefone.</p></div></div>
<div class="key-point"><span class="key-point__icon">📢</span><div><strong>Comunicação verbal</strong><p>Informe o mestre de obras, encarregado e todos os trabalhadores próximos sobre o trabalho e o circuito desligado.</p></div></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚡ PERIGO:</strong> A "regra dos dois metros": mantenha distância mínima de 2 metros de partes energizadas sem os EPIs adequados. Em obra residencial, isso inclui a entrada de energia da rua que nem sempre está desligada.</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📋 Checklist de Sinalização</h2>
<ul class="lesson-list">
<li>Cones posicionados ao redor da área de trabalho</li>
<li>Fita de segurança delimitando o perímetro</li>
<li>Placa "NÃO LIGUE" fixada no disjuntor com nome e telefone</li>
<li>Encarregado da obra informado</li>
<li>Trabalhadores próximos informados verbalmente</li>
<li>Acesso de terceiros bloqueado ao quadro elétrico</li>
</ul>
</div>
<div class="alert alert-success"><strong>✅ Boa prática:</strong> Mesmo em obras pequenas com poucos trabalhadores, sempre sinalize. O hábito de sinalizar correto salva vidas quando você menos espera.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Sinalizar é obrigatório — não é opcional ou apenas "formalidade"</li><li>Use cones, fita zebrada e placa no disjuntor</li><li>Informe verbalmente todos os trabalhadores da área</li><li>Mantenha 2 metros de distância de partes energizadas sem EPI</li><li>Bloqueie o acesso ao quadro durante o trabalho</li></ul></div>`
        },
        {
          id: 4,
          title: 'Procedimento de Desenergização (LOTO)',
          duration: '~12 min',
          content: `
<p class="lesson-intro">LOTO (Lockout/Tagout) é o procedimento oficial de bloqueio e sinalização que garante que ninguém possa energizar uma instalação enquanto você trabalha nela. É a etapa mais crítica da segurança elétrica.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🔒 O que é LOTO?</h2>
<p><strong>Lockout</strong> = bloquear fisicamente o dispositivo de isolamento com um <strong>cadeado</strong>.<br><strong>Tagout</strong> = afixar uma <strong>etiqueta</strong> identificando quem bloqueou, data e contato.</p>
<div class="alert alert-warning"><strong>⚠️ Atenção:</strong> O cadeado do LOTO é <strong>pessoal e intransferível</strong>. Apenas quem colocou o cadeado pode retirá-lo. Nunca peça para um colega retirar seu cadeado.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📋 Sequência Completa de Desenergização</h2>
<div class="loto-steps">
<div class="loto-step"><span class="loto-step-num active">1</span><div class="loto-step-content"><strong>Identificar todos os pontos de alimentação</strong><span>Localize todos os disjuntores e chaves que alimentam o circuito. Em obras, pode haver mais de um ponto.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">2</span><div class="loto-step-content"><strong>Informar todos os envolvidos</strong><span>Comunique o encarregado e os trabalhadores próximos sobre o desligamento.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">3</span><div class="loto-step-content"><strong>Desligar o disjuntor</strong><span>Desligue o disjuntor do circuito a ser trabalhado na posição OFF.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">4</span><div class="loto-step-content"><strong>Aplicar o cadeado (Lockout)</strong><span>Trave o disjuntor com seu cadeado pessoal. Se não houver dispositivo de bloqueio, use um bloqueador de disjuntor.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">5</span><div class="loto-step-content"><strong>Afixar a etiqueta (Tagout)</strong><span>Cole etiqueta com: seu nome, data, hora e telefone. "NÃO LIGUE — João Silva — (11)99999-9999"</span></div></div>
<div class="loto-step"><span class="loto-step-num active">6</span><div class="loto-step-content"><strong>Testar ausência de tensão</strong><span>Use multímetro e teste nos 3 pontos: Fase-Neutro, Fase-Terra, Neutro-Terra. Todos devem marcar 0V.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">7</span><div class="loto-step-content"><strong>Executar o trabalho com segurança</strong><span>Somente após confirmar ausência de tensão, inicie o trabalho.</span></div></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔄 Sequência de Re-energização</h2>
<div class="loto-steps">
<div class="loto-step"><span class="loto-step-num reverse">1</span><div class="loto-step-content"><strong>Verificar se o trabalho está concluído</strong><span>Confirme que todas as ferramentas foram retiradas e a área está segura.</span></div></div>
<div class="loto-step"><span class="loto-step-num reverse">2</span><div class="loto-step-content"><strong>Retirar ferramentas e materiais</strong><span>Remova tudo da área de trabalho antes de religar.</span></div></div>
<div class="loto-step"><span class="loto-step-num reverse">3</span><div class="loto-step-content"><strong>Retirar aterramento temporário</strong><span>Se aplicado, remova o aterramento antes de retirar o cadeado.</span></div></div>
<div class="loto-step"><span class="loto-step-num reverse">4</span><div class="loto-step-content"><strong>Retirar etiqueta e cadeado</strong><span>Somente o responsável que colocou pode retirar.</span></div></div>
<div class="loto-step"><span class="loto-step-num reverse">5</span><div class="loto-step-content"><strong>Informar e religar</strong><span>Avise os envolvidos, retire a sinalização e ligue o disjuntor.</span></div></div>
<div class="loto-step"><span class="loto-step-num reverse">6</span><div class="loto-step-content"><strong>Testar o funcionamento</strong><span>Verifique se a instalação está funcionando corretamente após a re-energização.</span></div></div>
</div>
</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>LOTO = Lockout (cadeado) + Tagout (etiqueta)</li><li>O cadeado é pessoal — apenas quem colocou pode retirar</li><li>Sempre teste ausência de tensão nos 3 pontos após desligar</li><li>Re-energize somente com área limpa e todos informados</li><li>Nunca pule etapas — cada uma existe para salvar vidas</li></ul></div>`
        },
        {
          id: 5,
          title: 'As 5 Regras de Ouro da Segurança Elétrica',
          duration: '~7 min',
          content: `
<p class="lesson-intro">As 5 Regras de Ouro são o padrão internacional de segurança para trabalho em instalações elétricas. São simples, mas seguidas à risca, eliminam quase todos os riscos de acidente.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">⭐ As 5 Regras de Ouro</h2>
<div class="loto-steps">
<div class="loto-step"><span class="loto-step-num active">1</span><div class="loto-step-content"><strong>Desligar</strong><span>Desligue todos os dispositivos de corte que alimentam o local de trabalho.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">2</span><div class="loto-step-content"><strong>Bloquear contra re-ligação</strong><span>Bloqueie os dispositivos de corte com cadeado e etiqueta LOTO.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">3</span><div class="loto-step-content"><strong>Verificar ausência de tensão</strong><span>Teste com instrumento adequado (multímetro) em todos os pontos do circuito.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">4</span><div class="loto-step-content"><strong>Aterrar e curto-circuitar</strong><span>Instale aterramento temporário se necessário, especialmente em instalações de médio/alta tensão.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">5</span><div class="loto-step-content"><strong>Proteger e sinalizar a zona de trabalho</strong><span>Coloque barreiras físicas, cones, fitas e placas de sinalização ao redor da área.</span></div></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚡ PERIGO CRÍTICO:</strong> <strong>Nunca presuma</strong> que uma instalação está desenergizada. Mesmo que você mesmo tenha desligado o disjuntor há 5 minutos, sempre teste com o multímetro antes de tocar qualquer condutor. Capacitores podem guardar carga. Geradores podem estar conectados. Erros humanos acontecem.</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🎯 Por que São "de Ouro"?</h2>
<p>Essas regras foram desenvolvidas após décadas de análise de acidentes elétricos fatais no mundo inteiro. Cada regra existe porque houve uma morte que poderia ter sido evitada se ela fosse seguida.</p>
<div class="alert alert-success"><strong>✅ Compromisso profissional:</strong> Um eletricista profissional nunca pula as 5 Regras de Ouro, independentemente de: pressão de tempo, tamanho do serviço, confiança na instalação, ou quantas vezes já fez o mesmo serviço antes.</div>
</div>
<div class="summary-section"><h2>📌 As 5 Regras de Ouro — Resumo</h2><ul class="summary-list"><li><strong>1.</strong> Desligar todos os pontos de alimentação</li><li><strong>2.</strong> Bloquear contra re-ligação (LOTO)</li><li><strong>3.</strong> Verificar ausência de tensão (3 pontos)</li><li><strong>4.</strong> Aterrar e curto-circuitar se necessário</li><li><strong>5.</strong> Proteger e sinalizar a área</li></ul></div>`
        }
      ],
      quiz: {
        questions: [
          { text: 'O que é a NR-10?', options: [{ text: 'Norma Regulamentadora nº 10 — Segurança em Instalações Elétricas', correct: true }, { text: 'Norma de Resistência Elétrica nº 10', correct: false }, { text: 'Nível de Risco Elétrico categoria 10', correct: false }, { text: 'Norma de Regulação de Equipamentos nº 10', correct: false }], explanation: 'A NR-10 é a Norma Regulamentadora nº 10 do Ministério do Trabalho, que estabelece requisitos mínimos para segurança em instalações elétricas.' },
          { text: 'Qual capacete é adequado para trabalhos elétricos?', options: [{ text: 'Capacete Classe A (branco)', correct: false }, { text: 'Capacete Classe B (azul — proteção até 20.000 V)', correct: true }, { text: 'Qualquer capacete com aba frontal', correct: false }, { text: 'Capacete de obra padrão sem classificação', correct: false }], explanation: 'O Capacete Classe B é testado para suportar tensões de até 20.000 V, sendo obrigatório em trabalhos elétricos.' },
          { text: 'O que significa LOTO?', options: [{ text: 'Ligar, Operar, Testar e Orientar', correct: false }, { text: 'Lockout/Tagout — bloqueio e sinalização', correct: true }, { text: 'Laudo Operacional Técnico de Obra', correct: false }, { text: 'Lista de Operações Técnicas Obrigatórias', correct: false }], explanation: 'LOTO vem do inglês Lockout (bloquear com cadeado) e Tagout (sinalizar com etiqueta), impedindo re-energização acidental.' },
          { text: 'Qual é a corrente elétrica mínima que pode causar morte?', options: [{ text: 'Acima de 10 amperes', correct: false }, { text: 'Acima de 1 ampere', correct: false }, { text: 'Acima de 50 miliamperes', correct: true }, { text: 'Apenas em alta tensão (acima de 1000V)', correct: false }], explanation: 'Correntes acima de 50 miliamperes (0,05 A) podem causar fibrilação ventricular e morte. Isso é muito menos do que consome uma lâmpada LED.' },
          { text: 'Quem pode retirar o cadeado LOTO de um disjuntor?', options: [{ text: 'O encarregado de obra, em qualquer situação', correct: false }, { text: 'Qualquer eletricista presente no local', correct: false }, { text: 'Apenas o trabalhador que colocou o cadeado', correct: true }, { text: 'O eletricista mais experiente da equipe', correct: false }], explanation: 'O cadeado LOTO é pessoal e intransferível. Apenas quem o colocou pode retirá-lo, garantindo que ninguém trabalhe sem sua própria proteção.' },
          { text: 'Qual é a sequência correta das 5 Regras de Ouro?', options: [{ text: 'Testar → Desligar → Bloquear → Sinalizar → Aterrar', correct: false }, { text: 'Desligar → Bloquear → Verificar tensão → Aterrar → Sinalizar', correct: true }, { text: 'Sinalizar → Bloquear → Desligar → Aterrar → Testar', correct: false }, { text: 'Bloquear → Desligar → Testar → Aterrar → Sinalizar', correct: false }], explanation: 'A sequência correta é: 1-Desligar, 2-Bloquear contra re-ligação, 3-Verificar ausência de tensão, 4-Aterrar/curto-circuitar, 5-Proteger e sinalizar a área.' }
        ]
      }
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Ferramentas e Materiais',
      description: 'Ferramentas isoladas, multímetro, cabos e componentes do quadro elétrico.',
      lessons: [
        {
          id: 1,
          title: 'Ferramentas isoladas e sua manutenção',
          duration: '~9 min',
          content: `
<p class="lesson-intro">Ferramentas isoladas são a sua primeira linha de defesa contra choque elétrico acidental. Saber escolher, inspecionar e conservar essas ferramentas é essencial para qualquer eletricista.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🔧 O que são ferramentas isoladas?</h2>
<p>São ferramentas com cabo revestido de material isolante (borracha ou polímero) testado e certificado para trabalho em instalações elétricas. Elas devem ter a marcação <strong>1000V</strong> ou o símbolo de dupla lâmpada (norma IEC 60900).</p>
<div class="alert alert-warning"><strong>⚠️ Atenção:</strong> A marcação "1000V" não significa que você pode trabalhar com a instalação energizada sem outros cuidados. Ela indica que a ferramenta foi testada para uso em instalações de até 1000V CA. Sempre siga o procedimento LOTO.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔍 Inspeção Antes de Usar</h2>
<ol class="steps-list">
<li>Verifique visualmente todo o cabo isolante — procure cortes, rachaduras ou exposição do metal</li>
<li>Verifique as junções entre o cabo e o metal da ferramenta</li>
<li>Tente dobrar o cabo suavemente — material ressecado racha sob pressão</li>
<li>Verifique se a ferramenta caiu ou sofreu impacto — o isolamento pode ter rachado por dentro sem aparecer</li>
<li>Confirme a marcação 1000V e a validade da certificação (se houver data)</li>
</ol>
</div>
<div class="alert alert-danger"><strong>⚡ Descarte imediato:</strong> Se encontrar qualquer defeito — corte, rachadura, cola solta, metal exposto no cabo — a ferramenta vai para o lixo ou para o almoxarifado marcada como "INUTILIZADA". Nunca use ferramenta isolante danificada, nem que "seja rapidinho".</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🛠️ Conservação Correta</h2>
<ul class="lesson-list">
<li>Limpe com pano seco — nunca use solventes no cabo isolante</li>
<li>Guarde em local seco, longe de calor e solventes</li>
<li>Não coloque ferramentas pesadas sobre os cabos isolantes</li>
<li>Guarde separadas das ferramentas comuns para evitar confusão</li>
<li>Nunca pinte ou cubra a marcação 1000V</li>
</ul>
</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Procure a marcação "1000V" em todas as ferramentas elétricas</li><li>Inspecione cada ferramenta antes de usar</li><li>Qualquer defeito = descarte imediato</li><li>Nunca use solventes no cabo isolante</li><li>Ferramenta que caiu deve ser reinspecionada</li></ul></div>`
        },
        {
          id: 2,
          title: 'Multímetro: verificação de ausência de tensão',
          duration: '~12 min',
          content: `
<p class="lesson-intro">O multímetro é o instrumento mais importante do eletricista. Saber usá-lo corretamente — especialmente para verificar a ausência de tensão — é o que separa o trabalho seguro do trabalho arriscado.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">⚙️ Partes do Multímetro</h2>
<div class="multimedida">
<h3>Identificação rápida</h3>
<div class="multimedida-row"><span>Display</span><span>Mostra a leitura atual</span></div>
<div class="multimedida-row"><span>Seletor rotativo</span><span>Seleciona a função e a escala</span></div>
<div class="multimedida-row"><span>Ponta preta (COM)</span><span>Conecta ao terra/neutro (referência)</span></div>
<div class="multimedida-row"><span>Ponta vermelha (V/Ω)</span><span>Conecta ao ponto de medição</span></div>
<div class="multimedida-row"><span>ACV / VAC</span><span>Tensão alternada (instalações)</span></div>
<div class="multimedida-row"><span>DCV / VDC</span><span>Tensão contínua (baterias, eletrônica)</span></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📏 Teste de Ausência de Tensão — Passo a Passo</h2>
<ol class="steps-list">
<li><strong>Selecione ACV</strong> na escala adequada: 200V ou 600V (acima da tensão esperada)</li>
<li><strong>Teste o multímetro primeiro</strong>: meça em uma tomada energizada conhecida para confirmar que o instrumento está funcionando</li>
<li>Vá até o ponto de trabalho</li>
<li><strong>Meça Fase → Neutro</strong>: ponta vermelha na fase, preta no neutro</li>
<li><strong>Meça Fase → Terra</strong>: ponta vermelha na fase, preta no terra</li>
<li><strong>Meça Neutro → Terra</strong>: ponta vermelha no neutro, preta no terra</li>
<li>Somente se <strong>todos os três marcaram 0V</strong>, o circuito está sem tensão</li>
</ol>
</div>
<div class="alert alert-danger"><strong>⚡ CRÍTICO:</strong> Uma leitura de 0V em apenas um ponto <strong>NÃO garante segurança</strong>. Sempre teste nos 3 pares de pontos. Neutro com tensão pode existir por falha de aterramento. Fio de terra com tensão pode existir por ligação incorreta.</div>
<div class="alert alert-warning"><strong>⚠️ Erro comum:</strong> Deixar o seletor na posição DCV (corrente contínua) ao medir CA (corrente alternada). O display marcará zero mesmo com tensão presente. Sempre confirme que está em ACV antes de medir.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Selecionar ACV — nunca DCV para medir instalações</li><li>Testar o multímetro em fonte conhecida antes de confiar nele</li><li>Medir nos 3 pares: Fase-Neutro, Fase-Terra, Neutro-Terra</li><li>Todos devem marcar 0V para declarar seguro</li><li>Ponta preta = referência (COM); vermelha = ponto de medição</li></ul></div>`
        },
        {
          id: 3,
          title: 'Cabos e condutores: bitolas, cores e NBR 5410',
          duration: '~10 min',
          content: `
<p class="lesson-intro">Escolher o cabo errado é um dos erros mais comuns em instalações residenciais — e um dos mais perigosos. A NBR 5410 define as cores, bitolas e tipos de condutores para cada aplicação.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🎨 Código de Cores — NBR 5410</h2>
<div class="multimedida">
<h3>Identificação obrigatória</h3>
<div class="multimedida-row"><span>🟢 Verde / Verde-amarelo</span><span>Terra (PE) — proteção</span></div>
<div class="multimedida-row"><span>🔵 Azul claro</span><span>Neutro (N)</span></div>
<div class="multimedida-row"><span>⚫ Preto / 🔴 Vermelho / ⚪ Branco</span><span>Fase (L)</span></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚡ NUNCA inverta cores:</strong> Usar verde-amarelo como fase ou azul como terra é erro grave. Em uma manutenção futura, o próximo eletricista pode se acidentar acreditando nas cores padrão.</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📏 Bitolas Mínimas — NBR 5410</h2>
<table><thead><tr><th>Circuito</th><th>Bitola Mínima</th><th>Disjuntor Típico</th></tr></thead><tbody>
<tr><td>Iluminação</td><td>1,5 mm²</td><td>10A</td></tr>
<tr><td>Tomadas gerais (TUG)</td><td>2,5 mm²</td><td>20A</td></tr>
<tr><td>Chuveiro elétrico</td><td>6,0 mm²</td><td>40A</td></tr>
<tr><td>Ar-condicionado 9.000 BTU</td><td>2,5 mm²</td><td>20A</td></tr>
<tr><td>Ar-condicionado 18.000+ BTU</td><td>4,0 mm²</td><td>25-30A</td></tr>
<tr><td>Forno/Cooktop elétrico</td><td>6,0 mm²</td><td>40A</td></tr>
</tbody></table>
</div>
<div class="alert alert-success"><strong>✅ Regra prática:</strong> Nunca use cabo menor que o especificado. Em caso de dúvida, use um ponto acima. Cabo superdimensionado não causa problema; cabo subdimensionado aquece, degrada o isolamento e pode causar incêndio.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Verde/verde-amarelo = terra. Azul = neutro. Nunca inverta</li><li>Iluminação: mínimo 1,5 mm². Tomadas: mínimo 2,5 mm²</li><li>Chuveiro e cargas pesadas: mínimo 6,0 mm²</li><li>Em dúvida, use a bitola maior</li><li>Cabo subdimensionado aquece e causa incêndio</li></ul></div>`
        },
        {
          id: 4,
          title: 'Componentes do quadro de distribuição (QDC)',
          duration: '~10 min',
          content: `
<p class="lesson-intro">O quadro de distribuição é o coração da instalação elétrica. Entender cada componente, sua função e como identificá-los é fundamental para qualquer serviço residencial.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📦 Componentes Principais</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">⚡</span><div><strong>Disjuntor Termomagnético</strong><p>Protege os cabos contra sobrecarga e curto-circuito. O termomagnético desliga por aquecimento (sobrecarga) ou por campo magnético (curto). Não protege contra choque elétrico.</p></div></div>
<div class="key-point"><span class="key-point__icon">🛡️</span><div><strong>DR — Dispositivo Residual</strong><p>Protege pessoas contra choque elétrico por corrente de fuga. Detecta diferença entre a corrente que vai e a que volta. Obrigatório pela NBR 5410 nos banheiros, área externa e garagem.</p></div></div>
<div class="key-point"><span class="key-point__icon">🌩️</span><div><strong>DPS — Dispositivo de Proteção contra Surtos</strong><p>Protege equipamentos contra raios e surtos de tensão da rede. Recomendado em todas as instalações residenciais.</p></div></div>
<div class="key-point"><span class="key-point__icon">🔌</span><div><strong>Barramento</strong><p>Barra condutora onde os disjuntores se conectam. Existem barramentos de fase, neutro e terra.</p></div></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🧪 Testando o DR</h2>
<p>Todo DR tem um botão de teste chamado <strong>"T" ou "Teste"</strong>. Pressione-o mensalmente para verificar o funcionamento:</p>
<ol class="steps-list">
<li>Com o DR ligado (posição ON), pressione o botão "T"</li>
<li>O DR deve desligar imediatamente</li>
<li>Se não desligar, o DR está defeituoso — substitua-o</li>
<li>Após o teste, ligue o DR novamente</li>
</ol>
<div class="alert alert-warning"><strong>⚠️ Atenção:</strong> DR que não viaja no teste não protege. Um DR defeituoso dá falsa sensação de segurança. Substitua imediatamente.</div>
</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Disjuntor protege cabos — DR protege pessoas</li><li>DR é obrigatório em banheiros, área externa e garagem</li><li>Teste o DR mensalmente com o botão "T"</li><li>DPS protege contra raios e surtos da rede</li><li>Nunca substitua disjuntor por fusível</li></ul></div>`
        }
      ],
      quiz: {
        questions: [
          { text: 'O que significa a marcação "1000V" em uma chave de fenda?', options: [{ text: 'A ferramenta foi testada para uso em instalações até 1000V', correct: true }, { text: 'A ferramenta suporta 1000 graus de temperatura', correct: false }, { text: 'O torque máximo da ferramenta é de 1000 Nm', correct: false }, { text: 'A ferramenta foi fabricada no ano 1000 da norma', correct: false }], explanation: 'A marcação "1000V" (norma IEC 60900) indica que a ferramenta foi testada e certificada para uso seguro em instalações elétricas de até 1000V CA.' },
          { text: 'Qual cor identifica o condutor de proteção (terra) segundo a NBR 5410?', options: [{ text: 'Azul claro', correct: false }, { text: 'Vermelho', correct: false }, { text: 'Verde ou verde-amarelo', correct: true }, { text: 'Branco', correct: false }], explanation: 'A NBR 5410 determina verde ou verde-amarelo para o condutor de proteção (PE/terra). Azul claro é exclusivo do neutro.' },
          { text: 'Qual é a bitola mínima de cabo para circuito de tomadas gerais (TUG)?', options: [{ text: '1,5 mm²', correct: false }, { text: '2,5 mm²', correct: true }, { text: '4,0 mm²', correct: false }, { text: '6,0 mm²', correct: false }], explanation: 'A NBR 5410 exige mínimo de 2,5 mm² para tomadas de uso geral. Para iluminação, o mínimo é 1,5 mm².' },
          { text: 'Qual componente do quadro protege as pessoas contra choque elétrico por corrente de fuga?', options: [{ text: 'Disjuntor termomagnético', correct: false }, { text: 'DPS (Dispositivo de Proteção contra Surtos)', correct: false }, { text: 'DR (Dispositivo Diferencial Residual)', correct: true }, { text: 'Barramento de neutro', correct: false }], explanation: 'O DR detecta diferença entre a corrente que entra e a que sai do circuito (corrente de fuga). O disjuntor protege os cabos; o DR protege as pessoas.' },
          { text: 'Como verificar se as luvas isolantes estão íntegras?', options: [{ text: 'Verificar visualmente apenas a parte externa', correct: false }, { text: 'Enrolar da ponta dos dedos ao punho pressionando o ar para dentro — verificar se há vazamento', correct: true }, { text: 'Mergulhar em água e verificar bolhas', correct: false }, { text: 'Usar apenas se compradas há menos de 1 ano', correct: false }], explanation: 'O teste de inflação (enrolar e pressionar o ar para dentro) detecta furos invisíveis a olho nu. Se sentir ar saindo, a luva está furada e deve ser descartada.' },
          { text: 'Ao medir ausência de tensão, quantos pares de pontos devem ser testados?', options: [{ text: 'Apenas 1 par (Fase-Neutro)', correct: false }, { text: '2 pares (Fase-Neutro e Fase-Terra)', correct: false }, { text: '3 pares (Fase-Neutro, Fase-Terra e Neutro-Terra)', correct: true }, { text: 'Apenas verificar se o display marca zero em qualquer ponto', correct: false }], explanation: 'Os 3 pares garantem que não há tensão em nenhuma combinação. Neutro pode estar com tensão por falha no sistema. Medir só um par não garante segurança.' }
        ]
      }
    },
    {
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
          title: 'Tomadas, interruptores e pontos de luz',
          duration: '~9 min',
          content: `
<p class="lesson-intro">A instalação de tomadas e interruptores parece simples, mas há regras importantes de posicionamento, altura e tipo que a NBR 5410 estabelece para garantir segurança e conforto.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🔌 Alturas Padrão — NBR 5410</h2>
<table><thead><tr><th>Componente</th><th>Altura do piso</th><th>Observação</th></tr></thead><tbody>
<tr><td>Tomadas (adultos)</td><td>1,10 m</td><td>Padrão residencial</td></tr>
<tr><td>Tomadas (cocção/bancada)</td><td>1,40 m</td><td>Acima da bancada da cozinha</td></tr>
<tr><td>Tomadas (crianças)</td><td>Protegidas</td><td>Com proteção contra inserção de objetos</td></tr>
<tr><td>Interruptores</td><td>1,00 m</td><td>Padrão residencial</td></tr>
<tr><td>Quadro de distribuição</td><td>1,50 m (centro)</td><td>Parte superior máx. 2,0 m</td></tr>
</tbody></table>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">⚡ Padrão de Tomadas — NBR 14136</html>
<p>O Brasil usa o padrão de tomadas <strong>NBR 14136</strong> com pinos redondos:</p>
<ul class="lesson-list">
<li><strong>2P+T (10A)</strong> — tomadas gerais (carregadores, eletrodomésticos pequenos)</li>
<li><strong>2P+T (20A)</strong> — equipamentos maiores (geladeira, máquina de lavar)</li>
<li>Todas as tomadas novas devem ter o pino central de terra</li>
</ul>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">💡 Tipos de Interruptores</h2>
<div class="concept-grid">
<div class="concept-card panel"><span class="concept-card__icon">🔵</span><h3>Simples</h3><p>Liga/desliga de um único ponto. Usado na maioria dos cômodos.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🔄</span><h3>Paralelo (3 vias)</h3><p>Liga/desliga de dois pontos. Usado em corredores, escadas e entradas.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🔀</span><h3>Intermediário (4 vias)</h3><p>Complementa o paralelo para ligar de 3 ou mais pontos.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🌙</span><h3>Dimmer</h3><p>Regula a intensidade luminosa. Use apenas com lâmpadas compatíveis.</p></div>
</div>
</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Tomadas residenciais: 1,10 m do piso</li><li>Interruptores: 1,00 m do piso</li><li>Padrão brasileiro: NBR 14136 (pinos redondos)</li><li>Toda tomada nova deve ter o pino terra (2P+T)</li><li>Corredor/escada: interruptor paralelo (3 vias) nos dois extremos</li></ul></div>`
        },
        {
          id: 4,
          title: 'NBR 5410 na prática residencial',
          duration: '~10 min',
          content: `
<p class="lesson-intro">A NBR 5410 é a norma brasileira para instalações elétricas de baixa tensão. Ela cobre desde o dimensionamento dos cabos até as distâncias de segurança. Conhecer seus principais pontos é obrigatório para o eletricista predial.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📋 Principais Exigências para Residências</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🔵</span><div><strong>Circuitos separados por função</strong><p>Iluminação, tomadas gerais e tomadas específicas devem ser circuitos independentes.</p></div></div>
<div class="key-point"><span class="key-point__icon">🌿</span><div><strong>Condutor terra (PE) em toda a instalação</strong><p>Todas as tomadas e quadros devem ter o terra conectado corretamente ao eletrodo de aterramento.</p></div></div>
<div class="key-point"><span class="key-point__icon">🛡️</span><div><strong>DR obrigatório</strong><p>Banheiros, áreas externas, garagem, piscina e sauna exigem proteção diferencial residual (DR).</p></div></div>
<div class="key-point"><span class="key-point__icon">📦</span><div><strong>Eletrodutos e caixas</strong><p>Toda fiação deve passar por eletrodutos. Emendas só podem ser feitas dentro de caixas de passagem.</p></div></div>
<div class="key-point"><span class="key-point__icon">🔒</span><div><strong>Quadro acessível mas protegido</strong><p>O QDC deve ser acessível para manutenção, mas fora do alcance de crianças e protegido contra umidade.</p></div></div>
</div>
</div>
<div class="alert alert-warning"><strong>⚠️ Proibido:</strong> Fazer emendas de cabos fora de caixas de passagem. Emendas enterradas na parede ou dentro de eletrodutos sem caixa são irregulares e perigosas — aquecem, oxidam e causam falhas futuras.</div>
<div class="alert alert-info"><strong>💡 Sobre aterramento:</strong> O eletrodo de aterramento (haste de cobre enterrada no solo) deve ter resistência de aterramento medida e registrada. Para residências, o valor típico é ≤ 100 Ω.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Circuitos separados: iluminação, tomadas gerais e específicas</li><li>Terra (PE) em toda a instalação — nunca omita</li><li>DR obrigatório em banheiros, área externa e garagem</li><li>Emendas somente dentro de caixas de passagem</li><li>Eletroduto protege os cabos — fiação solta na parede é irregular</li></ul></div>`
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
    },
    {
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
    },
    {
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
    },
    {
      id: 6,
      icon: '✅',
      title: 'Qualidade e Boas Práticas',
      description: 'Organização de cabos, documentação da instalação e entrega da obra.',
      lessons: [
        {
          id: 1,
          title: 'Organização e amarração de cabos',
          duration: '~8 min',
          content: `
<p class="lesson-intro">Uma instalação bem organizada é sinal de profissionalismo e facilita imensamente futuras manutenções. A organização dos cabos dentro do quadro e nas caixas reflete a qualidade do trabalho.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🔧 No Quadro de Distribuição</h2>
<ol class="steps-list">
<li>Passe os cabos em feixes organizados — fases juntas, neutros juntos</li>
<li>Use abraçadeiras de nylon (zip ties) a cada 10-15 cm</li>
<li>Corte o excesso das abraçadeiras rente — pontas afiadas cortam o isolamento</li>
<li>Deixe uma folga de 5-10 cm em cada cabo para futuras conexões</li>
<li>Nunca deixe cabos cruzando o caminho dos disjuntores</li>
<li>Organize pela ordem dos disjuntores — da esquerda para direita</li>
</ol>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📦 Nas Caixas de Passagem</h2>
<ul class="lesson-list">
<li>Dobre os cabos em forma de "U" ou espiral antes de afundar na caixa</li>
<li>Nunca force os cabos — tensão mecânica causa mau contato futuro</li>
<li>Identifique os cabos com fita colorida ou etiquetas antes de fechar</li>
<li>Deixe folga suficiente para conectar e desconectar sem esforço</li>
</ul>
</div>
<div class="alert alert-success"><strong>✅ Dica de ouro:</strong> Imagine que o próximo eletricista a abrir essa caixa vai ser você mesmo, daqui a 5 anos. Organize como se fosse para você encontrar e entender rapidamente.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Abraçadeiras a cada 10-15 cm — corte o excesso rente</li><li>Fases juntas, neutros juntos, terras juntos</li><li>Deixe folga de 5-10 cm em cada cabo no quadro</li><li>Identifique todos os cabos antes de fechar as caixas</li><li>Instalação organizada = profissional reconhecido</li></ul></div>`
        },
        {
          id: 2,
          title: 'Identificação e documentação da instalação',
          duration: '~8 min',
          content: `
<p class="lesson-intro">Documentar a instalação é uma obrigação técnica e um diferencial profissional. O diagrama unifilar e as etiquetas no quadro valem ouro em qualquer manutenção futura.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📋 O que Documentar</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">📊</span><div><strong>Diagrama unifilar</strong><p>Representa cada circuito com seu disjuntor, bitola do cabo e carga protegida. Deve ser plastificado e afixado dentro do quadro.</p></div></div>
<div class="key-point"><span class="key-point__icon">🏷️</span><div><strong>Etiquetas nos disjuntores</strong><p>"Cozinha — Tomadas", "Quarto 1 — Luz", "Chuveiro". Etiquetas claras evitam erros durante manutenções.</p></div></div>
<div class="key-point"><span class="key-point__icon">📝</span><div><strong>Registro de instalação</strong><p>Data da execução, nome do responsável, bitolas usadas, localização dos eletrodutos (quando possível).</p></div></div>
</div>
</div>
<div class="alert alert-info"><strong>💡 Para o cliente:</strong> Entregue uma cópia do diagrama ao proprietário. Explique o que cada disjuntor protege e como testar o DR mensalmente. Isso demonstra profissionalismo e previne ligações de emergência desnecessárias.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Diagrama unifilar plastificado dentro do quadro</li><li>Etiqueta em cada disjuntor com o circuito que protege</li><li>Registre data, nome e especificações da instalação</li><li>Entregue uma cópia ao proprietário</li><li>Documentação é obrigação técnica — não é opcional</li></ul></div>`
        },
        {
          id: 3,
          title: 'Acabamento e entrega da obra',
          duration: '~8 min',
          content: `
<p class="lesson-intro">A entrega da obra elétrica é o momento de provar a qualidade do serviço. Uma vistoria completa antes de entregar evita chamadas de volta e consolida sua reputação.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">✅ Checklist de Entrega</h2>
<ul class="lesson-list">
<li>Todos os pontos de luz funcionando (ligar e desligar de cada interruptor)</li>
<li>Todas as tomadas com tensão correta (medir com multímetro)</li>
<li>DR testado com botão "T" — deve disparar instantaneamente</li>
<li>Quadro com disjuntores todos etiquetados</li>
<li>Diagrama unifilar afixado dentro do quadro</li>
<li>Nenhum cabo exposto ou sem proteção</li>
<li>Caixas de tomadas e interruptores com placas instaladas</li>
<li>Área de trabalho limpa — sem resíduos de instalação</li>
<li>Eletrodutos aparentes fixados com buchas e parafusos</li>
</ul>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🤝 Instruções ao Proprietário</h2>
<ol class="steps-list">
<li>Mostre onde fica o quadro elétrico e como desligar cada circuito</li>
<li>Explique a função do DR e como testá-lo mensalmente</li>
<li>Oriente sobre a capacidade de cada circuito (não sobrecarregar)</li>
<li>Deixe seu contato para eventuais dúvidas ou ajustes</li>
</ol>
</div>
<div class="alert alert-success"><strong>✅ Profissionalismo:</strong> Um eletricista que entrega uma vistoria documentada, testa tudo na frente do cliente e explica o funcionamento constrói reputação por indicação. Isso vale mais que qualquer divulgação.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Testar todos os pontos antes de entregar</li><li>DR: botão de teste obrigatório na entrega</li><li>Quadro etiquetado e com diagrama plastificado</li><li>Explicar ao proprietário como usar e testar a instalação</li><li>Área limpa = respeito pelo cliente</li></ul></div>`
        }
      ],
      quiz: {
        questions: [
          { text: 'Com que frequência o proprietário deve testar o botão "T" do DR?', options: [{ text: 'Anualmente, junto com a revisão da instalação', correct: false }, { text: 'Mensalmente', correct: true }, { text: 'Apenas quando o DR disparar sozinho', correct: false }, { text: 'A cada 5 anos, junto com a revisão geral', correct: false }], explanation: 'O teste mensal do DR (botão "T") é recomendado para garantir que o dispositivo está funcionando. Um DR que não dispara no teste está defeituoso e não protege.' },
          { text: 'O que deve constar no diagrama unifilar do quadro?', options: [{ text: 'Apenas os nomes dos ambientes', correct: false }, { text: 'Cada circuito com seu disjuntor, bitola do cabo e carga protegida', correct: true }, { text: 'Somente os circuitos de tomadas — iluminação não precisa', correct: false }, { text: 'O orçamento da instalação e data de pagamento', correct: false }], explanation: 'O diagrama unifilar deve representar cada circuito com: número/nome do disjuntor, bitola do cabo, tipo de carga (iluminação, tomadas, TUE) e ambiente que serve.' },
          { text: 'Como devem ser organizados os cabos dentro do quadro de distribuição?', options: [{ text: 'Podem ser passados de qualquer forma, pois estão dentro do quadro', correct: false }, { text: 'Em feixes organizados com abraçadeiras, fases separadas de neutros e terras', correct: true }, { text: 'Apenas amarrados no borne — a organização interna não importa', correct: false }, { text: 'Cada cabo solto e separado para facilitar identificação visual', correct: false }], explanation: 'Cabos organizados em feixes com abraçadeiras, separados por tipo (fase, neutro, terra), facilitam identificação, manutenção e evitam folgas que causam vibrações e mau contato.' },
          { text: 'Qual a diferença entre TUG e TUE?', options: [{ text: 'TUG é para 127V e TUE é para 220V', correct: false }, { text: 'TUG são tomadas gerais (múltiplos usos) e TUE são tomadas de uso específico (um equipamento exclusivo)', correct: true }, { text: 'TUG usa cabo 2,5 mm² e TUE usa cabo 1,5 mm²', correct: false }, { text: 'TUG é para ambientes internos e TUE para ambientes externos', correct: false }], explanation: 'TUG (Tomada de Uso Geral) serve a múltiplos equipamentos no mesmo circuito. TUE (Tomada de Uso Específico) tem um circuito exclusivo para um único equipamento de alta potência (chuveiro, ar-condicionado, etc.).' },
          { text: 'O que verificar primeiro ao descobrir que uma tomada não tem tensão?', options: [{ text: 'Trocar a tomada imediatamente', correct: false }, { text: 'Verificar se o disjuntor do circuito está ligado e se o DR não disparou', correct: true }, { text: 'Chamar a concessionária de energia', correct: false }, { text: 'Testar com outro equipamento de alta potência para confirmar a falha', correct: false }], explanation: 'A primeira verificação é no quadro: disjuntor ligado? DR na posição ON? Muitas "falhas" de tomada são simplesmente o DR disparado por sobrecarga ou corrente de fuga temporária.' }
        ]
      }
    },
    {
      id: 7,
      icon: '🏆',
      title: 'Avaliação Final e Certificado',
      description: 'Revisão completa de segurança e prova final para obter seu certificado.',
      lessons: [
        {
          id: 1,
          title: 'Revisão: pontos críticos de segurança',
          duration: '~10 min',
          content: `
<p class="lesson-intro">Antes da avaliação final, revisamos os pontos mais críticos de segurança que todo eletricista predial deve ter gravado na memória — são os itens que mais salvam vidas.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🔑 Os 10 Mandamentos do Eletricista Seguro</h2>
<div class="loto-steps">
<div class="loto-step"><span class="loto-step-num active">1</span><div class="loto-step-content"><strong>Nunca presuma que está desligado</strong><span>Sempre meça. Sempre. Sem exceção.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">2</span><div class="loto-step-content"><strong>Aplique LOTO antes de qualquer serviço</strong><span>Cadeado + etiqueta no disjuntor, sem exceção.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">3</span><div class="loto-step-content"><strong>Use seus EPIs completos</strong><span>Capacete B, luvas isolantes, botina dielétrica.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">4</span><div class="loto-step-content"><strong>Sinalize a área de trabalho</strong><span>Cones, fita e aviso no quadro.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">5</span><div class="loto-step-content"><strong>Teste nos 3 pontos</strong><span>Fase-Neutro, Fase-Terra, Neutro-Terra.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">6</span><div class="loto-step-content"><strong>Respeite as cores da NBR 5410</strong><span>Verde = terra. Azul = neutro. Nunca inverta.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">7</span><div class="loto-step-content"><strong>Use ferramentas isoladas (1000V)</strong><span>Inspecione antes de cada uso.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">8</span><div class="loto-step-content"><strong>Emendas só em caixas de passagem</strong><span>Nunca dentro de eletroduto ou na parede.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">9</span><div class="loto-step-content"><strong>Dimensione corretamente</strong><span>Disjuntor protege o cabo — nunca superdimensione o disjuntor.</span></div></div>
<div class="loto-step"><span class="loto-step-num active">10</span><div class="loto-step-content"><strong>Documente seu trabalho</strong><span>Diagrama, etiquetas e data. Sempre.</span></div></div>
</div>
</div>
<div class="alert alert-success"><strong>✅ Você chegou até aqui!</strong> Completar este curso é o primeiro passo. A segurança real vem da prática diária de todos esses procedimentos, sem pular etapas, mesmo quando há pressão de tempo. Boa prova!</div>
<div class="summary-section"><h2>📌 Pontos Finais</h2><ul class="summary-list"><li>Segurança não é burocracia — cada procedimento existe para salvar vidas</li><li>Um acidente elétrico pode ser irreversível — não há segunda chance</li><li>O profissional reconhecido é aquele que faz tudo certo, sempre</li><li>Boa sorte na avaliação final!</li></ul></div>`
        }
      ],
      quiz: {
        questions: [
          { text: 'Qual é a sequência completa e correta das 5 Regras de Ouro?', options: [{ text: 'Desligar → Bloquear → Verificar tensão → Aterrar → Sinalizar', correct: true }, { text: 'Sinalizar → Desligar → Testar → Bloquear → Aterrar', correct: false }, { text: 'Testar → Desligar → Bloquear → Sinalizar → Aterrar', correct: false }, { text: 'Bloquear → Desligar → Testar → Sinalizar → Aterrar', correct: false }], explanation: 'As 5 Regras de Ouro na ordem correta: 1-Desligar, 2-Bloquear contra re-ligação (LOTO), 3-Verificar ausência de tensão nos 3 pontos, 4-Aterrar se necessário, 5-Sinalizar a área.' },
          { text: 'Um eletricista vai fazer um serviço rápido (5 minutos) em uma tomada. Precisa aplicar LOTO?', options: [{ text: 'Não — para serviços rápidos, apenas desligar o disjuntor é suficiente', correct: false }, { text: 'Não — com luvas isolantes o LOTO é desnecessário', correct: false }, { text: 'Sim — o LOTO é obrigatório independente da duração do serviço', correct: true }, { text: 'Depende da tensão — acima de 220V sim, abaixo não', correct: false }], explanation: 'O LOTO é obrigatório para QUALQUER serviço em instalação elétrica, independente da duração. A maioria dos acidentes ocorre exatamente em "serviços rápidos" onde os procedimentos são pulados.' },
          { text: 'Um chuveiro de 7500W em 127V. Qual corrente ele consome?', options: [{ text: '~33,9 A', correct: false }, { text: '~59,1 A', correct: true }, { text: '~7,5 A', correct: false }, { text: '~42,6 A', correct: false }], explanation: 'I = P ÷ V = 7500 ÷ 127 ≈ 59,1 A. Esse é o motivo pelo qual chuveiros de alta potência em 127V exigem cabos muito grossos. Em 220V, o mesmo chuveiro consumiria apenas ≈34,1 A — mais eficiente.' },
          { text: 'O DR disparou na sala. O que fazer?', options: [{ text: 'Ligar o DR de volta e ver se sustenta', correct: false }, { text: 'Trocar o DR por um disjuntor termomagnético', correct: false }, { text: 'Desligar equipamentos da sala, ligar o DR, identificar qual equipamento está com fuga e reparar ou substituir', correct: true }, { text: 'Chamar a concessionária — é problema na rede pública', correct: false }], explanation: 'O DR disparou porque detectou corrente de fuga (alguém em risco de choque ou equipamento com isolamento danificado). Desconecte os equipamentos, reative o DR, e plugue um por um para identificar o culpado.' },
          { text: 'Qual componente protege pessoas contra choque elétrico, e qual protege os cabos contra superaquecimento?', options: [{ text: 'DR protege cabos; disjuntor protege pessoas', correct: false }, { text: 'Ambos os dois protegem as duas coisas igualmente', correct: false }, { text: 'DR protege pessoas; disjuntor protege cabos', correct: true }, { text: 'DPS protege pessoas; DR protege cabos', correct: false }], explanation: 'O DR (Dispositivo Diferencial Residual) detecta corrente de fuga e protege pessoas contra choque. O disjuntor termomagnético detecta sobrecarga e curto-circuito, protegendo os cabos contra superaquecimento.' },
          { text: 'Por que o interruptor deve sempre interromper a fase, e nunca o neutro?', options: [{ text: 'Porque o neutro nunca tem tensão', correct: false }, { text: 'Porque interromper o neutro deixa a base da lâmpada energizada (com a fase), criando risco de choque ao trocar a lâmpada', correct: true }, { text: 'Porque o neutro é mais espesso e o interruptor não consegue cortá-lo', correct: false }, { text: 'Apenas por convenção — tecnicamente os dois funcionam igual', correct: false }], explanation: 'Se o interruptor cortar o neutro, a fase continua chegando até a base da lâmpada. A lâmpada apaga (circuito aberto no neutro), mas a base fica perigosamente energizada — risco grave de choque ao tocar para trocar a lâmpada.' },
          { text: 'Qual é o valor máximo de potência por circuito de iluminação?', options: [{ text: '500 W', correct: false }, { text: '1000 W', correct: true }, { text: '1500 W', correct: false }, { text: '2000 W', correct: false }], explanation: 'A NBR 5410 limita os circuitos de iluminação a 1000 W cada. Para circuitos de tomadas gerais (TUG), o limite é 1500 W por circuito.' },
          { text: 'Um fio com isolamento verde-amarelo foi encontrado energizado como fase em uma instalação antiga. O que fazer?', options: [{ text: 'Manter assim, pois instalações antigas têm regras diferentes', correct: false }, { text: 'Desligar o circuito, corrigir a fiação conforme a NBR 5410 e documentar a correção', correct: true }, { text: 'Apenas colocar uma etiqueta avisando que este fio é fase', correct: false }, { text: 'Ignorar — o verde-amarelo como fase não oferece risco adicional', correct: false }], explanation: 'Verde-amarelo como fase é irregularidade grave. Em manutenção futura, outro eletricista pode presumir que é terra e se acidentar. Corrija conforme NBR 5410 e documente o que foi feito.' }
        ]
      }
    }
  ]
};
