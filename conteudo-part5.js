var _M6 =     {
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
          duration: '~12 min',
          content: `
<p class="lesson-intro">Documentar a instalação é uma obrigação técnica e um diferencial profissional. O diagrama unifilar e as etiquetas no quadro valem ouro em qualquer manutenção futura — inclusive para você mesmo, anos depois.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">📊 O Que é o Diagrama Unifilar</h2>
<p>O diagrama unifilar é uma representação simplificada da instalação elétrica onde cada condutor é desenhado como uma única linha — independente de quantos fios compõem o circuito. Ele mostra:</p>
<ul class="lesson-list">
<li>O ponto de entrega da concessionária (medidor)</li>
<li>O quadro de distribuição (QDC) com cada disjuntor numerado</li>
<li>Cada circuito com: bitola do cabo, tipo de carga e ambiente atendido</li>
<li>As proteções: DR (dispositivo diferencial), DPS e disjuntor geral</li>
</ul>
<div class="alert alert-info"><strong>💡 Como ler um unifilar:</strong> Cada linha saindo do QDC é um circuito. Os símbolos ao lado indicam o tipo de proteção (quadrado = disjuntor, triângulo = DR). O número ao lado é a amperagem. A letra-número (ex: 2,5mm²) é a bitola do cabo.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📋 Exemplo de Diagrama Unifilar Residencial</h2>
<div class="panel" style="padding:1.25rem;font-family:monospace;font-size:0.85rem;line-height:1.8;overflow-x:auto;">
<div style="color:var(--text-secondary);margin-bottom:0.75rem;font-family:var(--font-base);font-size:0.8rem;">QDC — Quadro de Distribuição (exemplo simplificado)</div>
<div>┌─────────────────────────────────────┐</div>
<div>│  [DG 40A] Disjuntor Geral           │</div>
<div>│  [DR 30mA] — proteção diferencial   │</div>
<div>│  [DPS T2]  — proteção contra surtos │</div>
<div>│─────────────────────────────────────│</div>
<div>│  C1 [10A] ──1,5mm²── Ilum. Sala/Quartos │</div>
<div>│  C2 [10A] ──1,5mm²── Ilum. Cozinha/Serv │</div>
<div>│  C3 [20A] ──2,5mm²── TUG Sala/Quartos   │</div>
<div>│  C4 [20A] ──2,5mm²── TUG Cozinha        │</div>
<div>│  C5 [20A] ──2,5mm²── TUG Serviço [DR]   │</div>
<div>│  C6 [20A] ──2,5mm²── Banheiros [DR]     │</div>
<div>│  C7 [32A] ──6,0mm²── Chuveiro (TUE)     │</div>
<div>│  C8 [20A] ──2,5mm²── Ar-cond. (TUE)     │</div>
<div>└─────────────────────────────────────┘</div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📋 O Que Documentar</h2>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">📊</span><div><strong>Diagrama unifilar</strong><p>Plastificado e afixado dentro do QDC. Uma cópia digital (foto no celular) para o proprietário.</p></div></div>
<div class="key-point"><span class="key-point__icon">🏷️</span><div><strong>Etiquetas nos disjuntores</strong><p>"C1 — Ilum. Sala/Quartos", "C7 — Chuveiro". Etiquetas claras evitam erros durante manutenções no escuro.</p></div></div>
<div class="key-point"><span class="key-point__icon">📝</span><div><strong>Prontúrio da instalação</strong><p>Data da execução, nome do responsável técnico, bitolas usadas, resultado da medição de aterramento e localização dos eletrodutos. Exigido pela NR-10.</p></div></div>
<div class="key-point"><span class="key-point__icon">📐</span><div><strong>Croqui de percurso dos eletrodutos</strong><p>Esboço da planta indicando por onde passam os eletrodutos na parede. Salva horas de trabalho em reformas futuras.</p></div></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">📦 O Que Entregar ao Proprietário vs. Arquivar</h2>
<table><thead><tr><th>Documento</th><th>Entregar ao proprietário</th><th>Manter no arquivo</th></tr></thead><tbody>
<tr><td>Diagrama unifilar</td><td>✅ Cópia (foto ou impresso)</td><td>✅ Original plastificado no QDC</td></tr>
<tr><td>Resultado do aterramento</td><td>✅ Valor em Ω medido</td><td>✅ Laudo com assinatura</td></tr>
<tr><td>Especificações dos circuitos</td><td>✅ Resumo simples</td><td>✅ Documento técnico completo</td></tr>
<tr><td>Nota fiscal / recibo</td><td>✅ Via do cliente</td><td>✅ Via do prestador</td></tr>
<tr><td>Orientações de uso</td><td>✅ Como testar DR, capacidade dos circuitos</td><td>—</td></tr>
</tbody></table>
</div>
<div class="alert alert-warning"><strong>⚠️ NR-10, item 10.2.4:</strong> Toda instalação elétrica deve possuir prontúrio com as características dos equipamentos e das instalações. A ausência do prontúrio em obras fiscalizadas pelo MTE pode resultar em autuação. Mais importante: o prontúrio protege você em caso de acidentes futuros.</div>
<div class="alert alert-success"><strong>✅ Diferencial profissional:</strong> Entregue o diagrama ao proprietário, explique o que cada disjuntor protege e como testar o DR mensalmente. Esse gesto simples transforma clientes em divulgadores do seu trabalho.</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Diagrama unifilar: cada circuito com bitola, proteção e ambiente</li><li>Plastificado dentro do QDC + cópia para o proprietário</li><li>Etiqueta em cada disjuntor com o circuito que protege</li><li>Prontúrio completo: exigência da NR-10, não é opcional</li><li>Croqui de eletrodutos evita danos em reformas futuras</li></ul></div>`
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
    };
var _M7 =     {
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
    };
