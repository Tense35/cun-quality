import { CasoEstudio } from '../types';

export const casosEstudio: CasoEstudio[] = [
  {
    empresa: 'Google',
    modelo: 'Code Review + Testing',
    resultado: 'Implementó revisión de código obligatoria y pruebas automatizadas extensivas, logrando uno de los códigos más estables de la industria.',
    impacto: '99.999% de disponibilidad'
  },
  {
    empresa: 'Netflix',
    modelo: 'CI/CD + Chaos Engineering',
    resultado: 'Adoptó despliegue continuo con miles de cambios diarios y pruebas de resiliencia en producción.',
    impacto: '0 downtime en migraciones'
  },
  {
    empresa: 'Microsoft',
    modelo: 'DevOps + Telemetría',
    resultado: 'Transformó su proceso de desarrollo con DevOps, reduciendo ciclos de release de años a semanas.',
    impacto: '95% menos tiempo de release'
  }
];
