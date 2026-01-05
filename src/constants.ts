export const LEAD_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  QUALIFIED: 'qualified',
  CONVERTED: 'converted',
  LOST: 'lost',
} as const;

export const LEAD_STATUS_LABELS = {
  new: 'Novo',
  contacted: 'Contatado',
  qualified: 'Qualificado',
  converted: 'Convertido',
  lost: 'Perdido',
} as const;

export const LEAD_STATUS_COLORS = {
  new: '#3b82f6',
  contacted: '#f59e0b',
  qualified: '#10b981',
  converted: '#8b5cf6',
  lost: '#ef4444',
} as const;

export const MESSAGE_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  FILE: 'file',
} as const;

export const PLATFORMS = {
  WHATSAPP: 'whatsapp',
  INSTAGRAM: 'instagram',
  FACEBOOK: 'facebook',
  MANUAL: 'manual',
} as const;

export const PLATFORM_LABELS = {
  whatsapp: 'WhatsApp',
  instagram: 'Instagram',
  facebook: 'Facebook',
  manual: 'Manual',
} as const;

export const API_PROVIDERS = {
  META: 'meta',
  OPENAI: 'openai',
  EVOLUTION: 'evolution',
} as const;
