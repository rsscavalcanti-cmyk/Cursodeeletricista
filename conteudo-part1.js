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
<div class="concept-card panel"><span class="concept-card__icon">📋</span><h3>Prontúrio</h3><p>Documentação obrigatória de todas as instalações elétricas da edificação.</p></div>
<div class="concept-card panel"><span class="concept-card__icon">🦺</span><h3>EPI e EPC</h3><p>Equipamentos de Proteção Individual e Coletiva obrigatórios no trabalho.</p></div>
</div>
</div>
<div class="alert alert-success"><strong>✅ Na prática:</strong> Sempre que iniciar um trabalho elétrico, a primeira pergunta é: <em>"Esta instalação está desenergizada e verificada?"</em> Se a resposta não for um "sim" confirmado, pare e siga o procedimento correto.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>A NR-10 é <strong>obrigatória</strong> para todo eletricista no Brasil</li><li>Ela protege trabalhadores que interagem com instalações elétricas</li><li>Trabalho desenergizado é sempre o procedimento mais seguro</li><li>Empresas são responsáveis pelo cumprimento da norma</li><li>O treinamento NR-10 básico exige mínimo de 40 horas</li></ul></div>`
        },
        {
          id: 2,
          title: 'EPIs obrigatórios na obra elétrica',
          duration: '~12 min',
          content: `
<p class="lesson-intro">EPI — Equipamento de Proteção Individual — é o conjunto de dispositivos que protege o trabalhador de riscos que não podem ser eliminados. Na eletricidade, o EPI correto pode ser a diferença entre a vida e a morte.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🦺 EPIs Obrigatórios para Eletricista</h2>
<div class="epi-grid">
<div class="epi-card panel"><span class="epi-card__icon">⛑️</span><div><h3>Capacete Classe B</h3><p>Proteção contra impactos <strong>e tensões até 20.000 V</strong>. Identificado pela cor azul ou marcação "B".</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">🧎</span><div><h3>Luvas Isolantes</h3><p>Borracha isolante com luva de couro sobreposta. A borracha isola; o couro protege a borracha de rasgos.</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">🥾</span><div><h3>Botina Dielétrica</h3><p>Sola isolante, <strong>sem biqueira metálica</strong>. Isola o trabalhador do solo.</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">🥽</span><div><h3>Óculos de Proteção</h3><p>Proteção contra faíscas, arco elétrico e respingos. Lente incolor para ambientes fechados.</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">👕</span><div><h3>Vestimenta</h3><p>Manga longa de algodão ou fibra antichama. Nunca use sintético (pega fogo e derrete na pele).</p></div></div>
<div class="epi-card panel"><span class="epi-card__icon">🛡️</span><div><h3>Protetor Facial</h3><p>Obrigatório em trabalhos com risco de arco elétrico. Complementa os óculos.</p></div></div>
</div>
</div>
<div class="alert alert-danger"><strong>⚠️ ATENÇÃO:</strong> Nunca use EPI com prazo de validade vencido, com defeito visível ou rachado. Descarte imediatamente e solicite substituição. Um EPI danificado é pior do que nenhum — dá falsa sensação de segurança.</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🧎 Como Verificar as Luvas Isolantes</h2>
<ol class="steps-list">
<li>Inspecione visualmente a luva inteira procurando cortes, furos ou rachados</li>
<li>Enrole a luva da ponta dos dedos em direção ao punho — pressione o ar para dentro</li>
<li>Se sentir ar saindo, há furo. <strong>Descarte imediatamente</strong></li>
<li>Verifique o prazo de validade gravado na luva (renove a cada 6 meses ou conforme fabricante)</li>
<li>Sempre coloque a luva de couro por cima da borracha antes de usar</li>
</ol>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🧎 Classes de Luvas Isolantes (IEC 60903)</h2>
<p>Luvas isolantes são classificadas por tensão máxima de uso. Escolher a classe errada pode ser fatal — a luva certa para a tensão certa:</p>
<table><thead><tr><th>Classe</th><th>Tensão de teste</th><th>Tensão de uso</th><th>Cor</th><th>Aplicação</th></tr></thead><tbody>
<tr><td><strong>00</strong></td><td>2.500 V</td><td>até 500 V</td><td>Bege</td><td>Residencial 127/220V — mínimo aceitável</td></tr>
<tr><td><strong>0</strong></td><td>5.000 V</td><td>até 1.000 V</td><td>Vermelha</td><td>Baixa tensão — recomendado para residencial</td></tr>
<tr><td><strong>1</strong></td><td>10.000 V</td><td>até 7.500 V</td><td>Branca</td><td>Média tensão</td></tr>
<tr><td><strong>2</strong></td><td>20.000 V</td><td>até 17.000 V</td><td>Amarela</td><td>Média tensão</td></tr>
<tr><td><strong>3</strong></td><td>30.000 V</td><td>até 26.500 V</td><td>Verde</td><td>Alta tensão</td></tr>
<tr><td><strong>4</strong></td><td>40.000 V</td><td>até 36.000 V</td><td>Laranja</td><td>Alta tensão especial</td></tr>
</tbody></table>
<div class="alert alert-warning"><strong>⚠️ Na prática residencial:</strong> Use no mínimo Classe 00 para 127V/220V. Prefira Classe 0 — a margem extra de segurança protege você de tensões transitórias e erros de leitura do multímetro.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🥽 Óculos vs. Protetor Facial — Quando Usar Cada Um</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🥽</span><div><strong>Óculos de proteção</strong><p>Protegem os olhos de partículas, faíscas pequenas e respingos. Use em toda instalação de baixa tensão com energia desligada.</p></div></div>
<div class="key-point"><span class="key-point__icon">🛡️</span><div><strong>Protetor facial (face shield)</strong><p>Protege o rosto inteiro de arco elétrico, explosão de QDC e flashover. <strong>Obrigatório</strong> ao manusear quadro energizado, trocar fusíveis ou qualquer operação com risco de arco elétrico.</p></div></div>
</div>
<p style="font-size:.875rem;color:var(--text-muted);margin-top:.75rem;">O protetor facial não substitui os óculos — use os dois juntos quando houver risco de arco.</p>
</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Capacete Classe B protege contra choque até 20.000 V</li><li>Luvas: Classe 00 mínimo para 127/220V — prefira Classe 0</li><li>Inspecionar luvas antes de cada uso (teste do ar + data de validade)</li><li>Protetor facial obrigatório ao manusear quadro energizado</li><li>EPI com defeito = descarte imediato, sem exceção</li></ul></div>`
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
          title: 'Perigos ocultos: capacitores, falso zero e aterramento temporário',
          duration: '~9 min',
          content: `
<p class="lesson-intro">Você desligou o disjuntor, o multímetro marcou zero — e mesmo assim levou um choque. Como é possível? Existem três situações que fazem a instalação parecer segura quando não está. Conhecê-las é o que separa o eletricista experiente do iniciante.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">⚡ Perigo 1 — O Falso Zero do Multímetro</h2>
<p>O multímetro pode indicar zero mesmo com tensão presente. As causas mais comuns:</p>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🔋</span><div><strong>Bateria fraca</strong><p>Um medidor com bateria descarregada pode mostrar leituras instáveis ou zero incorreto. Sintoma: display piscando ou leitura que oscila sem sentido. Solução: sempre verifique o indicador de bateria antes de usar.</p></div></div>
<div class="key-point"><span class="key-point__icon">🎛️</span><div><strong>Escala errada</strong><p>Medindo 220V CA na escala DCV (tensão contínua) → o medidor mostra zero ou valor sem sentido. Sempre selecione ACV (tensão alternada) e escala acima da tensão esperada.</p></div></div>
<div class="key-point"><span class="key-point__icon">🔌</span><div><strong>Ponta de prova danificada</strong><p>Ponta com cabo rompido internamente pode mostrar zero mesmo com tensão. Teste: toque as duas pontas — deve biper ou marcar 0 Ω. Se não biper, descarte as pontas.</p></div></div>
</div>
<div class="alert alert-danger"><strong>⚡ Protocolo anti-falso zero:</strong> Após medir e obter zero, <strong>confirme o instrumento</strong> tocando as pontas em uma tomada com tensão conhecida. Se marcar a tensão correta, o medidor está funcionando. Só então confie no zero anterior.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">⚡ Perigo 2 — Capacitores com Carga Residual</h2>
<p>Capacitores armazenam carga elétrica e <strong>continuam perigosos mesmo com o circuito desligado</strong>. Podem manter tensão por segundos, minutos ou horas, dependendo do tamanho e da carga residual.</p>
<ul class="lesson-list">
<li>Bancos de capacitores em ar-condicionados de janela e geladeiras industriais</li>
<li>Capacitores de correção de fator de potência em quadros industriais</li>
<li>No-breaks e fontes de alimentação ininterrupta (UPS)</li>
<li>Capacitores de partida de motores (muito comum em compressores)</li>
</ul>
<div class="alert alert-warning"><strong>⚠️ Procedimento seguro:</strong> Em equipamentos com capacitores, aguarde no mínimo 5 minutos após desligar antes de abrir. Profissionais usam resistor de descarga (uma resistência conectada nos terminais do capacitor) para drenar a carga com segurança antes de tocar.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">⚡ Perigo 3 — Quando Usar o Aterramento Temporário</h2>
<p>A Regra de Ouro nº 4 ("Aterrar e curto-circuitar") é a menos entendida. Em instalações de baixa tensão residencial, ela raramente é aplicada. Mas existem situações em que é obrigatória:</p>
<ul class="lesson-list">
<li>Trabalhos em circuitos longos com possibilidade de indução (próximos a linhas de alta tensão)</li>
<li>Instalações com geradores ou energia solar que podem re-energizar o circuito</li>
<li>Sempre em média e alta tensão (fora do escopo deste curso)</li>
</ul>
<p><strong>Como fazer o aterramento temporário:</strong></p>
<ol class="steps-list">
<li>Use cabo flexível de cobre com seção mínima de 16mm² (para BT residencial)</li>
<li>Conecte primeiro ao barramento de terra (PE) do quadro</li>
<li>Conecte ao condutor de fase que será trabalhado — cria um curto intencional fase-terra</li>
<li>Se houver tensão residual, o DR ou disjuntor irá disparar — confirmando que havia tensão</li>
<li>Remova o aterramento temporário antes da re-energização (sequência inversa)</li>
</ol>
</div>
<div class="alert alert-info"><strong>📖 Caso real (reconstituído):</strong> Em uma reforma industrial, o eletricista desligou o QDC e mediu zero. Iniciou o trabalho. Recebeu choque. Causa: a instalação tinha um banco de capacitores de 440V em paralelo que não foi identificado no levantamento inicial. Lição: levantamento completo da instalação antes de qualquer serviço, e descarga de capacitores antes de tocar.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Falso zero: bateria fraca, escala errada ou ponta danificada — sempre confirme o instrumento</li><li>Capacitores mantêm carga após desligamento — aguarde e descarregue antes de tocar</li><li>Aterramento temporário: cabo 16mm² mínimo, terra primeiro, depois a fase</li><li>Em instalações com gerador ou solar, LOTO não é suficiente — isole a fonte também</li><li>Dúvida = parar. Nunca avançce com incerteza numa instalação elétrica</li></ul></div>`
        }
      ],
      quiz: {
        questions: [
          { text: 'Você desligou o disjuntor e o multímetro marcou zero. Antes de tocar no cabo, você toca as pontas do multímetro entre si e ele NÃO bipa. O que isso indica?', options: [{ text: 'O circuito está desenergizado — pode trabalhar', correct: false }, { text: 'A ponta de prova está com defeito — o zero anterior não é confiável', correct: true }, { text: 'O circuito tem aterramento duplo, por isso não bipa', correct: false }, { text: 'O multímetro está na escala correta — tudo normal', correct: false }], explanation: 'Se as pontas não bipam quando tocadas entre si, a função de continuidade não está operando — ponta rompida, bateria fraca ou escala errada. O zero medido anteriormente NÃO é confiável. Troque ou verifique o instrumento antes de trabalhar.' },
          { text: 'Qual capacete é adequado para trabalhos elétricos?', options: [{ text: 'Capacete Classe A (branco)', correct: false }, { text: 'Capacete Classe B (azul — proteção até 20.000 V)', correct: true }, { text: 'Qualquer capacete com aba frontal', correct: false }, { text: 'Capacete de obra padrão sem classificação', correct: false }], explanation: 'O Capacete Classe B é testado para suportar tensões de até 20.000 V, sendo obrigatório em trabalhos elétricos.' },
          { text: 'Dois eletricistas trabalham no mesmo circuito em pontos diferentes. O eletricista A já terminou e quer re-energizar. O eletricista B ainda está trabalhando com seu cadeado no disjuntor. O que deve acontecer?', options: [{ text: 'O encarregado pode retirar o cadeado do B e religar', correct: false }, { text: 'A re-energização deve aguardar até que o eletricista B retire seu próprio cadeado', correct: true }, { text: 'O eletricista A retira o cadeado do B, pois B já terminou a sua parte', correct: false }, { text: 'Basta avisar verbalmente o eletricista B antes de religar', correct: false }], explanation: 'Cada eletricista tem seu próprio cadeado pessoal e intransferível. A re-energização só ocorre quando TODOS os cadeados forem retirados por seus próprios donos. Ninguém pode retirar o cadeado de outra pessoa.' },
          { text: 'Qual é a corrente elétrica mínima que pode causar morte?', options: [{ text: 'Acima de 10 amperes', correct: false }, { text: 'Acima de 1 ampere', correct: false }, { text: 'Acima de 50 miliamperes', correct: true }, { text: 'Apenas em alta tensão (acima de 1000V)', correct: false }], explanation: 'Correntes acima de 50 miliamperes (0,05 A) podem causar fibrição ventricular e morte. Isso é muito menos do que consome uma lâmpada LED.' },
          { text: 'Quem pode retirar o cadeado LOTO de um disjuntor?', options: [{ text: 'O encarregado de obra, em qualquer situação', correct: false }, { text: 'Qualquer eletricista presente no local', correct: false }, { text: 'Apenas o trabalhador que colocou o cadeado', correct: true }, { text: 'O eletricista mais experiente da equipe', correct: false }], explanation: 'O cadeado LOTO é pessoal e intransferível. Apenas quem o colocou pode retirá-lo, garantindo que ninguém trabalhe sem sua própria proteção.' },
          { text: 'Qual é a sequência correta das 5 Regras de Ouro?', options: [{ text: 'Testar → Desligar → Bloquear → Sinalizar → Aterrar', correct: false }, { text: 'Desligar → Bloquear → Verificar tensão → Aterrar → Sinalizar', correct: true }, { text: 'Sinalizar → Bloquear → Desligar → Aterrar → Testar', correct: false }, { text: 'Bloquear → Desligar → Testar → Aterrar → Sinalizar', correct: false }], explanation: 'A sequência correta é: 1-Desligar, 2-Bloquear contra re-ligação, 3-Verificar ausência de tensão, 4-Aterrar/curto-circuitar, 5-Proteger e sinalizar a área.' },
          { text: 'Para trabalhar numa instalação residencial de 220V, qual é a classe mínima aceitável de luvas isolantes?', options: [{ text: 'Qualquer luva de borracha serve, desde que esteja inteira', correct: false }, { text: 'Classe 00 (testada em 2.500V, uso até 500V) — é o mínimo aceitável', correct: true }, { text: 'Classe 2 (testada em 20.000V) — mais proteção é sempre melhor', correct: false }, { text: 'Luvas não são necessárias se a energia estiver desligada', correct: false }], explanation: 'A Classe 00 é o mínimo aceitável para 127/220V. A Classe 0 é preferível pois oferece margem adicional. Luvas de classe inferior não garantem proteção adequada. Luvas de classes superiores são desnecessárias e reduzem a destreza.' }
        ]
      }
    };
