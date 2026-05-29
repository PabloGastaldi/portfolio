import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'trade-ai',
    title: 'trade.ai',
    image: '/projects/trade-ai.png',
    summary:
      'Plataforma de inteligencia para comercio exterior. Construida con IA: RAG, embeddings e integración de APIs de modelos. Convierte normativa, NCM y datos de exportación en decisiones accionables.',
    description:
      'trade.ai permite consultar el corpus de normativa de comercio exterior (NCM, aranceles, AFIP, Aduana) en lenguaje natural. Usa RAG sobre documentos reales y modelos de embeddings para recuperar contexto relevante antes de generar respuestas. No es un chatbot genérico: es un sistema especializado en el dominio de comex argentino.',
    stack: ['Next.js', 'Python', 'RAG', 'Embeddings', 'APIs de modelos', 'PostgreSQL'],
    highlights: [
      'RAG sobre corpus de normativa NCM y AFIP',
      'Pipeline de embeddings para recuperación semántica',
      'Integración con APIs de modelos (Claude, OpenAI)',
      'UI conversacional para consultas en lenguaje natural',
      'Plataforma funcional en producción — no un demo',
    ],
    featured: true,
    order: 0,
    links: [{ label: 'Visitar tradeai.ar', href: 'https://tradeai.ar' }],
  },
  {
    slug: 'perfil-exportador',
    title: 'Perfil Exportador de la Ciudad de Santa Fe',
    image: '/projects/perfil-exportador.png',
    summary: 'Perfil exportador desarrollado para ACICE, documento orientado al análisis de las exportaciones de empresas santafesinas. Para su elaboración se utilizaron Python, SQL, Excel y Power BI con el objetivo de procesar, estructurar y visualizar datos de comercio exterior argentino. El proyecto combinó automatización y análisis económico para transformar bases dispersas en información estratégica orientada a la toma de decisiones.',
    description: 'Se construyó un pipeline de limpieza y normalización de datos comerciales, integrando múltiples fuentes para analizar exportaciones, sectores productivos y evolución de mercados internacionales. Más allá de la dimensión técnica, el trabajo requirió interpretación coyuntural y criterio político-económico para contextualizar tendencias, cambios regulatorios y dinámicas del comercio internacional.',
    stack: ['Python', 'SQL', 'Excel', 'Power BI'],
    highlights: [
      'Procesamiento y limpieza de datos con Python y SQL',
      'Modelado y visualización estratégica en Power BI',
      'Automatización y normalización de bases comerciales',
      'Análisis de exportaciones y desempeño sectorial',
      'Interpretación político-económica y análisis coyuntural',
      'Transformación de datos en información orientada a toma de decisiones',
    ],
    featured: false,
    order: 1,
    links: [{ label: 'Ver perfil exportador', href: 'https://santafeciudad.gov.ar/wp-content/uploads/2026/05/SF_PerfilExportador_ACICE_2025.pdf' }],
  },
  {
    slug: 'litio-argentina',
    title: 'Análisis de explotación minera de Litio en Argentina',
    summary:
      'Trabajo en curso: análisis de datos sobre la explotación minera de litio en Argentina, con foco en producción, exportaciones y dinámica geopolítica de minerales críticos.',
    description: '',
    stack: [],
    highlights: [],
    upcoming: true,
    order: 2,
    links: [],
  },
  {
    slug: 'dashboard-finanzas',
    title: 'Dashboard de operaciones bursátiles',
    image: '/projects/dashboard-finanzas.png',
    summary:
      'Tablero personal para ordenar y entender mi operatoria en acciones. Construido con Python y scraping de los reportes PDF del broker, transformados en datos limpios listos para visualizar.',
    description:
      'Surge de un objetivo personal concreto para 2026: ordenar y entender mis finanzas vinculadas a operaciones bursátiles, y usar el proceso como aprendizaje práctico de Python y visualización de datos. El dashboard consolida volumen operado, ticket promedio, cantidad de operaciones, distribución temporal, concentración por activo y comportamiento semanal. El foco inicial no es medir el rendimiento sino entender el patrón de operatoria. El principal desafío fue el origen de los datos: el broker entrega los reportes en PDF, así que armé un scraper en Python que extrae los movimientos y los transforma en tablas limpias. Próximo paso: sumar PnL, curva de equity, drawdown y métricas de eficiencia para pasar de un tablero descriptivo a uno verdaderamente analítico.',
    stack: ['Python', 'pandas', 'PDF Scraping', 'Visualización de datos'],
    highlights: [
      'Scraper en Python para extraer operaciones desde los reportes PDF del broker',
      'Métricas operativas: volumen, ticket promedio, distribución temporal, concentración por activo',
      'Foco en entender el comportamiento, no en medir el rendimiento',
      'Roadmap: PnL, curva de equity, drawdown y métricas de eficiencia',
    ],
    order: 3,
    links: [],
  },
];
