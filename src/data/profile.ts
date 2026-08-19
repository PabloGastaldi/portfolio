import type { Profile } from '@/types/content';

export const profile: Profile = {
  name: 'Pablo Gastaldi',
  titlePrefix: 'Lic.',
  disciplines: ['Relaciones Internacionales', 'Análisis de datos', 'Comercio exterior'],
  tagline: 'Lic. en Relaciones Internacionales, analista de datos y builder con IA.',
  positioningLine:
    'Cruzo contexto, datos y código para entender problemas completos y construir lo que los resuelve.',
  intro: /* un sato de parrafo se hace con \n\n, un salto de linea simple con  */
    'Hola, soy Pablo. Tengo 26, vivo en Santa Fe y estudié Relaciones Internacionales. En el camino me crucé con los datos y el comercio exterior, y ya no pude parar de construir cosas. Hoy mezclo las tres porque sueltas no me alcanzan. Me enfoco en el detalle y en que lo que hago sirva de verdad.\nSi algo de esto te llamó la atención, escribime.',
  bio: 'Licenciado en Relaciones Internacionales con un perfil híbrido entre el análisis de datos y el comercio exterior. Combino una mirada geopolítica y económica con herramientas cuantitativas (Python, Tableau, SQL) para transformar información compleja en análisis claros y decisiones informadas. Experiencia en gestión, análisis y publicación de datos de comercio exterior, estructuración de bases de datos normativas y análisis internacional aplicado.',
  location: 'Santa Fe, Argentina',
  email: 'gastaldipablo1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pablogastaldigut/',
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B2' },
    { name: 'Italiano', level: 'B1' },
  ],
};
