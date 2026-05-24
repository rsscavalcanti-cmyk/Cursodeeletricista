var _M1 =     {
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
<div class="alert alert-danger"><strong>⚡ PERIGO:</strong> Trabalhar com eletricidade sem treinamento NR-10 é ilegal e extremamente perigoso. A corrente elétrica pode matar com apenas <strong>50 miliamperes</strong> — menos do que usa uma lâmpada LED. Segundo o Observatório de Segurança e Saúde no Trabalho (SmartLab/MTE), acidentes elétricos representam cerca de 4% de todas as mortes por acidente de trabalho no Brasil — aproximadamente 200 óbitos por ano.</div>
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
<div class="alert alert-success"><strong>✅ Na prática:</strong> Sempre que iniciar um trabalho elétrico, a primeira pergunta é: <em>"Ésta instalação está desenergizada e verificada?"</em> Se a resposta não for um "sim" confirmado, pare e siga o procedimento correto.</div>
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
<div class="epi-card panel"><span class="epi-card__icon">🥾</span><div><h3>Botina DiElétrica</h3><p>Sola isolante, <strong>sem biqueira metálica</strong>. Isola o trabalhador do solo.</p></div></div>
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
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Capacete Classe B protege contra choque até 20.000 V</li><li>Luvas isolantes: sempre inspecionar antes de usar (teste do ar)</li><li>Botina diElétrica: sem biqueira metálica, sola isolante</li><li>Roupas de algodão ou antichama — nunca sintético</li><li>EPI com defeito = descarte imediato</li></ul></div>`
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
          { text: 'Qual é a corrente elétrica mínima que pode causar morte?', options: [{ text: 'Acima de 10 amperes', correct: false }, { text: 'Acima de 1 ampere', correct: false }, { text: 'Acima de 50 miliamperes', correct: true }, { text: 'Apenas em alta tensão (acima de 1000V)', correct: false }], explanation: 'Correntes acima de 50 miliamperes (0,05 A) podem causar fibrição ventricular e morte. Isso é muito menos do que consome uma lâmpada LED.' },
          { text: 'Quem pode retirar o cadeado LOTO de um disjuntor?', options: [{ text: 'O encarregado de obra, em qualquer situação', correct: false }, { text: 'Qualquer eletricista presente no local', correct: false }, { text: 'Apenas o trabalhador que colocou o cadeado', correct: true }, { text: 'O eletricista mais experiente da equipe', correct: false }], explanation: 'O cadeado LOTO é pessoal e intransferível. Apenas quem o colocou pode retirá-lo, garantindo que ninguém trabalhe sem sua própria proteção.' },
          { text: 'Qual é a sequência correta das 5 Regras de Ouro?', options: [{ text: 'Testar → Desligar → Bloquear → Sinalizar → Aterrar', correct: false }, { text: 'Desligar → Bloquear → Verificar tensão → Aterrar → Sinalizar', correct: true }, { text: 'Sinalizar → Bloquear → Desligar → Aterrar → Testar', correct: false }, { text: 'Bloquear → Desligar → Testar → Aterrar → Sinalizar', correct: false }], explanation: 'A sequência correta é: 1-Desligar, 2-Bloquear contra re-ligação, 3-Verificar ausência de tensão, 4-Aterrar/curto-circuitar, 5-Proteger e sinalizar a área.' }
        ]
      }
    };
