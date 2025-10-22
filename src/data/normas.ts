import { Norma } from '../types';

export const normas: Norma[] = [
  {
    industria: 'Seguridad',
    norma: 'OWASP Top 10',
    descripcion: 'Lista de las 10 vulnerabilidades de seguridad más críticas en aplicaciones web, actualizada periódicamente.',
    aplicaciones: ['Aplicaciones web', 'APIs REST', 'Servicios en línea']
  },
  {
    industria: 'Codificación',
    norma: 'Clean Code',
    descripcion: 'Principios y prácticas para escribir código limpio, legible y mantenible según Robert C. Martin.',
    aplicaciones: ['Desarrollo de software', 'Refactorización', 'Revisión de código']
  },
  {
    industria: 'Arquitectura',
    norma: 'SOLID',
    descripcion: 'Cinco principios de diseño orientado a objetos que promueven código flexible, escalable y fácil de mantener.',
    aplicaciones: ['Diseño de software OOP', 'Arquitectura de sistemas', 'Refactorización']
  },
  {
    industria: 'Testing',
    norma: 'Pirámide de Testing',
    descripcion: 'Estrategia que define la proporción ideal de pruebas unitarias, de integración y end-to-end.',
    aplicaciones: ['Automatización de pruebas', 'QA', 'Desarrollo ágil']
  },
  {
    industria: 'DevOps',
    norma: 'The Twelve-Factor App',
    descripcion: 'Metodología para construir aplicaciones SaaS modernas, escalables y mantenibles en la nube.',
    aplicaciones: ['Microservicios', 'Aplicaciones cloud-native', 'Contenedores']
  }
];
