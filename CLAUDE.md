# CLAUDE.md — Portfolio de Pablo Gastaldi

## Qué es este proyecto

Sitio web personal de tipo portfolio. Su único objetivo es que empresas y reclutadores
me conozcan y me contacten para contratarme. NO es un sitio para vender servicios ni
un producto comercial. Es una carta de presentación profesional.

El perfil que vende este sitio es el de un **analista de datos y builder con IA** con
formación en Relaciones Internacionales. El sitio se construye sobre cuatro pilares que
deben quedar claros para cualquiera que entre:

1. **Relaciones Internacionales / geopolítica tecnológica** — la formación de base y la
   lente para entender el contexto (competencia tecnológica entre potencias, minerales
   críticos, semiconductores, computación cuántica).
2. **Comercio exterior (Comex)** — dominio de negocio concreto: normativa, NCM,
   aranceles, datos de exportación. Es el terreno donde aplico todo lo demás.
3. **Análisis de datos** — SQL, Python (pandas), Tableau, Power BI. Convierto datos
   crudos en decisiones y visualizaciones.
4. **Desarrollo con IA** — y este es el diferencial más fuerte: no solo "uso ChatGPT".
   Construyo software real con IA y agentes (Claude Code, RAG, embeddings, integración
   de APIs de modelos). trade.ai es la prueba: una plataforma funcional, no un demo.

El mensaje central del sitio: alguien que **entiende el contexto geopolítico/comercial
Y construye soluciones reales con IA y datos**. Ese cruce poco común es lo que se vende.
Importante: que el uso de IA y agentes se demuestre con proyectos y resultados, no que
se afirme con adjetivos. Mostrar, no decir.

## Persona del sitio (datos reales)

- Nombre: Pablo Gastaldi
- Título: Licenciado en Relaciones Internacionales (Universidad Católica de Santa Fe)
- Ubicación: Santa Fe, Argentina
- Email de contacto: gastaldipablo1@gmail.com
- LinkedIn: https://www.linkedin.com/in/pablogastaldigut/
- Proyecto destacado: trade.ai — https://tradeai.ar
- Idiomas: español (nativo), inglés B2, italiano B1

El detalle completo de experiencia, formación y skills está en el CV; usar ese
contenido como fuente de verdad para las secciones de Experiencia, Formación y Skills.

## Stack técnico

- Framework: Next.js (App Router) + TypeScript
- Estilos: Tailwind CSS
- Deploy: Vercel
- Sin base de datos. Es un sitio estático/SSG. El contenido (experiencia, proyectos,
  skills) vive en archivos de datos locales (p. ej. `src/data/*.ts`), no hardcodeado
  dentro de los componentes, para que sea fácil de actualizar.
- Formulario de contacto: usar un servicio sin backend propio (Formspree, Resend o
  similar) o un simple `mailto:`. No montar servidor ni base de datos solo para esto.

## Estructura de secciones (orden en la página)

1. Hero / presentación — nombre, una frase de posicionamiento que comunique el cruce
   geopolítica + comex + datos + IA, y CTA a contacto.
2. Sobre mí — el cruce de los cuatro pilares en primera persona, breve. Por qué alguien
   que viene de RRII termina construyendo con IA y datos.
3. Experiencia — timeline con trade.ai, ACICE (pasantía comex), Banco de Santa Fe.
4. Proyectos — tarjetas con captura, descripción corta y links. trade.ai primero y
   destacado, contando explícitamente que está construido con IA (RAG, embeddings,
   APIs de modelos). Las tarjetas deben dejar ver el "cómo está hecho", no solo el qué.
5. Skills — agrupadas por los pilares: Datos, IA y automatización (agentes, RAG, APIs
   de modelos), Comex/dominio, Idiomas. Que la categoría de IA no quede como un detalle.
6. Contacto — formulario + links directos (email, LinkedIn).

Nota: el sitio está pensado para ir creciendo. Pablo va a sumar contenido con el tiempo
(artículos de geopolítica tech, nuevos proyectos). La estructura de datos debe hacer
trivial agregar un proyecto o un escrito sin tocar componentes.

## Convenciones de código

- Componentes funcionales de React con TypeScript. Un componente por sección.
- Mobile-first. El sitio tiene que verse bien en celular antes que en desktop.
- Accesibilidad: HTML semántico, contraste correcto, navegación por teclado.
- Soportar tema claro y oscuro con un toggle, igual que la referencia.
- No agregar dependencias pesadas innecesarias. Mantenerlo liviano y rápido.
- Textos del sitio en español rioplatense, tono profesional pero humano, sin sonar a IA.

## Reglas de trabajo

- Antes de generar código, revisar el registro de skills del proyecto.
- Para cambios sustanciales (montar la estructura inicial, una sección completa),
  proponer un plan antes de escribir. Para ajustes chicos, hacerlos directo.
- No inventar experiencia, datos ni proyectos que no estén en el CV o en este archivo.
- No incluir secciones de relleno ni datos falsos de ejemplo en la versión final.
