var _M2 =     {
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
<div class="lesson-section">
<h2 class="lesson-section-title">📡 Seleção de Escala: Autorange vs. Manual</h2>
<p>Multímetros modernos têm <strong>autorange</strong> — selecionam a escala automaticamente. Os modelos mais antigos exigem seleção manual. Entender a diferença evita erros e possíveis danos ao instrumento.</p>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">🔄</span><div><strong>Autorange</strong><p>Ajusta a escala automaticamente. Mais prático em campo — prefira sempre que disponível. A leitura pode levar 1 ciclo a mais para estabilizar após trocar de ponto.</p></div></div>
<div class="key-point"><span class="key-point__icon">⚙️</span><div><strong>Manual — escala abaixo da tensão</strong><p>O display mostrará <strong>"OL"</strong> (overload) ou <strong>"1"</strong> na ponta esquerda. <em>Nunca interprete OL como zero</em> — significa que a tensão excede a faixa selecionada. Em alguns modelos, aplicar tensão acima da escala pode danificar o instrumento permanentemente.</p></div></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🔋 Bateria Fraca — Sintomas e Verificação</h2>
<p>Bateria fraca é causa frequente de leituras instáveis ou falsas — especialmente perigosa porque você pode confiar em uma leitura de zero que não é zero.</p>
<ul class="lesson-list">
<li><strong>Sintoma visível:</strong> símbolo de bateria no display, dígitos piscando ou instáveis</li>
<li><strong>Sintoma sutil:</strong> leitura que oscila sem razão mesmo com as pontas paradas em ponto fixo</li>
<li><strong>Verificação:</strong> teste em tomada energizada conhecida — se a leitura divergir do esperado ou variar muito, troque a bateria antes de prosseguir</li>
</ul>
<div class="alert alert-warning"><strong>⚠️ Hábito profissional:</strong> Verifique a bateria no início da jornada de trabalho, não no momento em que você vai fazer uma medição crítica.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">⏱️ Protocolo Anti-Falso-Zero Completo</h2>
<p>Medidores digitais levam <strong>1 a 2 ciclos da rede (20–40 ms)</strong> para estabilizar. Retirar a ponta imediatamente pode capturar um valor de transição. Siga este protocolo completo:</p>
<ol class="steps-list">
<li>Teste em fonte conhecida e energizada — confirma que o instrumento está funcionando</li>
<li>Vá ao ponto de trabalho e meça os 3 pares (F-N, F-T, N-T), aguardando ao menos 2 segundos em cada ponto</li>
<li><strong>Após medir zero, toque as duas pontas entre si</strong> — deve bipar ou marcar próximo de 0Ω, confirmando que os cabos e pontas estão íntegros e que o zero anterior foi real</li>
<li>Somente após este passo declare o circuito sem tensão e inicie o trabalho</li>
</ol>
</div>
<div class="summary-section"><h2>📌 Pontos Importantes</h2><ul class="summary-list"><li>Selecionar ACV — nunca DCV para medir instalações</li><li>Testar o multímetro em fonte conhecida antes de confiar nele</li><li>Medir nos 3 pares: Fase-Neutro, Fase-Terra, Neutro-Terra, esperando 2s em cada</li><li>"OL" no display significa tensão acima da faixa selecionada — não é zero</li><li>Bateria fraca gera leituras falsas — verifique no início da jornada</li><li>Toque as pontas entre si após medir zero para confirmar integridade do instrumento</li></ul></div>`
        },
        {
          id: 3,
          title: 'Cabos e condutores: bitolas, cores e NBR 5410',
          duration: '~10 min',
          content: `
<p class="lesson-intro">Escolher o cabo errado é um dos erros mais comuns em instalações residenciais — e um dos mais perigosos. A NBR 5410 define as cores, bitolas e tipos de condutores para cada aplicação.</p>
<div class="lesson-section">
<h2 class="lesson-section-title">🎨 Código de Cores — NBR 5410</h2>
<div class="cable-colors">
<div class="cable-swatch" style="background:rgba(34,197,94,0.18);border:2px solid #22c55e;color:#22c55e;">
  <div class="cable-swatch-dot" style="background:#22c55e;border-color:rgba(34,197,94,0.5);"></div>
  <span>Verde / Verde-amarelo</span>
  <span class="cable-swatch-label" style="color:#22c55e;">⚡ Terra (PE)</span>
</div>
<div class="cable-swatch" style="background:rgba(59,130,246,0.18);border:2px solid #3b82f6;color:#3b82f6;">
  <div class="cable-swatch-dot" style="background:#3b82f6;border-color:rgba(59,130,246,0.5);"></div>
  <span>Azul claro</span>
  <span class="cable-swatch-label" style="color:#3b82f6;">〜 Neutro (N)</span>
</div>
<div class="cable-swatch" style="background:rgba(239,68,68,0.18);border:2px solid #ef4444;color:#ef4444;">
  <div class="cable-swatch-dot" style="background:#ef4444;border-color:rgba(239,68,68,0.5);"></div>
  <span>Preto / Vermelho / Branco</span>
  <span class="cable-swatch-label" style="color:#ef4444;">⚡ Fase (L)</span>
</div>
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
<h2 class="lesson-section-title">⚡ Curvas de Disjuntor: B, C e D</h2>
<p>A curva do disjuntor define a velocidade com que ele desliga na presença de corrente excessiva. Escolher a curva errada causa falsos desligamentos em motores ou proteção insuficiente em cargas resistivas.</p>
<table><thead><tr><th>Curva</th><th>Disparo instantâneo</th><th>Aplicação típica</th></tr></thead><tbody>
<tr><td><strong>B</strong></td><td>3 a 5 × In</td><td>Iluminação, tomadas, cargas resistivas (chuveiro, forno)</td></tr>
<tr><td><strong>C</strong></td><td>5 a 10 × In</td><td>Ar-condicionado, bomba d'água, compressor — cargas com motor</td></tr>
<tr><td><strong>D</strong></td><td>10 a 14 × In</td><td>Motores industriais de grande porte, transformadores</td></tr>
</tbody></table>
<div class="alert alert-warning"><strong>⚠️ Erro comum:</strong> Instalar disjuntor curva B em circuito de ar-condicionado. A corrente de partida do compressor (3–5× a nominal) pode superar o limiar B e o disjuntor viaja toda vez que o AC liga. A solução correta é trocar para curva C — não aumentar a corrente nominal.</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🌩️ Tipos de DPS: 1, 2 e 3</h2>
<p>O DPS é classificado por tipo conforme a origem do surto que protege. Instalar o tipo errado significa proteção inadequada ao risco real.</p>
<div class="key-points-card panel">
<div class="key-point"><span class="key-point__icon">⚡</span><div><strong>Tipo 1 — Raio direto (apenas em edificações com SPDA)</strong><p>Absorve a descarga que o próprio para-raios desvia para a rede elétrica. Desnecessário em residências sem para-raios instalado.</p></div></div>
<div class="key-point"><span class="key-point__icon">🔌</span><div><strong>Tipo 2 — Surtos de comutação ⭐ (padrão residencial)</strong><p>Protege contra surtos gerados pela rede da distribuidora (raio em linha próxima, operação de chaves). É o tipo padrão para residências — instalado diretamente no QDC.</p></div></div>
<div class="key-point"><span class="key-point__icon">🖥️</span><div><strong>Tipo 3 — Proteção de equipamentos</strong><p>Instalado próximo ao equipamento sensível (no-break, estabilizador, filtro de linha com DPS). Complementa o Tipo 2 para equipamentos de alto valor como computadores e TVs.</p></div></div>
</div>
</div>
<div class="lesson-section">
<h2 class="lesson-section-title">🛡️ Sensibilidade do DR: 10mA, 30mA e 300mA</h2>
<p>A sensibilidade define a corrente de fuga mínima que o DR detecta. Usar sensibilidade errada pode deixar de proteger pessoas.</p>
<table><thead><tr><th>Sensibilidade</th><th>Aplicação</th></tr></thead><tbody>
<tr><td><strong>10 mA</strong></td><td>Ambientes úmidos de alto risco: piscinas, saunas, hospitais (UTI)</td></tr>
<tr><td><strong>30 mA</strong></td><td>Proteção humana padrão — banheiros, área externa, garagem. <strong>Obrigatório pela NBR 5410</strong></td></tr>
<tr><td><strong>300 mA</strong></td><td>Proteção da instalação apenas — detecta falhas grandes antes de virar incêndio. <em>Não protege contra choque elétrico</em></td></tr>
</tbody></table>
<div class="alert alert-danger"><strong>⚡ CRÍTICO:</strong> DR de 300mA não protege contra choque elétrico. 100mA pode ser letal — um DR de 300mA deixaria essa corrente passar sem disparar. Para proteção humana use sempre 30mA ou menos.</div>
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
          { text: 'Você encontra uma chave de fenda com marcação "1000V" mas com uma rachadura visível no cabo isolante. O que deve fazer?', options: [{ text: 'Usar com cuidado, pois a marcação 1000V ainda é válida', correct: false }, { text: 'Verificar a profundidade da rachadura — se superficial, pode continuar usando', correct: false }, { text: 'Descartar imediatamente e marcar como "INUTILIZADA"', correct: true }, { text: 'Cobrir a rachadura com fita isolante e continuar usando', correct: false }], explanation: 'Qualquer defeito no isolamento — rachadura, corte, cola solta — exige descarte imediato. A rachadura invalida a proteção independente da marcação 1000V. Fita isolante sobre ferramenta elétrica danificada é falsa proteção e pode causar choque.' },
          { text: 'Qual cor identifica o condutor de proteção (terra) segundo a NBR 5410?', options: [{ text: 'Azul claro', correct: false }, { text: 'Vermelho', correct: false }, { text: 'Verde ou verde-amarelo', correct: true }, { text: 'Branco', correct: false }], explanation: 'A NBR 5410 determina verde ou verde-amarelo para o condutor de proteção (PE/terra). Azul claro é exclusivo do neutro.' },
          { text: 'Qual é a bitola mínima de cabo para circuito de tomadas gerais (TUG)?', options: [{ text: '1,5 mm²', correct: false }, { text: '2,5 mm²', correct: true }, { text: '4,0 mm²', correct: false }, { text: '6,0 mm²', correct: false }], explanation: 'A NBR 5410 exige mínimo de 2,5 mm² para tomadas de uso geral. Para iluminação, o mínimo é 1,5 mm².' },
          { text: 'Qual componente do quadro protege as pessoas contra choque elétrico por corrente de fuga?', options: [{ text: 'Disjuntor termomagnético', correct: false }, { text: 'DPS (Dispositivo de Proteção contra Surtos)', correct: false }, { text: 'DR (Dispositivo Diferencial Residual)', correct: true }, { text: 'Barramento de neutro', correct: false }], explanation: 'O DR detecta diferença entre a corrente que entra e a que sai do circuito (corrente de fuga). O disjuntor protege os cabos; o DR protege as pessoas.' },
          { text: 'Como verificar se as luvas isolantes estão íntegras?', options: [{ text: 'Verificar visualmente apenas a parte externa', correct: false }, { text: 'Enrolar da ponta dos dedos ao punho pressionando o ar para dentro — verificar se há vazamento', correct: true }, { text: 'Mergulhar em água e verificar bolhas', correct: false }, { text: 'Usar apenas se compradas há menos de 1 ano', correct: false }], explanation: 'O teste de inflação (enrolar e pressionar o ar para dentro) detecta furos invisíveis a olho nu. Se sentir ar saindo, a luva está furada e deve ser descartada.' },
          { text: 'Ao medir ausência de tensão, quantos pares de pontos devem ser testados?', options: [{ text: 'Apenas 1 par (Fase-Neutro)', correct: false }, { text: '2 pares (Fase-Neutro e Fase-Terra)', correct: false }, { text: '3 pares (Fase-Neutro, Fase-Terra e Neutro-Terra)', correct: true }, { text: 'Apenas verificar se o display marca zero em qualquer ponto', correct: false }], explanation: 'Os 3 pares garantem que não há tensão em nenhuma combinação. Neutro pode estar com tensão por falha no sistema. Medir só um par não garante segurança.' },
          { text: 'Um chuveiro elétrico de 7.500W será instalado em 220V. Qual é a corrente e a bitola mínima de cabo para esse circuito?', options: [{ text: 'I = 34A → cabo 6 mm² + disjuntor 40A', correct: true }, { text: 'I = 34A → cabo 4 mm² + disjuntor 40A', correct: false }, { text: 'I = 59A → cabo 10 mm² + disjuntor 63A', correct: false }, { text: 'I = 34A → cabo 2,5 mm² + disjuntor 20A', correct: false }], explanation: 'Cálculo: I = P/V = 7.500/220 = 34,1A. Pela NBR 5410, o cabo de 6 mm² suporta até 35A em conduto, e o disjuntor deve ser de 40A (próximo comercial acima de 34A). Cabo de 4 mm² (30A) estaria subdimensionado.' },
          { text: 'Um ar-condicionado com motor compressor desliga o disjuntor toda vez que é acionado, mas funciona normalmente depois. Qual é a causa mais provável e a solução correta?', options: [{ text: 'Disjuntor subdimensionado — aumentar a corrente nominal para o próximo valor', correct: false }, { text: 'Disjuntor curva B instalado em circuito com motor — substituir por curva C', correct: true }, { text: 'Cabo subdimensionado causando queda de tensão no acionamento', correct: false }, { text: 'DR com sensibilidade errada — ajustar para 300mA', correct: false }], explanation: 'O compressor puxa 3 a 5 vezes a corrente nominal nos primeiros 200ms ao ligar (corrente de partida/inrush). O disjuntor curva B dispara com 3–5× In, coincidindo com essa partida. A curva C tolera 5–10× In, resolvendo o problema sem alterar a corrente nominal de proteção.' }
        ]
      }
    };
