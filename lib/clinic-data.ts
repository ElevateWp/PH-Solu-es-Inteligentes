export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}
export interface ClinicInformation {
  name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}
export const CLINIC_INFO: ClinicInformation = {
  name: 'PH Soluções Inteligentes', legalName: 'PH Soluções Inteligentes', tagline: 'Refrigeração, climatização e elétrica com qualidade, segurança e pontualidade.',
  primaryLocation: { street: '', suite: '', city: 'Campo Grande', state: 'Rio de Janeiro', postalCode: '', country: 'BR', directions: 'Campo Grande, Rio de Janeiro, RJ', landmarks: 'Atendimento em Campo Grande, Barra da Tijuca, Recreio e região' },
  contact: { phone: '+55 21 99481-7430', emergencyPhone: '+55 21 99481-7430', whatsapp: '+55 21 99481-7430' },
  identityHighlights: ['Instalação, manutenção e higienização de ar-condicionado', 'Serviços de refrigeração e câmaras frias', 'Instalações e reparos elétricos', 'Conversão e instalação de fogões a gás', 'Bombas d’água e bombas de piscina', 'Caldeiras, aquecedores e equipamentos comerciais'],
  schedule: ['Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado','Domingo'].map((day) => ({ day, hours: 'Atendimento 24 horas' })),
  verifiedStats: [
    { value: 5.0, suffix: '/5', label: 'Nota no Google', description: '22 avaliações de clientes' },
    { value: 22, suffix: '', label: 'Avaliações', description: 'Clientes recomendam o atendimento da PH' },
  ], accreditations: ['Atendimento inclusivo LGBTQ+'],
};
const teamId = 'paulo-henrique';
export const DENTISTS: TeamProfile[] = [{
  id: teamId, slug: 'paulo-henrique', name: 'Paulo Henrique', title: 'Técnico responsável',
  qualifications: 'Profissional de refrigeração, climatização e elétrica',
  specialization: 'Instalação, limpeza, manutenção e reparos de equipamentos',
  experienceYears: 0,
  bio: 'Paulo Henrique e a equipe da PH Soluções Inteligentes atendem residências e empresas no Rio de Janeiro. O trabalho é feito com atenção aos detalhes, comunicação clara e compromisso com a qualidade.',
  philosophy: 'Segurança, pontualidade, transparência e cuidado em cada atendimento.',
  education: [], memberships: [], specialties: CLINIC_INFO.identityHighlights,
  image: '/images/plumbing-technician.jpg', warmImage: '/images/plumbing-repair.jpg',
}];
const photos = ['/images/plumbing-technician.jpg','/images/plumbing-repair.jpg','/images/plumbing-pipes.jpg','/images/plumbing-hot-water.jpg'];
const serviceNames: [string,string][] = [
  ['instalacao-de-ar-condicionado','Instalação de ar-condicionado'],
  ['limpeza-e-higienizacao-de-ar-condicionado','Limpeza e higienização de ar-condicionado'],
  ['manutencao-e-conserto-de-ar-condicionado','Manutenção e conserto de ar-condicionado'],
  ['instalacoes-e-reparos-eletricos','Instalações e reparos elétricos'],
  ['refrigeracao-e-camaras-frias','Refrigeração e câmaras frias'],
  ['instalacao-e-conversao-de-fogao-a-gas','Instalação e conversão de fogão a gás'],
  ['bombas-dagua-e-de-piscina','Bombas d’água e de piscina'],
  ['caldeiras-e-aquecedores','Caldeiras e aquecedores'],
  ['conserto-de-maquina-de-lavar','Conserto de máquina de lavar'],
  ['manutencao-de-chopeira','Manutenção de chopeira'],
];
function createService([slug,name]: [string,string], index:number): ServiceDetail {
  const situations = ['Instalação, manutenção preventiva ou reparo do equipamento', 'Queda de desempenho, ruído ou falha no funcionamento', 'Avaliação técnica para escolher o serviço adequado'];
  const phone = '+55 21 99481-7430';
  return {
    slug,name,navLabel:name,tagline:name + ' no Rio de Janeiro, com atendimento cuidadoso e pontual.',
    shortDescription:'A PH Soluções Inteligentes atende ' + name.toLowerCase() + ' em Campo Grande, Barra da Tijuca, Recreio e região. Fale pelo WhatsApp para explicar o que precisa.',
    clinicalExplanation:'A equipe avalia o equipamento e o serviço necessário, explica as opções e combina os próximos passos com você. Cada atendimento é feito com atenção aos detalhes, segurança e compromisso com a qualidade.',
    whoNeeds:situations,
    benefits:['Atendimento atencioso e pontual','Explicação clara do serviço antes de começar','Serviços residenciais e comerciais'],
    indications:situations.map((condition)=>({condition,explanation:'Conte o que está acontecendo e, se puder, envie uma foto ou vídeo pelo WhatsApp para ajudar na avaliação inicial.'})),
    procedureSteps:[
      {stepNumber:1,title:'Conte o que precisa',duration:'Por telefone ou WhatsApp',description:'Explique o serviço ou o problema e, se for útil, envie uma foto ou vídeo.',clinicalDetails:'A equipe entende o contexto para orientar a avaliação inicial.'},
      {stepNumber:2,title:'Combine a visita',duration:'Conforme disponibilidade',description:'Converse sobre o local, o equipamento e o melhor horário para atendimento.',clinicalDetails:'O escopo do serviço é alinhado com você.'},
      {stepNumber:3,title:'Avaliação e orçamento',duration:'Antes do serviço',description:'O profissional avalia o equipamento e apresenta as opções de trabalho.',clinicalDetails:'O serviço e os custos são combinados antes da execução.'},
      {stepNumber:4,title:'Serviço e conferência',duration:'Conforme o serviço combinado',description:'A equipe realiza o trabalho acordado e confere o funcionamento do equipamento.',clinicalDetails:'O profissional explica o que foi feito ao concluir.'},
    ],
    recoveryTimeline:[
      {period:'Antes do atendimento',expectedSensations:'Explique o que precisa e informe o modelo do equipamento, se souber.',careProtocol:'Compartilhe fotos ou vídeos pelo WhatsApp para facilitar a conversa.'},
      {period:'Durante o serviço',expectedSensations:'O profissional apresenta a avaliação e explica o trabalho combinado.',careProtocol:'Deixe a área do equipamento livre para o atendimento.'},
      {period:'Depois do serviço',expectedSensations:'A equipe confere o funcionamento e orienta sobre o trabalho realizado.',careProtocol:'Entre em contato se precisar esclarecer algum detalhe do atendimento.'},
    ],
    costTransparency:{baseRange:'Solicite um orçamento pelo WhatsApp.',factors:['Tipo e modelo do equipamento','Serviço e peças necessários','Local e condições de acesso'],whatIsIncluded:['Avaliação do serviço solicitado','Explicação do trabalho recomendado','Alinhamento do orçamento antes da execução'],note:'O valor depende do equipamento e do serviço necessário; consulte a equipe para um orçamento.'},
    beforeAfterCase:{category:name,clinicalContext:'Serviço de refrigeração e manutenção realizado pela equipe.',beforeLabel:'Avaliação',afterLabel:'Serviço concluído',beforeImage:photos[index%photos.length],afterImage:photos[(index+1)%photos.length],timeframe:'Consulte a equipe sobre o prazo do serviço.'},
    assignedDentistId:teamId,
    faqs:[
      {question:'Como solicitar ' + name.toLowerCase() + '?',answer:'Entre em contato pelo WhatsApp ' + phone + ', explique o serviço e informe o local do atendimento.'},
      {question:'Posso enviar fotos ou um vídeo?',answer:'Sim. Envie fotos ou um vídeo pelo WhatsApp ' + phone + ' para explicar o que precisa.'},
      {question:'Quais regiões são atendidas?',answer:'A PH atende Campo Grande, Barra da Tijuca, Recreio e região. Consulte a equipe para confirmar disponibilidade no seu endereço.'},
      {question:'Quando recebo o orçamento?',answer:'A equipe conversa sobre o equipamento e o serviço, avalia o que é necessário e combina o orçamento antes de iniciar o trabalho.'},
    ],
  };
}
export const SERVICES: ServiceDetail[] = serviceNames.map(createService);
export interface EmergencyCondition { id:string; title:string; urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)'; symptoms:string[]; immediateAction:string[]; clinicTreatment:string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  {id:'falha-no-ar-condicionado',title:'Ar-condicionado parou de funcionar',urgency:'Same-Day (2–6 hours)',symptoms:['Equipamento não liga ou não refrigera','Ruído ou vazamento fora do habitual'],immediateAction:['Desligue o aparelho se houver cheiro de queimado ou risco elétrico.','Anote o modelo e quando o problema começou.','Envie uma foto ou vídeo pelo WhatsApp para explicar a situação.'],clinicTreatment:'Fale com a PH Soluções Inteligentes pelo WhatsApp para relatar o problema e combinar uma avaliação.'},
  {id:'falha-eletrica',title:'Falha elétrica',urgency:'Immediate (0–2 hours)',symptoms:['Cheiro de queimado, faíscas ou tomada aquecida','Disjuntor desarmando repetidamente'],immediateAction:['Se for seguro, desligue o circuito no disjuntor.','Não toque em fios expostos ou equipamentos molhados.','Procure ajuda profissional para avaliar a instalação.'],clinicTreatment:'Entre em contato com a PH Soluções Inteligentes para conversar sobre o atendimento elétrico.'},
];
export interface BlogPost { slug:string; title:string; category:string; readTime:string; publishDate:string; lastUpdated:string; authorId:string; excerpt:string; leadImage:string; relatedServiceSlug:string; content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]}; }
export const BLOG_POSTS: BlogPost[] = [
 {slug:'quando-higienizar-ar-condicionado',title:'Quando fazer a higienização do ar-condicionado',category:'Climatização',readTime:'3 min de leitura',publishDate:'2026-10-23',lastUpdated:'2026-10-23',authorId:teamId,excerpt:'A limpeza completa ajuda a cuidar do aparelho e da qualidade do ar em casa ou no trabalho.',leadImage:photos[1],relatedServiceSlug:'limpeza-e-higienizacao-de-ar-condicionado',content:{intro:'A higienização periódica do ar-condicionado ajuda a remover sujeira e odores e contribui para o bom funcionamento do equipamento. A PH Soluções Inteligentes realiza desmontagem para limpeza minuciosa e aplicação de bactericida.',sections:[{heading:'Fique atento aos sinais',body:'Poeira, odores, redução da eficiência e uso frequente podem indicar que é hora de avaliar a limpeza do aparelho.'},{heading:'Limpeza detalhada',body:'A equipe desmonta o equipamento para higienizar cuidadosamente as peças e aplica bactericida. O serviço ajuda a conservar o aparelho e evitar acúmulo de sujeira.'},{heading:'Agende pelo WhatsApp',body:'A PH atende Campo Grande, Barra da Tijuca, Recreio e região. Envie uma mensagem para conversar sobre a higienização.'}]}},
 {slug:'sinais-de-que-o-ar-condicionado-precisa-de-reparo',title:'Sinais de que seu ar-condicionado precisa de manutenção',category:'Climatização',readTime:'3 min de leitura',publishDate:'2026-10-23',lastUpdated:'2026-10-23',authorId:teamId,excerpt:'Refrigeração fraca, ruídos e falhas no aparelho são bons motivos para pedir uma avaliação técnica.',leadImage:photos[0],relatedServiceSlug:'manutencao-e-conserto-de-ar-condicionado',content:{intro:'Mudanças no funcionamento do ar-condicionado podem indicar que o aparelho precisa de avaliação. Descreva os sintomas e peça orientação à equipe.',sections:[{heading:'Observe o funcionamento',body:'Anote quando o problema acontece, se o aparelho ainda refrigera e se há ruídos ou odores diferentes.'},{heading:'Compartilhe os detalhes',body:'Uma foto, um vídeo e o modelo do aparelho ajudam a equipe a entender o cenário e orientar os próximos passos.'}]}},
 {slug:'cuidados-com-equipamentos-de-refrigeracao',title:'Cuidados com equipamentos de refrigeração comercial',category:'Refrigeração',readTime:'3 min de leitura',publishDate:'2026-10-23',lastUpdated:'2026-10-23',authorId:teamId,excerpt:'A manutenção de câmaras frias e equipamentos comerciais ajuda a acompanhar o desempenho e planejar reparos.',leadImage:photos[2],relatedServiceSlug:'refrigeracao-e-camaras-frias',content:{intro:'Equipamentos de refrigeração são importantes para a rotina de muitos negócios. Uma avaliação técnica pode ajudar a identificar falhas e planejar manutenção.',sections:[{heading:'Acompanhe o desempenho',body:'Observe variações de temperatura, ruídos e mudanças no funcionamento do equipamento.'},{heading:'Converse com um técnico',body:'Informe o tipo de equipamento, o local e o que percebeu para combinar uma avaliação e discutir as opções de serviço.'}]}},
 {slug:'como-solicitar-um-servico-eletrico',title:'Como solicitar um serviço elétrico com segurança',category:'Elétrica',readTime:'3 min de leitura',publishDate:'2026-10-23',lastUpdated:'2026-10-23',authorId:teamId,excerpt:'Informações sobre o local e o tipo de instalação ajudam a planejar a avaliação elétrica.',leadImage:photos[3],relatedServiceSlug:'instalacoes-e-reparos-eletricos',content:{intro:'Para solicitar um serviço elétrico, descreva a instalação e o que precisa ser feito. A avaliação ajuda a definir o escopo e combinar o atendimento.',sections:[{heading:'Explique o que precisa',body:'Informe o endereço, a área do imóvel e se é uma instalação nova ou um reparo.'},{heading:'Priorize a segurança',body:'Se houver faíscas, cheiro de queimado ou fios expostos, mantenha distância e desligue o circuito apenas se for seguro.'}]}},
];
export const CUSTOMER_REVIEWS = [
 {name:'Filipe',date:'3 meses atrás',text:'Trabalho honesto e preço justo. Muito simpáticos, profissionais e atenciosos. Sucesso para vocês!'},
 {name:'Micael Tavares',date:'2 meses atrás',text:'Paulinho é meu parceiro há anos… trabalha muito bem! Pode ligar para ele sem pensar duas vezes.'},
 {name:'Jhonatan Pinho',date:'2 meses atrás',text:'Meu ar-condicionado está gelando muito bem. Atendimento rápido!'},
 {name:'Leila Cristina Saraiva',date:'1 ano atrás',text:'Excelente atendimento do primeiro contato até os últimos detalhes. O técnico é muito qualificado e faz um trabalho minucioso, cuidadoso e atencioso. O ar-condicionado foi higienizado e o ambiente ficou com um cheiro maravilhoso. Recomendo muito!'},
 {name:'Everton Dias',date:'2 meses atrás',text:'Excelente serviço e atenção meticulosa aos detalhes.'},
 {name:'Silvana Viana',date:'1 ano atrás',text:'Fiquei muito satisfeita com o atendimento do Sr. Paulo. Ele foi prestativo e paciente ao responder minhas dúvidas. Instalou meu ar-condicionado perfeitamente. Recomendo muito.'},
 {name:'Gabriel Anjos',date:'1 ano atrás',text:'Paulo Henrique e Priscila nos atenderam e foram nossos salvadores! Chegaram em 30 minutos e resolveram nosso problema rapidamente. Pode confiar!'},
];
