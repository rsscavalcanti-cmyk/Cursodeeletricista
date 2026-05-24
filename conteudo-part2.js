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
<div class="key-point"><span class="key-point__icon">⚡</span><div><strong>Disjuntor Termomагнético</strong><p>Protege os cabos contra sobrecarga e curto-circuito. O termomагнético desliga por aquecimento (sobrecarga) ou por campo magnético (curto). Não protege contra choque elétrico.</p></div></div>
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
          { text: 'Qual componente do quadro protege as pessoas contra choque elétrico por corrente de fuga?', options: [{ text: 'Disjuntor termomагнético', correct: false }, { text: 'DPS (Dispositivo de Proteção contra Surtos)', correct: false }, { text: 'DR (Dispositivo Diferencial Residual)', correct: true }, { text: 'Barramento de neutro', correct: false }], explanation: 'O DR detecta diferença entre a corrente que entra e a que sai do circuito (corrente de fuga). O disjuntor protege os cabos; o DR protege as pessoas.' },
          { text: 'Como verificar se as luvas isolantes estão íntegras?', options: [{ text: 'Verificar visualmente apenas a parte externa', correct: false }, { text: 'Enrolar da ponta dos dedos ao punho pressionando o ar para dentro — verificar se há vazamento', correct: true }, { text: 'Mergulhar em água e verificar bolhas', correct: false }, { text: 'Usar apenas se compradas há menos de 1 ano', correct: false }], explanation: 'O teste de inflação (enrolar e pressionar o ar para dentro) detecta furos invisíveis a olho nu. Se sentir ar saindo, a luva está furada e deve ser descartada.' },
          { text: 'Ao medir ausência de tensão, quantos pares de pontos devem ser testados?', options: [{ text: 'Apenas 1 par (Fase-Neutro)', correct: false }, { text: '2 pares (Fase-Neutro e Fase-Terra)', correct: false }, { text: '3 pares (Fase-Neutro, Fase-Terra e Neutro-Terra)', correct: true }, { text: 'Apenas verificar se o display marca zero em qualquer ponto', correct: false }], explanation: 'Os 3 pares garantem que não há tensão em nenhuma combinação. Neutro pode estar com tensão por falha no sistema. Medir só um par não garante segurança.' }
        ]
      }
    };
