import heroCasaAlvorada from '../assets/images/hero_casa_alvorada_1794943212695.jpg';
import projetoResidenciaIpe from '../assets/images/projeto_residencia_ipe_1794943213271.jpg';
import projetoSedeAurum from '../assets/images/projeto_sede_aurum_1794943213620.jpg';
import projetoGaleriaMonolito from '../assets/images/projeto_galeria_monolito_1794943213787.jpg';
import projetoApartamentoSerra from '../assets/images/projeto_apartamento_serra_1794943214229.jpg';
import estudioLucasFerreira from '../assets/images/estudio_lucas_ferreira_1794943215522.jpg';
import type {
  CreativeStep,
  MaterialPrinciple,
  ProjectItem,
  StudioMetric,
} from '../types';

export const STUDIO_INFO = {
  brandName: 'Lucas Ferreira',
  fullBrandName: 'Lucas Ferreira Arquitetura',
  address: 'SEU ENDEREÇO AQUI',
  phone: '(00) 00000-0000',
  hours: 'Não informado',
  whatsappHref:
    'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20um%20projeto%20com%20Lucas%20Ferreira%20Arquitetura.',
  mapsUrl:
    'https://maps.google.com/?cid=10789693687204539323&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  email: 'contato@lucasferreiraarquitetura.com.br',
};

export const HERO_FEATURED_IMAGE = {
  src: heroCasaAlvorada,
  alt: 'Residência Casa Alvorada com volumes em concreto aparente em balanço, forro de madeira natural e espelho d’água ao pôr do sol',
  captionTitle: 'Casa Alvorada',
  captionMeta: 'Residencial Autoral · 640 m² · 2025',
};

export const STUDIO_PORTRAIT_IMAGE = {
  src: estudioLucasFerreira,
  alt: 'Arquiteto Lucas Ferreira em seu estúdio diante de maquete em madeira, amostras de pedra natural e pranchas técnicas',
};

export const STUDIO_METRICS: StudioMetric[] = [
  {
    value: 42,
    suffix: '+',
    label: 'Obras Entregues',
    detail: 'Residências autorais e sedes corporativas concluídas',
  },
  {
    value: 14,
    suffix: ' anos',
    label: 'Prática de Estúdio',
    detail: 'Atuação dedicada à arquitetura e ao desenho espacial',
  },
  {
    value: 18500,
    suffix: ' m²',
    label: 'Área Projetada',
    detail: 'Rigor técnico em soluções bioclimáticas e estruturais',
  },
  {
    value: 9,
    suffix: '',
    label: 'Premiações & Mostras',
    detail: 'Reconhecimentos nacionais em publicações de arquitetura',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'casa-alvorada',
    title: 'Casa Alvorada',
    category: 'Residencial',
    year: '2025',
    area: '640 m²',
    location: 'Condomínio Reserva da Mata',
    materials: 'Concreto aparente ripado, cumaru, travertino bruto',
    summary:
      'Volume horizontal em balanço que suspende a ala íntima sobre o espelho d’água e integra a área social à paisagem natural.',
    concept:
      'Implantada segundo a orientação solar predominante, a residência utiliza grandes vãos estruturais em concreto protendido para eliminar pilares periféricos e instaurar transparência contínua entre estar, varanda e jardim.',
    image: heroCasaAlvorada,
    imageAlt:
      'Fachada contemporânea da Casa Alvorada em concreto aparente e madeira com espelho d’água refletindo a luz dourada',
    featured: true,
  },
  {
    id: 'residencia-ipe',
    title: 'Pavilhão Ipê',
    category: 'Residencial',
    year: '2024',
    area: '485 m²',
    location: 'Jardim Europa',
    materials: 'Travertino romano, freijó maciço, caixilhos em aço',
    summary:
      'Living com pé-direito duplo desenhado para coreografar a incidência de luz natural ao longo das estações.',
    concept:
      'A escada helicoidal em concreto moldado in loco articula os dois pavimentos como peça escultórica, enquanto o forro ripado em freijó assegura conforto acústico e calor tátil à composição.',
    image: projetoResidenciaIpe,
    imageAlt:
      'Sala de estar com pé-direito duplo, piso em travertino, forro em madeira freijó e iluminação natural geométrica',
  },
  {
    id: 'sede-aurum',
    title: 'Sede Corporativa Aurum',
    category: 'Comercial',
    year: '2025',
    area: '1.120 m²',
    location: 'Eixo Faria Lima',
    materials: 'Ardósia escovada, latão patinado, carvalho americano',
    summary:
      'Atmosfera institucional sóbria e acolhedora para escritório de gestão patrimonial, guiada por luz indireta e pedra escura.',
    concept:
      'O balcão monolítico em latão escovado ancora a recepção diante de brises verticais de madeira que filtram a iluminação natural do átrio e preservam a privacidade das salas de conselho.',
    image: projetoSedeAurum,
    imageAlt:
      'Lobby corporativo sofisticado com paredes de ardósia escura, balcão em latão escovado e brises verticais de madeira',
  },
  {
    id: 'galeria-monolito',
    title: 'Galeria & Atelier Monólito',
    category: 'Comercial',
    year: '2024',
    area: '790 m²',
    location: 'Distrito Cultural',
    materials: 'Basalto negro, concreto aparente, vidro extra-clear',
    summary:
      'Pavilhão expositivo e estúdio de curadoria que contrapõe a solidez da pedra basáltica à leveza do térreo envidraçado.',
    concept:
      'Cercado por lâmina d’água reflexiva, o volume superior abriga arquivos e reserva técnica em ambiente hermético, liberando o pavimento térreo para exposições temporárias com iluminação museográfica.',
    image: projetoGaleriaMonolito,
    imageAlt:
      'Pavilhão cultural contemporâneo no crepúsculo em basalto negro e vidro iluminado sobre espelho d’água',
  },
  {
    id: 'cobertura-serra',
    title: 'Cobertura Horizonte',
    category: 'Interiores',
    year: '2025',
    area: '360 m²',
    location: 'Alto de Pinheiros',
    materials: 'Mármore Nero Marquina, nogueira canaletada, latão',
    summary:
      'Arquitetura de interiores para cobertura duplex com marcenaria autoral contínua e ilha monolítica em pedra escura.',
    concept:
      'Pensado para recepções intimistas à noite, o projeto equilibra painéis verticais em nogueira, iluminação linear sob medida e mobiliário brasileiro contemporâneo voltado para a vista panorâmica.',
    image: projetoApartamentoSerra,
    imageAlt:
      'Interior de cobertura noturna com ilha monolítica em mármore Nero Marquina, marcenaria em nogueira e pendente em latão',
  },
];

export const MATERIAL_PRINCIPLES: MaterialPrinciple[] = [
  {
    title: 'Verdade Construtiva',
    description:
      'Concreto aparente, pedra natural e madeira certificada assumem sua textura autêntica, envelhecendo com dignidade e baixa manutenção.',
  },
  {
    title: 'Luz como Matéria-Prima',
    description:
      'Estudos de insolação, brises calculados e aberturas zenitais modulam o contraste entre sombra acolhedora e claridade difusa.',
  },
  {
    title: 'Proporção & Silêncio Visual',
    description:
      'Eliminação de ornamentos supérfluos em favor de alinhamentos precisos, circulações fluidas e acústica cuidadosamente tratada.',
  },
];

export const CREATIVE_PROCESS: CreativeStep[] = [
  {
    number: '01.',
    title: 'Imersão & Programa',
    description:
      'Leitura minuciosa do terreno, legislação urbanística, orientação solar e rotina dos moradores ou da operação corporativa.',
    deliverable: 'Estudo de Viabilidade & Briefing Estruturado',
  },
  {
    number: '02.',
    title: 'Conceito & Volumetria',
    description:
      'Definição do partido arquitetônico, implantação, maquetes físicas e digitais para validação de proporções, fluxos e luz.',
    deliverable: 'Anteprojeto Arquitetônico & Maquete 3D',
  },
  {
    number: '03.',
    title: 'Detalhamento Executivo',
    description:
      'Compatibilização integral com engenharia estrutural, luminotécnica, climatização e desenhos de marcenaria em escala milimétrica.',
    deliverable: 'Caderno Executivo & Memorial Descritivo',
  },
  {
    number: '04.',
    title: 'Curadoria de Obra',
    description:
      'Acompanhamento técnico nas etapas decisivas de execução, seleção de chapas de pedra, amostras e entrega final com rigor autoral.',
    deliverable: 'Fiscalização Estética & Entrega Chave na Mão',
  },
];
