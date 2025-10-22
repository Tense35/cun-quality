import { Award, TrendingUp, Layers, Building2, BarChart3, Gauge } from 'lucide-react';
import { Modelo } from '../types';

export const modelos: Modelo[] = [
  {
    id: 'cmmi',
    nombre: 'CMMI',
    descripcion: 'Capability Maturity Model Integration',
    detalles: 'CMMI es como un sistema de cinturones en artes marciales para tu organización de software. Define 5 niveles de madurez que van desde el caos inicial hasta la optimización continua. Imagina que tu equipo pasa de ser un grupo improvisado a una máquina bien aceitada que mejora constantemente.',
    beneficios: [
      'Transforma procesos caóticos en operaciones predecibles',
      'Reduce defectos hasta un 70% en los niveles superiores',
      'Mejora la estimación de proyectos en un 50%',
      'Certificación reconocida mundialmente que abre puertas'
    ],
    icon: TrendingUp,
    nivelMadurez: '5 niveles: Inicial, Gestionado, Definido, Cuantitativo, Optimizado',
    mejorPara: 'Organizaciones grandes que buscan mejorar procesos sistemáticamente',
    analogia: 'Como entrenar en un gimnasio: empiezas con ejercicios básicos y gradualmente aumentas la intensidad',
    casoReal: 'Lockheed Martin redujo defectos en 87% tras implementar CMMI nivel 5',
    datoCurioso: 'Las organizaciones con CMMI nivel 5 tienen un 95% de proyectos exitosos vs 16% en nivel 1'
  },
  {
    id: 'spice',
    nombre: 'SPICE (ISO/IEC 15504)',
    descripcion: 'Software Process Improvement and Capability Determination',
    detalles: 'SPICE es como un GPS para la mejora de procesos: te dice exactamente dónde estás y cómo llegar a donde quieres ir. A diferencia de CMMI que evalúa la organización completa, SPICE te permite mejorar procesos específicos uno a uno.',
    beneficios: [
      'Evaluación flexible y personalizable por proceso',
      'Compatible con estándares internacionales como ISO 9001',
      'Resultados cuantificables en mejoras específicas',
      'Ideal para mejora continua adaptable a tu ritmo'
    ],
    icon: Gauge,
    nivelMadurez: '6 niveles de capacidad: Incompleto, Realizado, Gestionado, Establecido, Predecible, Optimizado',
    mejorPara: 'Organizaciones que quieren flexibilidad y mejora gradual',
    analogia: 'Como Spotify: puedes mejorar tus playlists favoritas sin cambiar toda tu biblioteca',
    casoReal: 'Siemens utilizó SPICE para reducir tiempo de desarrollo en 40% en proyectos automotrices',
    datoCurioso: 'SPICE es el estándar preferido en la industria automotriz europea'
  },
  {
    id: 'mccall',
    nombre: 'Modelo McCall',
    descripcion: 'Modelo de Calidad Orientado al Usuario',
    detalles: 'McCall fue pionero en poner al usuario en el centro. Organizó 11 factores de calidad en tres perspectivas clave: operación del producto, revisión y transición. Es como tener un menú de calidad donde eliges los ingredientes más importantes para tu proyecto.',
    beneficios: [
      'Enfoque claro en necesidades del usuario final',
      'Estructura simple y comprensible para todos',
      'Permite priorizar factores según el contexto',
      'Base conceptual de modelos modernos como ISO 25010'
    ],
    icon: Layers,
    nivelMadurez: '11 factores organizados en 3 perspectivas principales',
    mejorPara: 'Proyectos que necesitan equilibrar calidad técnica y experiencia de usuario',
    analogia: 'Como elegir un smartphone: balanceas batería, cámara, precio y rendimiento según tus prioridades',
    casoReal: 'NASA utilizó principios de McCall en software de sistemas críticos del Apollo',
    datoCurioso: 'McCall creó este modelo en 1977, pero sus principios siguen siendo relevantes 45 años después'
  },
  {
    id: 'boehm',
    nombre: 'Modelo Boehm',
    descripcion: 'Modelo de Características de Calidad',
    detalles: 'Boehm refinó el trabajo de McCall creando una jerarquía más clara con características de alto nivel, intermedias y primitivas. Piensa en ello como un árbol genealógico de la calidad: cada característica grande se descompone en partes más pequeñas y medibles.',
    beneficios: [
      'Estructura jerárquica fácil de entender y aplicar',
      'Métricas concretas para cada característica',
      'Enfoque en utilidad real para usuarios',
      'Balance entre calidad técnica y valor de negocio'
    ],
    icon: Building2,
    nivelMadurez: '3 niveles jerárquicos: Características primarias, intermedias y primitivas',
    mejorPara: 'Equipos que necesitan métricas específicas y medibles',
    analogia: 'Como un árbol: el tronco son objetivos principales, las ramas son características y las hojas son métricas',
    casoReal: 'TRW utilizó el modelo Boehm para proyectos de defensa con 99.9% de confiabilidad',
    datoCurioso: 'Boehm también creó el famoso modelo de estimación COCOMO usado mundialmente'
  },
  {
    id: 'iso25010',
    nombre: 'ISO/IEC 25010',
    descripcion: 'Estándar Moderno de Calidad de Software',
    detalles: 'ISO 25010 es la evolución moderna que combina lo mejor de McCall y Boehm con las necesidades actuales. Define 8 características principales de calidad que cubren desde funcionalidad hasta portabilidad, siendo el estándar internacional más utilizado hoy.',
    beneficios: [
      'Estándar internacional actualizado y reconocido',
      'Cubre calidad del producto y calidad en uso',
      'Aplicable a todo tipo de software moderno',
      'Base para certificaciones y auditorías'
    ],
    icon: Award,
    nivelMadurez: '8 características de calidad con subcaracterísticas específicas',
    mejorPara: 'Cualquier organización que busque el estándar actual de calidad',
    analogia: 'Como las certificaciones de construcción: garantiza que tu edificio (software) cumple todos los códigos modernos',
    casoReal: 'Microsoft utiliza ISO 25010 como base para QA en Azure y Office 365',
    datoCurioso: 'ISO 25010 reemplazó a ISO 9126 en 2011 y se actualiza constantemente'
  },
  {
    id: 'devops',
    nombre: 'DevOps Culture',
    descripcion: 'Integración de Desarrollo y Operaciones',
    detalles: 'DevOps es más que herramientas, es una filosofía que rompe los silos entre desarrollo y operaciones. Automatiza todo lo posible y crea un ciclo continuo de entrega de valor. Piensa en ello como una fábrica moderna vs una artesanal.',
    beneficios: [
      'Despliegues hasta 200 veces más frecuentes',
      'Recuperación de fallos 24 veces más rápida',
      'Reduce tiempo de desarrollo en 50%',
      'Mejora colaboración y reduce fricción entre equipos'
    ],
    icon: BarChart3,
    nivelMadurez: 'Continuo: desde adopción inicial hasta cultura DevOps madura',
    mejorPara: 'Equipos que necesitan entregar valor rápido y frecuentemente',
    analogia: 'Como Amazon Prime: del pedido a la entrega en tiempo récord, todo automatizado',
    casoReal: 'Netflix despliega miles de cambios diarios sin interrumpir el servicio',
    datoCurioso: 'Las organizaciones con DevOps maduro gastan 50% menos tiempo apagando incendios'
  }
];
