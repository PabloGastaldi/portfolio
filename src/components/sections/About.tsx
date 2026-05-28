import { Section } from '@/components/ui/Section';
import { profile } from '@/data/profile';

const PILLARS = [
  {
    icon: '🌐',
    title: 'Relaciones Internacionales y geopolítica tech',
    description:
      'Mi formación de base. Entiendo el contexto en el que se mueven los datos: competencia entre potencias, semiconductores, minerales críticos, regulación de IA. Esa lente cambia cómo uno interpreta los números.',
  },
  {
    icon: '📦',
    title: 'Comercio exterior',
    description:
      'Dominio concreto: NCM, aranceles, normativa AFIP/Aduana, liquidaciones. Es el terreno donde aplico el análisis. Saber de qué hablamos antes de modelarlo hace toda la diferencia.',
  },
  {
    icon: '📊',
    title: 'Análisis de datos',
    description:
      'SQL, Python (pandas), Tableau, Power BI. Convierto datos crudos en decisiones. No dashboards decorativos: análisis que responden preguntas de negocio.',
  },
  {
    icon: '🤖',
    title: 'Desarrollo con IA',
    description:
      'El diferencial real. No "uso ChatGPT": construyo software con IA. RAG, embeddings, integración de APIs de modelos, agentes. trade.ai es la prueba: una plataforma funcional en producción, no un demo.',
  },
];

export function About() {
  return (
    <Section id="about" label="Sobre mí" heading="Sobre mí">
      <div className="flex flex-col gap-8">
        <p className="max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
          {profile.bio}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-2 rounded-xl border border-border p-5"
            >
              <span className="text-2xl" aria-hidden="true">
                {pillar.icon}
              </span>
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
