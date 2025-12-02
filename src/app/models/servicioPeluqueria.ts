export interface ServicioPeluqueria {
  id: string;
  nombre: string;            // Corte de pelo, Mechas, Tinte, Peinado, etc.
  descripcion?: string;
  precio: number;
  duracionMin: number;       // duración estimada para agendar turnos
  imagenUrl?: string;        // opcional, si lo muestras en un catálogo visual
  activo: boolean;           // mostrar/ocultar sin borrar
}
