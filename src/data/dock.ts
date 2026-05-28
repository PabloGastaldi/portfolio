import type { ComponentType } from 'react';
import type { WindowId } from '@/components/macos/windows/WindowManagerProvider';
import { TerminalDockIcon } from '@/components/macos/dock/icons/TerminalDockIcon';
import { ProjectsDockIcon } from '@/components/macos/dock/icons/ProjectsDockIcon';
import { CvDockIcon } from '@/components/macos/dock/icons/CvDockIcon';
import { ContactDockIcon } from '@/components/macos/dock/icons/ContactDockIcon';
import { TradeAiDockIcon } from '@/components/macos/dock/icons/TradeAiDockIcon';

export type DockAction =
  | { type: 'open-window'; window: WindowId }
  | { type: 'open-projects' }
  | { type: 'external'; href: string };

export type DockItemConfig = {
  id: string;
  label: string;
  description: string;
  Icon: ComponentType;
  action: DockAction;
};

export const dockItems: DockItemConfig[] = [
  {
    id: 'terminal',
    label: 'Terminal',
    description: 'Mi presentación en consola',
    Icon: TerminalDockIcon,
    action: { type: 'open-window', window: 'terminal' },
  },
  {
    id: 'projects',
    label: 'Proyectos',
    description: 'Lo que construí, en detalle',
    Icon: ProjectsDockIcon,
    action: { type: 'open-projects' },
  },
  {
    id: 'cv',
    label: 'CV',
    description: 'Currículum en PDF',
    Icon: CvDockIcon,
    action: { type: 'open-window', window: 'cv' },
  },
  {
    id: 'contact',
    label: 'Contacto',
    description: 'Escribime un mensaje',
    Icon: ContactDockIcon,
    action: { type: 'open-window', window: 'contact' },
  },
  {
    id: 'tradeai',
    label: 'trade.ai',
    description: 'Abrir tradeai.ar ↗',
    Icon: TradeAiDockIcon,
    action: { type: 'external', href: 'https://tradeai.ar' },
  },
];
