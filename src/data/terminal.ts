export type TerminalSequence = {
  command: string;
  output: string;
};

export type TerminalScript = {
  prompt: string;
  sequences: TerminalSequence[];
  hint: string;
  hintMobile: string;
};

export const terminalScript: TerminalScript = {
  prompt: 'pablo@portfolio ~ %',
  sequences: [
    {
      command: 'whoami',
      output: 'Pablo Gastaldi — Lic. en Relaciones Internacionales',
    },
    {
      command: 'cat perfil.txt',
      output:
        'Analista de datos y desarrollador con IA.\n' +
        'Cruzo geopolítica, comercio exterior y tecnología\n' +
        'para convertir datos en decisiones y construir\n' +
        'herramientas reales, no demos.',
    },
    {
      command: 'ls proyectos/',
      output: 'trade.ai/   analisis-datos/   automatizaciones/',
    },
  ],
  hint: '› Presioná ENTER para ver mis proyectos',
  hintMobile: '› Tocá para ver mis proyectos',
};
