# Roda da Vida Integrada

Aplicação web em português, sem dependências externas. Requer Node.js 20 ou superior.

## Executar

Na pasta do projeto, execute `npm start`. A porta padrão é 3000; configure `PORT` se necessário. O servidor escuta em todas as interfaces. Para publicar, use uma hospedagem Node.js com HTTPS e comando de início `npm start`.

## Validar

Execute `npm test`. Os testes verificam somas, médias, notas zero e geração de perguntas por escala. A interface é servida pelo próprio Node, sem compilação.

## Avaliação

São 12 áreas, três níveis e 12 notas por nível (432 notas). Cada área e nível também possui as perguntas de responsável, periodicidade e minutos por ocorrência. Os tempos são opções discretas; a periodicidade define o intervalo. Cada escala mantém uma avaliação independente no navegador. Alterar o tipo de indivíduo altera a identificação da avaliação individual, não cria outra avaliação.

A escala das notas é 0–10. A soma máxima por área é 360; o gráfico usa a média das respostas existentes para manter o raio em 0–10 e indica somas parciais. Pontos ausentes não são tratados como zero. O JSON exportado inclui respostas, contexto e resultados por nível.

As áreas foram transcritas do gráfico fornecido por Paulo Bispo. As perguntas são uma proposta de matriz de interdependências; o documento não traz um questionário completo. Não é um instrumento clínico validado. Os dados ficam no armazenamento local deste navegador, sem envio a servidor. Não há contas, sincronização ou banco de dados. Exporte o JSON para guardar uma cópia; não há importação implementada.

## Panorama e relatório

O panorama aparece no início, antes das configurações e do questionário. O relatório usa a média do gráfico (0–10), e não a soma bruta (0–360): até 5 = negligência; a partir de 6 = diligência; entre 5 e 6 = faixa intermediária. Áreas com menos de 36 notas ficam pendentes. A classificação também consta no JSON exportado.

Na escala Individual, a duração não é perguntada nem exportada. Nas demais escalas, a opção Perpétuo representa atuação contínua e é salva como `perpetuo`, sem conversão numérica em minutos ou horas.
