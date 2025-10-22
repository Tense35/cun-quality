import { LucideIcon } from 'lucide-react';

export interface Modelo {
  id: string;
  nombre: string;
  descripcion: string;
  detalles: string;
  beneficios: string[];
  icon: LucideIcon;
  nivelMadurez?: string;
  mejorPara?: string;
  analogia?: string;
  casoReal?: string;
  datoCurioso?: string;
}

export interface Norma {
  industria: string;
  norma: string;
  descripcion: string;
  aplicaciones: string[];
}

export interface CasoEstudio {
  empresa: string;
  modelo: string;
  resultado: string;
  impacto: string;
}
