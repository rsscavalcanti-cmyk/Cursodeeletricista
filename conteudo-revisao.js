/* Camada editorial v2: preserva o conteúdo base e corrige o escopo para atividades desenergizadas. */
(function () {
  'use strict';
  if (typeof COURSE_DATA === 'undefined') return;
  const youtube = q => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
  window.COURSE_ENHANCEMENTS = {
    boundary: 'Este é um curso livre introdutório. As atividades orientadas aqui ocorrem somente com a instalação seccionada, bloqueada, sinalizada e com ausência de tensão verificada. Não substitui treinamento NR-10 de 40 h, formação profissional ou autorização do empregador.',
    modules: {
      1: { image:'assets/loto.svg', alt:'Quadro desenergizado com bloqueio e etiqueta LOTO', goals:['Reconhecer o limite do curso livre e o papel da NR-10.','Aplicar a sequência de desenergização e bloqueio antes de qualquer contato.','Interromper a atividade diante de partes energizadas ou risco não controlado.'], videos:[{title:'NR-10 e desenergização — busque conteúdo institucional do SENAI', query:'SENAI NR-10 desenergização bloqueio eletricidade'},{title:'Bloqueio e etiquetagem (LOTO) em instalações elétricas', query:'LOTO bloqueio etiquetagem instalações elétricas NR10'}] },
      2: { image:'assets/kit-ferramentas.svg', alt:'Ferramentas isoladas e instrumento de verificação', goals:['Identificar ferramentas e instrumentos adequados.','Inspecionar integridade, categoria e finalidade antes do uso.','Entender que ferramenta isolada não autoriza serviço energizado.'], videos:[{title:'Ferramentas para eletricista iniciante — seleção e inspeção', query:'ferramentas eletricista iniciante isoladas inspeção Mundo da Elétrica'},{title:'Verificação segura de ausência de tensão', query:'ausência de tensão multímetro segurança NR10 eletricista'}] },
      3: { image:'assets/materiais-eletricos.svg', alt:'Cabos, tomada, disjuntor e dispositivo DR', goals:['Conhecer componentes usuais de instalações residenciais.','Diferenciar norma, convenção de projeto e exemplo didático.','Consultar projeto e norma oficial antes de dimensionar ou executar.'], videos:[{title:'Componentes e circuitos residenciais de baixa tensão', query:'instalações elétricas residenciais circuitos tomadas iluminação Mundo da Elétrica'},{title:'Dispositivo DR e proteção adicional', query:'dispositivo DR instalação elétrica residencial explicação'}] },
      4: { image:'assets/hero-seguranca.svg', alt:'Bancada de serviço com circuito bloqueado e ferramenta isolada', goals:['Executar somente procedimentos com circuito liberado e sem tensão.','Fazer conexões e montagem com organização e inspeção visual.','Solicitar avaliação habilitada para qualquer teste energizado.'], videos:[{title:'Montagem de tomada e interruptor com circuito desligado', query:'instalação tomada interruptor circuito desligado eletricista'},{title:'Emendas e conectores adequados em caixa acessível', query:'conectores elétricos emenda caixa acessível condutor'}] },
      5: { image:'assets/multimetro-zero.svg', alt:'Instrumento indicando ausência de tensão', goals:['Mapear circuitos por documentação e continuidade sem tensão.','Etiquetar o quadro e registrar dúvidas/anomalias.','Não reenergizar para diagnóstico no escopo deste curso.'], videos:[{title:'Identificação de circuitos e etiquetagem de quadro', query:'identificação circuitos quadro elétrico etiquetagem'},{title:'Teste de continuidade com circuito desenergizado', query:'teste continuidade circuito desenergizado multímetro'}] },
      6: { image:'assets/materiais-eletricos.svg', alt:'Materiais identificados para documentação e entrega', goals:['Organizar entrega, registros e diagrama simplificado.','Explicar limites do serviço ao cliente.','Priorizar qualidade, rastreabilidade e segurança.'], videos:[{title:'Checklist e organização de quadro elétrico residencial', query:'organização quadro elétrico checklist identificação circuitos'},{title:'Diagrama unifilar básico residencial', query:'diagrama unifilar residencial básico eletricista'}] },
      7: { image:'assets/loto.svg', alt:'Síntese do procedimento seguro do curso', goals:['Consolidar a regra de energia desligada.','Demonstrar domínio mínimo de segurança com aprovação de 80%.','Emitir certificado de curso livre introdutório.'], videos:[{title:'Revisão: segurança elétrica e desenergização', query:'segurança elétrica desenergização revisão eletricista NR10'}] }
    },
    senaiTrack: [
      { title:'Fundamentos e segurança', text:'Use a introdução atual como nivelamento e direcione o aluno à formação oficial aplicável, especialmente NR-10 quando exigida.' },
      { title:'Instalações residenciais', text:'Aprofunde leitura de projeto, materiais, divisão de circuitos, proteções e documentação com exercícios somente desenergizados.' },
      { title:'Comandos e automação predial', text:'Apresente como trilha futura, após domínio de fundamentos, qualificação adequada e segurança formal.' }
    ]
  };
  function replaceAll(html, from, to) { return html.split(from).join(to); }
  function lesson(mid, lid) { const m = COURSE_DATA.modules.find(x => x.id === mid); return m && m.lessons.find(x => x.id === lid); }
  const m1l1 = lesson(1,1); if (m1l1) {
    m1l1.content = replaceAll(m1l1.content, 'Todo eletricista qualificado NR-10 aprende os mesmos procedimentos seguros.', 'Trabalhadores autorizados devem receber treinamento e seguir procedimentos seguros definidos para a atividade.');
    m1l1.content = replaceAll(m1l1.content, 'Este curso cobre os fundamentos desse módulo.', 'Este curso apresenta noções introdutórias e <strong>não equivale</strong> ao treinamento básico NR-10 de 40 horas.');
    m1l1.content += '<div class="alert alert-warning"><strong>Limite deste curso livre:</strong> O certificado registra estudo introdutório; não habilita atuação profissional, não concede autorização NR-10 e não substitui treinamento oficial, supervisão ou responsabilidade técnica.</div>';
  }
  const m1l3 = lesson(1,3); if (m1l3) {
    m1l3.content = m1l3.content.replace(/<div class="alert alert-danger"><strong>⚡ PERIGO:<\/strong> A "regra dos dois metros"[\s\S]*?<\/div>/, '<div class="alert alert-danger"><strong>⚡ PERIGO:</strong> Este curso não orienta aproximação ou intervenção em partes energizadas. As zonas e distâncias de segurança dependem da tensão e das condições previstas na NR-10; diante de energia presente, interrompa a atividade e encaminhe a avaliação a profissional autorizado.</div>');
    m1l3.content = replaceAll(m1l3.content, '<li>Mantenha 2 metros de distância de partes energizadas sem EPI</li>', '<li>Não execute serviço próximo a partes energizadas dentro do escopo deste curso</li>');
  }
  const m1l4 = lesson(1,4); if (m1l4) {
    m1l4.content = replaceAll(m1l4.content, 'Use multímetro e teste nos 3 pontos: Fase-Neutro, Fase-Terra, Neutro-Terra. Todos devem marcar 0V.', 'Utilize instrumento adequado, íntegro e compatível: valide-o em fonte conhecida, verifique a ausência de tensão no ponto de trabalho e revalide-o ao final. Somente prossiga com indicação de ausência de tensão.');
    m1l4.content = replaceAll(m1l4.content, '<strong>Testar o funcionamento</strong><span>Verifique se a instalação está funcionando corretamente após a re-energização.</span>', '<strong>Comissionamento fora do exercício do aluno</strong><span>A eventual energização para verificação funcional deve ocorrer somente após encerramento do serviço e por responsável qualificado/autorizado, conforme o contexto aplicável.</span>');
    m1l4.content = replaceAll(m1l4.content, '<li>Sempre teste ausência de tensão nos 3 pontos após desligar</li>', '<li>Confirme ausência de tensão com instrumento adequado e procedimento validado</li>');
    m1l4.content = replaceAll(m1l4.content, '<li>Re-energize somente com área limpa e todos informados</li>', '<li>O aluno deste curso não realiza teste energizado como exercício prático</li>');
  }
  const m1l5 = lesson(1,5); if (m1l5) {
    m1l5.content = replaceAll(m1l5.content, 'Instale aterramento temporário se necessário, especialmente em instalações de médio/alta tensão.', 'O aterramento temporário, quando aplicável, exige procedimento técnico e competência apropriada. Não é atividade prática deste curso introdutório.');
    m1l5.content = replaceAll(m1l5.content, '<li><strong>4.</strong> Aterrar e curto-circuitar se necessário</li>', '<li><strong>4.</strong> Aterramento temporário apenas quando tecnicamente aplicável e executado por responsável competente</li>');
  }
  const m2l1 = lesson(2,1); if (m2l1) m2l1.content = replaceAll(m2l1.content, 'Ferramentas isoladas são a sua primeira linha de defesa contra choque elétrico acidental.', 'Ferramentas isoladas são recursos adicionais de segurança, mas não substituem seccionamento, bloqueio e confirmação de ausência de tensão.');
  const m2l2 = lesson(2,2); if (m2l2) {
    m2l2.content = '<div class="lesson-visual panel"><img src="assets/multimetro-zero.svg" alt="Instrumento verificando ausência de tensão"><div class="lesson-visual__copy"><h3>Ausência de tensão: confirme antes de tocar</h3><p>O exercício didático termina com o circuito desenergizado: valide o instrumento, confirme ausência no ponto e revalide o instrumento.</p></div></div>' + m2l2.content;
    m2l2.content += '<div class="alert alert-warning"><strong>Escopo prático:</strong> O aluno não realiza medições em circuito energizado para diagnóstico. A verificação de ausência de tensão é uma etapa de liberação segura após seccionamento e bloqueio.</div>';
  }
  const allHtmlLessons = COURSE_DATA.modules.flatMap(m => m.lessons);
  allHtmlLessons.forEach(l => {
    l.content = replaceAll(l.content, 'óleo vegetal ou talco', 'lubrificante próprio para passagem de cabos, compatível com a isolação');
    l.content = replaceAll(l.content, 'óleo vegetal', 'lubrificante apropriado e compatível com os cabos');
    l.content = replaceAll(l.content, 'Re-energize momentaneamente APENAS para medir com o multímetro.', 'Não reenergize o circuito para diagnóstico neste curso. Faça a identificação por continuidade, documentação e etiquetagem com o circuito bloqueado e sem tensão.');
    l.content = replaceAll(l.content, 'Re-energize momentaneamente', 'Não reenergize para medição dentro deste curso');
    l.content = replaceAll(l.content, 'tomada residencial obrigatoriamente a 1,10 m', 'altura de tomada definida pelo projeto, uso do ambiente e critérios aplicáveis');
    l.content = replaceAll(l.content, 'interruptor obrigatoriamente a 1,00 m', 'altura de interruptor definida pelo projeto e requisitos aplicáveis');
  });
  COURSE_DATA.modules[0].title = 'Segurança e limites do curso livre';
  COURSE_DATA.modules[0].description = 'Desenergização, bloqueio, sinalização e limites: nenhuma prática com energia ligada.';
})();
