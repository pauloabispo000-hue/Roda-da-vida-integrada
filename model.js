export const areas=['Energia e combustíveis','Habitações e edificações','Transportes e logísticas','Acompanhamentos e assistências','Saneamentos e eliminações','Educações e pesquisas','Informações e comunicações','Entretenimentos e lazeres','Políticas e lideranças','Seguranças e confortos','Matérias-primas e reciclagens','Alimentos e medicamentos'];
export const levels=['Operacional','Gerencial','Estratégico'];
export const scales=['Individual','Familiar','Empresarial','Comunitária','Municipal'];
export function areaName(i,scale){return i===0&&['Individual','Familiar'].includes(scale)?'Energia':areas[i];}
export function actors(scale){return {Individual:['Eu','Outro'],Familiar:['Eu','Marido','Esposa','Empregada','Sogra','Sogro','Avô','Avó',...Array.from({length:12},(_,i)=>`Filho#${i+1}`)],Empresarial:['Eu','Operador da área','Auxiliar da área','Supervisor da área','Gerente da área','Diretor','Prestador de serviço'],Comunitária:['Eu','Morador','Voluntário','Agente comunitário','Associação de moradores','Coordenador comunitário','Liderança comunitária','Serviço público'],Municipal:['Eu','Servidor municipal','Equipe técnica','Coordenador','Secretário municipal','Prefeito','Concessionária','Organização parceira']}[scale];}
const relations=['disponibilidade de','infraestrutura para utilização de','transporte e logística de','acompanhamento e assistência para','saneamento e eliminação relacionados a','educação e pesquisa sobre','informação e comunicação sobre','entretenimento e lazer associados a','políticas e liderança para','segurança e conforto no uso de','matérias-primas e reciclagem relacionadas a','alimentação e cuidados associados a'];
const explanationTargets={
 Individual:['a energia do organismo','o corpo e suas condições físicas','a mobilidade pessoal','os cuidados e acompanhamentos pessoais','a higiene e a eliminação de resíduos do organismo','o aprendizado e a pesquisa pessoal','o acesso a informações e a comunicação pessoal','o descanso e as atividades de lazer','as decisões e a organização pessoal','a proteção e o conforto pessoal','os materiais de uso pessoal e seu reaproveitamento','a alimentação e o uso de medicamentos'],
 Familiar:['a eletricidade da residência','a moradia da família','os deslocamentos da família','os cuidados com os familiares','a limpeza, o esgoto e o lixo doméstico','o aprendizado dos familiares','a comunicação e as informações da família','o lazer da família','as decisões e os acordos familiares','a segurança e o conforto da casa','os materiais domésticos e a reciclagem','as refeições e os medicamentos da família'],
 Empresarial:['a eletricidade e os combustíveis da empresa','os espaços e as instalações da empresa','o transporte e a logística da empresa','o atendimento e a assistência às equipes','a limpeza e a destinação de resíduos da empresa','a capacitação e a pesquisa na empresa','as informações e a comunicação da empresa','o descanso e o lazer das equipes','a gestão e as decisões da empresa','a segurança e o conforto no trabalho','os insumos e a reciclagem na empresa','a alimentação e os cuidados de saúde das equipes'],
 Comunitária:['a energia e os combustíveis da comunidade','os espaços e as edificações comunitárias','a mobilidade da comunidade','o apoio e a assistência aos moradores','o saneamento e a gestão de resíduos da comunidade','a educação e a pesquisa na comunidade','a comunicação e as informações comunitárias','o lazer e a convivência comunitária','as decisões e as lideranças comunitárias','a segurança e o conforto dos moradores','os materiais e a reciclagem comunitária','a alimentação e o acesso a medicamentos na comunidade'],
 Municipal:['a energia e os combustíveis do município','as edificações e os espaços municipais','a mobilidade e a logística municipal','os serviços municipais de assistência','o saneamento e a gestão de resíduos municipais','a educação e a pesquisa no município','as informações e a comunicação municipal','os espaços e as atividades de lazer municipais','as políticas e a gestão municipal','a segurança e o conforto da população','os insumos e a reciclagem no município','a alimentação e o acesso a medicamentos no município']
};
const individualEnergyExplanations=['acúmulo de gordura corporal','condições do corpo para utilizar suas reservas de energia','Acúmulo de gordura corporal','acompanhamento profissional da disposição e do metabolismo','Evacuação e micção','aprender sobre metabolismo e necessidades energéticas','compreender os sinais de fome, saciedade e cansaço','equilibrar descanso, lazer e gasto de energia','seguir dieta alimentar','utilizar as reservas de energia sem comprometer a saúde','diversidade de alimentos consumidos e velocidade de cicatrização','Ingerir alimentos que geram energia e medicamentos naturais'];
const individualEnergyManagerialExplanations=[
 'prever a demanda de calorias diárias',
 'planejar a capacidade energética disponível',
 'planejar emagrecimento por perda de gordura',
 'planejar comparecer em consultas profissionais — nutricionista, médico etc.',
 'planejar rotinas de evacuação e micção',
 'planejar estudos e capacitações, alocar tempo para aprendizado sobre a energia do organismo',
 'planejar e controlar os tipos de alimentos ingeridos quando sente fome',
 'planejar e controlar alimentos de fast food e ricos em gorduras e açúcares',
 'planejar a dieta alimentar e acompanhar os recursos e a rotina para segui-la',
 'planejar medidas de segurança alimentar individual',
 'planejar a aquisição de alimentos e seu reaproveitamento',
 'planejar a aquisição de diversidade de alimentos e medicamentos naturais e controlar o consumo'
];
export function explanation(area,relation,scale){
 if(scale==='Individual'&&area===0)return individualEnergyExplanations[relation];
 const target=explanationTargets[scale][area];
 if(area===relation)return `dispor de recursos suficientes para garantir ${target}`;
 const actions=[`garantir energia para manter ${target}`,`dispor de espaços e equipamentos adequados para ${target}`,`organizar deslocamentos, entregas e acesso para viabilizar ${target}`,`obter orientação, acompanhamento e apoio para ${target}`,`cuidar da higiene e destinar os resíduos relacionados a ${target}`,`desenvolver conhecimentos e pesquisar melhorias para ${target}`,`obter e compartilhar informações confiáveis sobre ${target}`,`conciliar descanso, entretenimento e lazer com ${target}`,`definir prioridades, responsabilidades e regras para ${target}`,`prevenir riscos e garantir condições confortáveis para ${target}`,`obter materiais e reaproveitar recursos para ${target}`,`garantir alimentação e cuidados de saúde a quem mantém ${target}`];
 if(scale==='Individual'&&relation===1)return `considerar as condições do corpo para manter ${target}`;
 return actions[relation];
}
export function question(area,relation,scale,level=0){
 const energy={Individual:'energia e combustível biológicos individuais',Familiar:'energia elétrica residencial',Empresarial:'energia elétrica empresarial e combustíveis da empresa',Comunitária:'energia elétrica comunitária e combustíveis da comunidade',Municipal:'energia elétrica municipal e combustíveis do município'};
 const contexts={Individual:'do indivíduo avaliado',Familiar:'da família',Empresarial:'da empresa',Comunitária:'da comunidade',Municipal:'do município'};
 const subject=area===0?energy[scale]:`${areaName(area,scale).toLocaleLowerCase('pt-BR')} ${contexts[scale]}`;
 const relationText=scale==='Individual'&&area===0&&relation===11?'os alimentos e medicamentos relacionados à':relation===area?'a disponibilidade de':scale==='Individual'&&relation===1?'o corpo biológico para utilização de':`${[2,3,4,7].includes(relation)?'o':relation===8||relation===10?'as':'a'} ${relations[relation]}`;
 const operationalExplanation=explanation(area,relation,scale);
 if(level===1){
  const resourceControls=['prever a demanda, distribuir os recursos energéticos e acompanhar seu consumo','planejar a capacidade disponível, organizar os recursos e acompanhar sua utilização','programar deslocamentos, distribuir os meios de transporte e controlar prazos','organizar o apoio disponível, distribuir responsabilidades e acompanhar os atendimentos','planejar rotinas de saneamento, reservar recursos e acompanhar sua execução','planejar estudos e capacitações, alocar tempo e acompanhar o aprendizado','organizar as fontes de informação, os canais e o acompanhamento da comunicação','planejar atividades de entretenimento e lazer, reservar tempo e controlar os recursos','organizar planos de ação, distribuir responsabilidades e acompanhar os resultados','planejar medidas de proteção, alocar recursos e acompanhar riscos e conforto','planejar a obtenção e o reaproveitamento de materiais e controlar sua utilização','planejar o acesso a alimentos e medicamentos e acompanhar os recursos e sua utilização'];
  const detail=scale==='Individual'&&area===0?individualEnergyManagerialExplanations[relation]:`${resourceControls[relation]}, considerando ${explanationTargets[scale][area]}`;
  return `Qual o grau de satisfação com o planejamento e o controle dos recursos disponíveis para ${relationText} ${subject} (${detail})?`;
 }
 if(level===2){
  const strategicActions=['definir a condição energética desejada, metas de suficiência e desafios futuros','definir as condições desejadas de estrutura, metas de adequação e desafios de longo prazo','definir objetivos de acesso e mobilidade, metas de logística e desafios futuros','definir o propósito da assistência, metas de cobertura e desafios de continuidade','definir objetivos de higiene e eliminação, metas de melhoria e desafios futuros','definir o propósito do aprendizado, metas de desenvolvimento e desafios de conhecimento','definir objetivos de comunicação, metas de acesso à informação e desafios futuros','definir o papel do entretenimento e lazer, metas de qualidade de vida e desafios futuros','definir o propósito das decisões, a situação futura desejada e metas para superar os desafios','definir objetivos de proteção e conforto, metas de prevenção e desafios futuros','definir objetivos de uso e renovação de materiais, metas de reaproveitamento e desafios futuros','definir objetivos de alimentação e cuidados, metas de acesso e desafios de continuidade'];
  const detail=scale==='Individual'&&area===0&&relation===8?'definir o propósito da dieta alimentar, os objetivos de saúde, as metas e os desafios para mantê-la':`${strategicActions[relation]}, considerando ${explanationTargets[scale][area]}`;
  return `Qual o grau de satisfação com a definição da missão, da visão, dos objetivos, das metas e dos desafios para ${relationText} ${subject} (${detail})?`;
 }
 return `Qual o grau de satisfação com ${relationText} ${subject} (${operationalExplanation})?`;
}
export function score(answers,area,level=null){const values=[];for(let l=0;l<3;l++)if(level===null||l===level)for(let q=0;q<12;q++){const v=answers[`${area}-${l}-${q}`];if(Number.isInteger(v)&&v>=0&&v<=10)values.push(v);}const sum=values.reduce((a,b)=>a+b,0);return {sum,count:values.length,max:level===null?360:120,average:values.length?sum/values.length:null};}

export function classification(result){
 if(result.count!==36||result.average===null)return 'Pendente';
 if(result.average<=5)return 'Negligência';
 if(result.average>=6)return 'Diligência';
 return 'Faixa intermediária';
}
