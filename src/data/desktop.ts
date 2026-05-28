export type StickyNoteConfig = {
  text: string;
  signature?: string;
};

export type WeatherConfig = {
  city: string;
  temperatureC: number;
  condition: 'sunny' | 'cloudy' | 'night';
};

export type CvConfig = {
  pdfPath: string;
  downloadName: string;
};

export const stickyNote: StickyNoteConfig = {
  text: 'PD: si llegaste hasta acá, ya sabés que me importa el detalle. Conversemos.',
  signature: '— P.',
};

export const weather: WeatherConfig = {
  city: 'Santa Fe',
  temperatureC: 24,
  condition: 'sunny',
};

export const cv: CvConfig = {
  pdfPath: '/cv-pablo-gastaldi.pdf',
  downloadName: 'cv-pablo-gastaldi.pdf',
};
