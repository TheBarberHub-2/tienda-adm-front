export interface Pedido {
  id: string;
  clienteId: string;
  peluqueriaId: string;
  fecha: Date;
  /*
  tratamiento: Tratamiento[];;
  estado: EstadoPedido[];
  observaciones?: string;
  */
}